import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BACKEND_URL = "http://localhost:5000";

const AskQuestion = () => {
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  // Handle the question submission
  const handleSubmit = async () => {
    if (question.trim()) {
      try {
        const response = await axios.post(
          `${BACKEND_URL}/api/faqs`,
          { question:question, answer: "Pending review" },
          { headers: { "Content-Type": "application/json" } }
        );
        navigate("/");
      } catch (error) {
        alert(
          "Error submitting the Question: " + error.response?.data?.error ||
            error.message
        );
      }
    } else {
      alert("Please provide a Question.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Ask a Question</h1>

      {/* Quill WYSIWYG Editor */}
      <div className="w-full max-w-md mb-6">
        <ReactQuill
          value={question}
          onChange={setQuestion}
          placeholder="Type your question details here..."
          modules={{
            toolbar: [
              [{ list: "ordered" }, { list: "bullet" }],
              ["bold", "italic", "underline"],
              ["link"],
            ],
          }}
        />
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <button
          className="bg-gray-300 py-2 px-4 rounded-md hover:bg-gray-400"
          onClick={() => navigate("/")}
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
