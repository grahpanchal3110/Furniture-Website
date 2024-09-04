import React from "react";
import rt1 from "../images/ReceptionTable/RT1.jpg";
import rt2 from "../images/ReceptionTable/RT2.jpg";
import rt3 from "../images/ReceptionTable/RT3.jpg";
import rt4 from "../images/ReceptionTable/RT4.jpg";
import rt5 from "../images/ReceptionTable/RT5.jpg";
import rt6 from "../images/ReceptionTable/RT6.jpg";
import rt7 from "../images/ReceptionTable/RT7.jpg";
import rt8 from "../images/ReceptionTable/RT8.jpg";
import rt9 from "../images/ReceptionTable/RT9.jpg";
import rt10 from "../images/ReceptionTable/RT10.jpg";
import rt11 from "../images/ReceptionTable/RT11.jpg";
import rt12 from "../images/ReceptionTable/RT12.jpg";
import rt13 from "../images/ReceptionTable/RT13.jpg";
import rt14 from "../images/ReceptionTable/RT14.jpg";
import rt15 from "../images/ReceptionTable/RT15.jpg";
import rt16 from "../images/ReceptionTable/RT16.jpg";
import rt17 from "../images/ReceptionTable/RT17.jpg";
import rt18 from "../images/ReceptionTable/RT18.jpg";
import rt19 from "../images/ReceptionTable/RT19.jpg";
import rt20 from "../images/ReceptionTable/RT20.jpg";
import rt21 from "../images/ReceptionTable/RT21.jpg";

const Reception = () => {
  const images = [
    rt1,
    rt2,
    rt3,
    rt4,
    rt5,
    rt6,
    rt7,
    rt8,
    rt9,
    rt10,
    rt11,
    rt12,
    rt13,
    rt14,
    rt15,
    rt16,
    rt17,
    rt18,
    rt19,
    rt20,
    rt21,
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

export default Reception;
