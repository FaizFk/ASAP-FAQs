import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LanguageDropdown from "./components/LanguageDropdown";
import axios from "axios";
import parse from "html-react-parser";

const BACKEND_URL = "http://localhost:5000";

//this is to display colorful links
const renderContent = (html) =>
  parse(html, {
    replace: (domNode) => {
      if (domNode.name === "a") {
        let href = domNode.attribs.href;

        // If href doesn't start with http/https, prepend https://
        if (!href.startsWith("http://") && !href.startsWith("https://")) {
          href = "https://" + href;
        }

        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700"
          >
            {domNode.children[0].data}
          </a>
        );
      }
    },
  });

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/faqs`);
        setFaqs(response.data); // Store the FAQs in state
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchFaqs();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <AskButton />
      <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>

      {faqs.length == 0 ? (
        <p className="font-bold text-3xl text-green-700">Loading ...</p>
      ) : (
        <div className="w-full max-w-md space-y-4">
          {faqs.map((faq) => (
            <QuestionButton key={faq.id} faq={faq} />
          ))}
        </div>
      )}

      <LanguageDropdown />
    </div>
  );
};

function AskButton() {
  return (
    <Link to="/ask" className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 mb-6">
      Ask a Question
    </Link>
  );
}

function QuestionButton({ faq }) {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(`/faq/${faq.id}`, { state: { faq } })}
      className="w-full text-left bg-white p-4 rounded-lg shadow-md text-lg font-medium text-gray-700 cursor-pointer"
    >
      {renderContent(faq.question)}
    </button>
  );
}

export default FAQPage;
