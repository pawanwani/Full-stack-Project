import {Editor} from 'react-draft-wysiwyg';
import 'F:/mindtree/Full_Project_01_words_of_wonder/Words-of-Wonder/frontend-react/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState} from 'draft-js';
import React, { useState } from 'react';
import {stateToHTML} from 'draft-js-export-html';
import {Button, Container, TextField} from '@material-ui/core';
import SavePost from '../requests/putPost';





const WEditor = () =>{
    const [state, setState] = useState(EditorState.createEmpty());
    const [title, setTitle] = useState(' ');

    const onChange = (editor:any) =>{
        setState(editor);
    }

    const handleSave = () => {
        console.log(stateToHTML(state.getCurrentContent()));
        SavePost("the sixth Encounter", 'THE DUMMY RECORD',stateToHTML(state.getCurrentContent()), '60aa4d0c9e852410a0a36c00', ['dummy', 'data'])
    }
    
    const handleTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    }

    return(
        <Container>
            <Editor
                editorState = {state}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                onEditorStateChange = {onChange}
                toolbar={{
                    inline: { inDropdown: true },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    link: { inDropdown: true },
                    history: { inDropdown: true },
                  }}
                
                >
            </Editor>
            <div>
            {/* <textarea
                disabled
                value={stateToHTML(state.getCurrentContent())}
            /> */}
            <Button variant = "contained" color = "primary" onClick = {handleSave}>
                Save
            </Button>
            </div>
        </Container>
    )
}


export default WEditor;