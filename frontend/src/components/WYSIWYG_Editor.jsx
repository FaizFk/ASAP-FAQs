import { useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";

function WYSIWYG_Editor({ handleSubmit, placeholderText }) {
  const [ text, setText ] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full max-w-md mb-6">
        <ReactQuill
          value={text}
          onChange={setText}
          placeholder={placeholderText}
          modules={{
            toolbar: [[{ list: "ordered" }, { list: "bullet" }], ["bold", "italic", "underline"], ["link"]],
          }}
        />
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <button className="bg-gray-300 py-2 px-4 rounded-md hover:bg-gray-400" onClick={() => navigate("/")}>
          Cancel
        </button>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600" onClick={() => handleSubmit(text)}>
          Submit
        </button>
      </div>
    </>
  );
}

export default WYSIWYG_Editor;
