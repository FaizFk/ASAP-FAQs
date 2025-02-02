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

function ParseText({ className, children }) {
  return <div className={className}>{renderContent(String(children))}</div>;
}

export default ParseText;
