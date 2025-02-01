import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AskQuestion = () => {
  const [question, setQuestion] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (question.trim()) {
      alert(`Your question has been submitted: ${question}`);
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Ask a Question</h1>
      <input
        type="text"
        placeholder="Type your question..."
        className="w-full max-w-md p-2 border border-gray-300 rounded-md mb-4"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button 
        className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <button 
        className="mt-4 bg-gray-300 py-2 px-6 rounded-md hover:bg-gray-400"
        onClick={() => navigate('/')}
      >
        Cancel
      </button>
    </div>
  );
};

export default AskQuestion;
