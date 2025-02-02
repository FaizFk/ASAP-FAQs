import React, { useEffect, useState } from "react";
import { useLocation, Link, useNavigate, useParams } from "react-router-dom";
import LanguageDropdown from "./components/LanguageDropdown";
import { useAuthLanguage } from "./context/AuthLanguageContext";
import WYSIWYG_Editor from "./components/WYSIWYG_Editor";
import axios from "axios";
import ParseText from "./components/ParseText";

const BACKEND_URL = "http://localhost:5000";

const FAQDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const faqId = location.state?.id || id;

  const { isAuth, language } = useAuthLanguage();

  const [editing, setEditing] = useState(false);
  const [faq, setFaq] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/faqs/${faqId}?lang=${language}`);
        setFaq(response.data);
      } catch (error) {
        console.error("Error fetching FAQ:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaq();
  }, [faqId, language]);

  const handleSubmit = async (answer) => {
    if (!editing) {
      setEditing(true);
      return;
    }

    try {
      const updatedFaq = { question: faq.question, answer };
      const response = await axios.put(`${BACKEND_URL}/api/faqs/${faq._id}`, updatedFaq);
      if (response.status === 200) {
        setFaq(response.data.faq);
        setEditing(false);
      } else {
        alert("Some Error Occurred");
      }
    } catch (error) {
      alert("Enter Valid Text");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4 text-green-800">Loading ...</h1>
        <Link to="/" className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
          Back to FAQs
        </Link>
      </div>
    );
  }

  if (!faq) {
    return (
      <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
        <h1 className="text-2xl font-bold mb-4">Question Not Found</h1>
        <Link to="/" className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
          Back to FAQs
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <ParseText className="text-2xl font-bold mb-4">{faq.question}</ParseText>
      {!editing && <ParseText className="text-gray-700 text-lg">{faq.answer}</ParseText>}

      {editing && <WYSIWYG_Editor handleSubmit={handleSubmit} placeholderText={"Enter Your Answer Here"} />}

      {!editing && isAuth && (
        <button onClick={handleSubmit} className="bg-emerald-600 px-2 py-1 m-4 rounded hover:bg-emerald-700 text-white">
          Give Answer
        </button>
      )}

      <div className="mt-6">
        <LanguageDropdown />
      </div>

      <Link to="/" className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600">
        Back to FAQs
      </Link>
    </div>
  );
};

export default FAQDetails;
