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
    <div className="container mx-auto">
      <div className="p-4 md:p-8 flex flex-col md:flex-row gap-6">
        {/* Left Section: Accordion */}
        <div className="flex-1">
          <h2 className="text-[32px] font-semibold mb-4">
            Find the answers that you need
          </h2>
          <div className="space-y-4">
            {sections.map((section, index) => (
              <div key={index} className="border-b pb-2">
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full text-left flex gap-4 items-center text-lg font-medium py-2 focus:outline-none"
                >
                  <span className="text-xl opacity-40">
                    {openSections.includes(index) ? "x" : "+"}
                  </span>
                  <span>{section.title}</span>
                </button>
                {openSections.includes(index) && (
                  <p className="mt-2 text-gray-700">{section.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1 md:max-w-sm">
          <div className="bg-gray-100 p-4 rounded-lg mb-4 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Book a consultation</h3>
            <p className="text-gray-700 text-sm mb-4">
              Get dedicated support to make Lark work for you.
            </p>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Book a demo &rarr;
            </button>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Discover insights</h3>
            <p className="text-gray-700 text-sm mb-4">
              Uncover the advantages of Lark for top businesses, gain
              productivity insights, and compare software.
            </p>
            <button className="w-full px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
              Explore Lark Blogs &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionCard;
