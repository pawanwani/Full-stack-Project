import React from 'react';
import RichTextFeild from 'mui-rte';
import {convertFromRaw} from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
// import {stateToHTML} from 'draft-js-export-html';

const RichField = () =>{

    const save = (data:any) =>{
        // const out1 = stateToHTML(data);
        const out = JSON.parse(data);
        console.log(out);
        const out1 = convertFromRaw(out);
        console.log(stateToHTML(out1));
    }
    const stylediv = {
        border : '2px solid black'
    }
    return(
        <div style = {stylediv}>
            <RichTextFeild
                label = "Press on save icon when done."
                onSave = {save}
                inlineToolbar = {true}
            >
            </RichTextFeild>
        </div>
    )
}


export default RichField;