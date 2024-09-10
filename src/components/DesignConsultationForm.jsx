import React, { useState } from "react";

const DesignConsultationForm = () => {
  const [propertyType, setPropertyType] = useState("1 BHK");

  const handlePropertyTypeChange = (type) => {
    setPropertyType(type);
  };

  return (
    <div className="bg-white rounded-lg shadow-md max-w-md mx-auto my-8 p-6">
      <div
        className="bg-cover bg-center h-48 rounded-t-lg"
        style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}
      ></div>
      <h2 className="text-2xl font-bold text-center mt-4">
        Get a free design consultation
      </h2>

      <div className="mt-4">
        <h3 className="font-semibold">Property type</h3>
        <div className="flex justify-between mt-2">
          {["1 BHK", "2 BHK", "3 BHK", "4+ BHK / Duplex"].map((type) => (
            <button
              key={type}
              className={`px-4 py-2 rounded-md font-semibold ${
                propertyType === type
                  ? "bg-red-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => handlePropertyTypeChange(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <form className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="tel"
          placeholder="Phone or Whatsapp No."
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="text"
          placeholder="Location"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="text"
          placeholder="Pin Code"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </form>

      <div className="mt-6">
        <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
          BOOK A FREE CONSULTATION
        </button>
      </div>
    </div>
  );
};

export default DesignConsultationForm;
