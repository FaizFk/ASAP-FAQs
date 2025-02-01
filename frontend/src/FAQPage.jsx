import React from 'react';
import { Link } from 'react-router-dom';
import LanguageDropdown from './components/LanguageDropdown';

const FAQPage = () => {
    const faqs = [
        { id: 1, question: "How do I reset my password?" },
        { id: 2, question: "Is there a mobile app available?" },
        { id: 3, question: "How can I contact support?" }
    ];

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
            <AskButton />
            <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>

            <div className="w-full max-w-md space-y-4">
                {faqs.map((faq) => (
                    <QuestionButton faq={faq} />
                ))}
            </div>

            <LanguageDropdown/>
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
    return (
        <div key={faq.id} className="bg-white p-4 rounded-lg shadow-md">
            <Link to={`/faq/${faq.id}`} className="text-lg font-medium text-blue-500 block">
                {faq.question}
            </Link>
        </div>
    );
}

export default FAQPage;
