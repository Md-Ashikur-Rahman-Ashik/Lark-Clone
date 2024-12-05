import { useState } from "react";

const AccordionCard = () => {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((i) => i !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  const sections = [
    {
      title: "What is Lark?",
      content:
        "Lark is a comprehensive productivity superapp designed to streamline collaboration. It combines chat, meetings, document editing, project management, and automation tools in one intuitive platform, simplifying your workflow and enhancing team communication.",
    },
    {
      title: "What is Lark used for?",
      content:
        "Lark is used for seamless team communication, project management, and collaboration.",
    },
    {
      title: "Who owns Lark?",
      content: "Lark is owned by ByteDance, the company behind TikTok.",
    },
    {
      title: "What are Lark's safety and security practices?",
      content: "Lark uses end-to-end encryption to ensure data security.",
    },
    {
      title: "Is Lark free?",
      content:
        "Lark offers a free plan with basic features and premium plans for advanced functionality.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Find the answers that you need
      </h2>
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index} className="border-b pb-2">
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left flex justify-between items-center text-lg font-medium py-2 focus:outline-none"
            >
              <span>{section.title}</span>
              <span className="text-xl">
                {openSections.includes(index) ? "x" : "+"}
              </span>
            </button>
            {openSections.includes(index) && (
              <p className="mt-2 text-gray-700">{section.content}</p>
            )}
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <button className="w-full md:w-auto px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Book a demo
        </button>
        <button className="w-full md:w-auto px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
          Explore Lark Blogs
        </button>
      </div>
    </div>
  );
};

export default AccordionCard;
