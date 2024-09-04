import React from "react";
import bed1 from "../images/Bed/bed1.jpg";
import bed2 from "../images/Bed/bed2.jpg";
import bed3 from "../images/Bed/bed3.jpg";
import bed4 from "../images/Bed/bed4.jpg";
import bed5 from "../images/Bed/bed5.jpg";
import bed6 from "../images/Bed/bed6.jpg";
import bed7 from "../images/Bed/bed7.jpg";
import bed8 from "../images/Bed/bed8.jpg";
import bed9 from "../images/Bed/bed9.jpg";
import bed10 from "../images/Bed/bed10.jpg";
import bed11 from "../images/Bed/bed11.jpg";
import bed12 from "../images/Bed/bed12.jpg";
import bed13 from "../images/Bed/bed13.jpg";

const Bedroom = () => {
  const images = [
    bed1,
    bed2,
    bed3,
    bed4,
    bed5,
    bed6,
    bed7,
    bed8,
    bed9,
    bed10,
    bed11,
    bed12,
    bed13,
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1
        className="text-4xl font-bold text-center mb-8"
        style={{
          width: "100%",
          border: "1px solid black",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        Bedroom Furniture
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden"
            style={{
              //   boShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            }}
          >
            <img
              src={src}
              alt={`Bedroom ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                Bedroom Item {index + 1}
              </h2>
              <p className="text-gray-600">
                Description of the bedroom item goes here.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bedroom;
