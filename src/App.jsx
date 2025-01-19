import React, { useState } from "react";
import { FiCopy } from "react-icons/fi"; // Import copy icon

const App = () => {
  const [noClicks, setNoClicks] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [copied, setCopied] = useState(false);

  const messages = [
    "Are you sure? 😜",
    "Think again! 🤔",
    "Really? 🥲",
    "Don't be so mean! 😭",
    "Come on, just click Sure! 🤗",
    "Fine, I give up... 😔",
  ];

  const handleNoClick = () => {
    if (noClicks < 5) {
      setNoClicks(noClicks + 1);
    }
  };

  const handleSureClick = () => {
    setShowCard(true);
  };

  const handleDoneClick = () => {
    alert("Thanks for the funds! 💸");
    setShowCard(false);
  };

  const handleCopy = () => {
    const accountNumber = "0086622465";
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center relative">
      <h1 className="text-3xl font-bold mb-5 text-center">
        Can you send me funds? 💰
      </h1>

      {/* Dynamic messages under header */}
      <div className="mb-5 text-center text-lg text-gray-700">
        {noClicks > 0 && noClicks <= 5 && <p>{messages[noClicks - 1]}</p>}
      </div>

      {/* Buttons */}
      <div className="relative flex justify-between gap-4 items-center mt-5">
        {/* Sure Button */}
        <button
          onClick={handleSureClick}
          className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600"
        >
          Sure
        </button>

        {/* No Button */}
        {noClicks < 6 && (
          <button
            onClick={handleNoClick}
            className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
          >
            No
          </button>
        )}
      </div>

      {/* Modal for Account Details */}
      {showCard && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white w-96 p-5 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-3 text-center">Account Details</h2>
            {/* Account Number */}
            <div className="text-lg flex justify-between items-center mb-3">
              <span>
                <strong>Account Number:</strong> 0086622465
              </span>
              <button
                onClick={handleCopy}
                className="flex items-center bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
              >
                <FiCopy className="text-blue-600 w-5 h-5 mr-1" />
                Copy
              </button>
            </div>
            {copied && <p className="text-green-500 text-sm mb-3 text-center">Account number copied!</p>}
            {/* Other Account Details */}
            <p className="text-lg">
              <strong>Name:</strong> Igbikialabo Soala Favour
            </p>
            <p className="text-lg">
              <strong>Bank:</strong> Sterling Bank
            </p>
            <button
              onClick={handleDoneClick}
              className="bg-blue-500 text-white mt-5 px-4 py-2 w-full rounded-lg shadow hover:bg-blue-600"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
