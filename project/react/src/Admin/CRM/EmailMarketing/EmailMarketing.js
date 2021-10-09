import React, {useState} from 'react';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function EmailMarketing() {
    const [editor, setEditor] = useState();

    const onMailTemplateSave = () => {
        console.log(editor.getData());
    }

    return (
        <>
            <h2>Email marketing</h2>
            <h3>Create mail template</h3>
            <CKEditor
                editor={ClassicEditor}
                data="<p>Welcome users!</p>"
                onReady={(editor) => {
                    editor.editing.view.change((writer) => {
                        writer.setStyle(
                            "height",
                            "300px",
                            editor.editing.view.document.getRoot()
                        );
                    });

                    setEditor(editor);
                }}
            />
            <button className="btn btn-primary" style={{marginTop: 10}} onClick={onMailTemplateSave}>Save</button>
            <hr/>
            <h3>Send mail to users</h3>
        </>
    );

}

export default EmailMarketing;