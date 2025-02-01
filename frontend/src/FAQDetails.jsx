import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import LanguageDropdown from './components/LanguageDropdown';

const FAQDetails = () => {
    const location = useLocation();
    const faq = location.state?.faq;

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
            <h1 className="text-2xl font-bold mb-4">{faq.question}</h1>
            <p className="text-gray-700 text-lg">{faq.answer}</p>

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
