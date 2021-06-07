import React, { useState } from 'react';
import {EditorState, Editor, RichUtils, AtomicBlockUtils} from 'draft-js';
import {stateToHTML} from 'draft-js-export-html';
import {IconButton} from '@material-ui/core';
import {FormatBold, FormatItalic, Save, InsertPhoto} from '@material-ui/icons';
import createImagePlugin from 'draft-js-image-plugin';
 
const imagePlugin = createImagePlugin();
const plugin:any = [imagePlugin];

const RichEditor = () =>{
    const [editorState, seteditorState] = useState(EditorState.createEmpty())
    // const [htmlContent, setHtmlcontent] = useState('');
    
    const updateEditor =(editState:any) => {
        seteditorState(editState);
    }

    const handleKeyCommand = (command:any, editorState:any) =>{
        const newState = RichUtils.handleKeyCommand(editorState, command)
        if(newState) {
            updateEditor(newState);
            return 'handled'
        }
        return 'not-handled'
    }

// Bold Text
    const _onBoldClick = (e:any) =>{
        e.preventDefault();
        updateEditor(RichUtils.toggleInlineStyle(editorState, 'BOLD'))
    }
// Italic Text
    const _onItalicClick = (e:any) => {
        e.preventDefault();
        updateEditor(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))
    }
// Image Handler
    const insertImage = (editState:any, base64:any) =>{
        const currentState = editState.getCurrentContent();
        const contentStateWithEntity = currentState.createEntity(
            'image',
            'IMMUTABLE',
            {src : base64},
        );
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(
            editState,
            {currentContent : contentStateWithEntity },
        );
        return AtomicBlockUtils.insertAtomicBlock(newEditorState, entityKey, ' ');
    }

    // insert Image
    const inserting = () => {
        //const base64 = 'data:image/png;base64,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';
        const base64 = "data:image/png;base64,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"
        const newEditorState = insertImage(editorState, base64);
    
        seteditorState(newEditorState);
    }
    

    const handleSave = () =>{
        console.log(stateToHTML(editorState.getCurrentContent()))
    }
    
    
    return(
        <div className = "text-editor">
            <div style = {{backgroundColor : "lightgray"}}>
                <IconButton aria-label = "Bold" onClick = {_onBoldClick}>
                    <FormatBold />
                </IconButton>
                <IconButton aria-label = "Italic" onClick = {_onItalicClick}>
                    <FormatItalic />
                </IconButton>
                <IconButton aria-label = "Insert Photo" onClick = {inserting}>
                    <InsertPhoto />
                </IconButton>
                <IconButton aria-label = "save" onClick = {handleSave}>
                    <Save />
                </IconButton>
            </div>
            <Editor 
                placeholder = "Place your Blog in here."
                editorState = {editorState}
                handleKeyCommand = {handleKeyCommand}
                onChange = {updateEditor}
                
            />
        </div>
    )
}


export default RichEditor;