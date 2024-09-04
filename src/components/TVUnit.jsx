import React from "react";
import tv1 from "../images/TVUnit/TV1.jpg";
import tv2 from "../images/TVUnit/TV2.jpg";
import tv3 from "../images/TVUnit/TV3.jpg";
import tv4 from "../images/TVUnit/TV4.jpg";
import tv5 from "../images/TVUnit/TV5.jpg";
import tv6 from "../images/TVUnit/TV6.jpg";
import tv7 from "../images/TVUnit/TV7.jpg";
import tv8 from "../images/TVUnit/TV8.jpg";
import tv9 from "../images/TVUnit/TV9.jpg";
import tv10 from "../images/TVUnit/TV10.jpg";
import tv11 from "../images/TVUnit/TV11.jpg";
import tv12 from "../images/TVUnit/TV12.jpg";
import tv13 from "../images/TVUnit/TV13.jpg";
import tv14 from "../images/TVUnit/TV14.jpg";
import tv15 from "../images/TVUnit/TV15.jpg";
import tv16 from "../images/TVUnit/TV16.jpg";
import tv17 from "../images/TVUnit/TV17.jpg";
import tv18 from "../images/TVUnit/TV18.jpg";

const TVUnit = () => {
  const images = [
    tv1,
    tv2,
    tv3,
    tv4,
    tv5,
    tv6,
    tv7,
    tv8,
    tv9,
    tv10,
    tv11,
    tv12,
    tv13,
    tv14,
    tv15,
    tv16,
    tv17,
    tv18,
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
        Office Furniture
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
              alt={`Office ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">
                Office Item {index + 1}
              </h2>
              <p className="text-gray-600">
                Description of the Office item goes here.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TVUnit;
