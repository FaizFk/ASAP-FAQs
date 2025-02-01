import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import WYSIWYG_Editor from "./components/WYSIWYG_Editor";

const BACKEND_URL = "http://localhost:5000";

const AskQuestion = () => {
  const navigate = useNavigate();

  // Handle the question submission
  const handleSubmit = async (question) => {
    if (question.trim()) {
      try {
        const response = await axios.post(
          `${BACKEND_URL}/api/faqs`,
          { question:question, answer: "No Answer Yet" },
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
      <WYSIWYG_Editor handleSubmit={handleSubmit} placeholderText={"Enter your Question Here"}/>
    </div>
  );
};

export default AskQuestion;
