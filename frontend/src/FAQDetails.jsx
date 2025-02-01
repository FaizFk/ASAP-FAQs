import React from "react";
import { useLocation, Link } from "react-router-dom";
import LanguageDropdown from "./components/LanguageDropdown";
import parse from "html-react-parser";

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
          <a href={href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline hover:text-blue-700">
            {domNode.children[0].data}
          </a>
        );
      }
    },
  });

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
      <h1 className="text-2xl font-bold mb-4">{renderContent(faq.question)}</h1>
      <p className="text-gray-700 text-lg">{renderContent(faq.answer)}</p>

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
