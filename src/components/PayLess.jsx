const PayLess = () => {
  return (
    <div className="rounded-lg text-center shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Pay less to get more today
      </h2>
      <ul className="list-none p-0">
        <li className="text-gray-600 mb-2">Share advanced work methods</li>
        <li className="text-gray-600 mb-2">Deliver industry best practices</li>
        <li className="text-gray-600 mb-2">
          Assist organizations to improve efficiency
        </li>
      </ul>
      <div className="flex justify-center mt-4">
        <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
          Book a demo →
        </button>
        <button className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">
          Try for free
        </button>
      </div>
    </div>
  );
};

export default PayLess;
