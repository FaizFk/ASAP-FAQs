import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LanguageDropdown from "./components/LanguageDropdown";

const FAQPage = () => {
  const faqs = [
    {
      id: 1,
      question: "How do I reset my password?",
      answer: "Go to settings and click on 'Reset Password'.",
    },
    {
      id: 2,
      question: "Is there a mobile app available?",
      answer: "Yes, we have apps for both Android and iOS.",
    },
    {
      id: 3,
      question: "How can I contact support?",
      answer: "You can contact us via email at support@example.com.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <AskButton />
      <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>

      <div className="w-full max-w-md space-y-4">
        {faqs.map((faq) => (
          <QuestionButton key={faq.id} faq={faq} />
        ))}
      </div>

      <LanguageDropdown />
    </div>
  );
};

function AskButton() {
  return (
    <Link
      to="/ask"
      className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 mb-6"
    >
      Ask a Question
    </Link>
  );
}

function QuestionButton({ faq }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/faq/${faq.id}`, { state: { faq } })}
      className="w-full text-left bg-white p-4 rounded-lg shadow-md text-lg font-medium text-blue-700 cursor-pointer"
    >
      {faq.question}
    </button>
  );
}

export default FAQPage;
