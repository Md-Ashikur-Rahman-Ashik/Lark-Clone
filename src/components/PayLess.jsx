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
        <div className="flex justify-center gap-4 mt-4">
          <button className="px-4 flex gap-2 text-xl font-semibold py-2 rounded-full border-[#ffffff33] border-4 bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
            Book a demo{" "}
            <span className="border-white text-[#3370FF] bg-white border-2 rounded-[100px] px-2">
              →
            </span>
          </button>
          <div
            style={{
              backgroundColor: "white",
              display: "inline-block",
              padding: "0.5rem",
              border: "2px solid rgba(128, 128, 128, 0.4)"
            }}
            className="rounded-full"
          >
            <button
              className="text-xl px-4 font-semibold"
              style={{
                background:
                  "linear-gradient(96deg, var(--token-d5a17d1f-2990-4a9f-b1ca-388c105e73de, rgb(71, 82, 230)) 0%, var(--token-f3e71d39-60d3-470b-86c0-689dedddff26, rgb(36, 196, 255)) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Try for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayLess;
