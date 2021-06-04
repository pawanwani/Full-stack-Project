import React from 'react';
import {Editor, EditorState} from 'draft-js';
 
function MyEditor() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );
 
  const editor = React.useRef(null);
 
  const handler = () => {
    // setEditorState(editorState)
    console.log(editorState) 
  }

  function focusEditor() {
    // editor.current?.focus()      //current.focus();
  }
 
  React.useEffect(() => {
    focusEditor()
  }, []);
 
  return (
    <div onClick={focusEditor}>
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={editorState => console.log(editorState)}
      />
    </div>
  );
}

export default MyEditor;