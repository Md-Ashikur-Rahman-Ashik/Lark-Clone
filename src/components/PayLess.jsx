const PayLess = () => {
  return (
    <div className="rounded-lg shadow-md">
      <img
        src="/PayLessBg.avif"
        className="relative"
        alt="Pay less background"
      />
      <div className="text-center absolute top-[6%] left-[20%]">
        <h2 className="text-[32px] font-bold text-[#1F2329] mb-4">
          Pay less to get more today
        </h2>
        <p className="text-[#646A73] text-[18px] mb-4">
          Welcome to contact us. Lark performance consultants will provide you
          with full support.
        </p>
        <ul className="list-none flex items-center p-0 gap-4">
          <li className="text-gray-600 flex justify-center gap-1">
            <img src="/Tick.svg" alt="Tick" className="w-6" />
            Share advanced work methods
          </li>
          <li className="text-gray-600 mb-2 flex justify-center gap-1">
            <img src="/Tick.svg" alt="Tick" className="w-6" />
            Deliver industry best practices
          </li>
          <li className="text-gray-600 mb-2 flex justify-center gap-1">
            <img src="/Tick.svg" alt="Tick" className="w-6" />
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
    </div>
  );
};

export default PayLess;
