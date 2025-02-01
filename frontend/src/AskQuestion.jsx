import React, { useState } from 'react';
import ReactQuill from 'react-quill';  // Import the Quill editor
import 'react-quill/dist/quill.snow.css';  // Import the Quill styles
import { useNavigate } from 'react-router-dom';

const AskQuestion = () => {
  const [question, setQuestion] = useState('');
  const [editorContent, setEditorContent] = useState('');
  const navigate = useNavigate();

  // Handle the question submission
  const handleSubmit = () => {
    if (question.trim() && editorContent.trim()) {
      alert(`Your question: ${question}\nDetails: ${editorContent}`);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Ask a Question</h1>

      <input
        type="text"
        placeholder="Question Title ..."
        className="w-full max-w-md p-2 border border-gray-300 rounded-md mb-4"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      {/* Quill WYSIWYG Editor */}
      <div className="w-full max-w-md mb-6">
        <ReactQuill
          value={editorContent}
          onChange={setEditorContent}
          placeholder="Type your question details here..."
          modules={{
            toolbar: [
              [{ 'list': 'ordered' }, { 'list': 'bullet' }],
              ['bold', 'italic', 'underline'],
              ['link'],
            ],
          }}
        />
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <button
          className="bg-gray-300 py-2 px-4 rounded-md hover:bg-gray-400"
          onClick={() => navigate('/')}
        >
          Cancel
        </button>
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AskQuestion;
