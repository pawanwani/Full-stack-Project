import {Editor} from 'react-draft-wysiwyg';
import 'F:/mindtree/Full_Project_01_words_of_wonder/Words-of-Wonder/frontend-react/node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, convertToRaw } from 'draft-js';
import { useState } from 'react';
import {stateToHTML} from 'draft-js-export-html';


const WEditor = () =>{
    const [state, setState] = useState(EditorState.createEmpty());

    const onChange = (editor:any) =>{
        setState(editor);
    }

    return(
        <div>
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
            <textarea
                disabled
                value={stateToHTML(state.getCurrentContent())}
            />
            </div>
        </div>
    )
}


export default WEditor;