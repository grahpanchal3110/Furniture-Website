import React from "react";
import res1 from "../images/Residence/res1.jpg";
import res2 from "../images/Residence/res2.jpg";
import res3 from "../images/Residence/res3.jpg";
import res4 from "../images/Residence/res4.jpg";
import res5 from "../images/Residence/res5.jpg";
import res6 from "../images/Residence/res6.jpg";
import res7 from "../images/Residence/res7.jpg";
import res8 from "../images/Residence/res8.jpg";
import res9 from "../images/Residence/res9.jpg";

const Residence = () => {
  const images = [res1, res2, res3, res4, res5, res6, res7, res8, res9];

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

export default Residence;
