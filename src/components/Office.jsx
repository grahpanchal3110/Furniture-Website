import React from "react";
import office1 from "../images/Office/office1.jpg";
import office2 from "../images/Office/office2.jpg";
import office3 from "../images/Office/office3.jpg";
import office4 from "../images/Office/office4.jpg";
import office5 from "../images/Office/office5.jpg";
import office6 from "../images/Office/office6.jpg";
import office7 from "../images/Office/office7.jpg";
import office8 from "../images/Office/office8.jpg";
import office9 from "../images/Office/office9.jpg";

const Office = () => {
  const images = [
    office1,
    office2,
    office3,
    office4,
    office5,
    office6,
    office7,
    office8,
    office9,
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
              {/* <p className="text-gray-600">
                Description of the Office item goes here.
              </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Office;
