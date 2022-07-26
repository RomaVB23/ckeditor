import "./App.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
function App() {
  return (
    <div className="App">
      <h2 className="texteditor">Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        data="<h1><strong>This Fucking Example</strong></h1>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}

        config={
          {
            ckfinder: {
              uploadURL: '/uploads'
            }
          }
        }

        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        // onBlur={(event, editor) => {
        //   console.log("Blur.", editor);
        // }}
        // onFocus={(event, editor) => {
        //   console.log("Focus.", editor);
        // }}
      />
    </div>
  );
}

export default App;
