import React from "react";
import kit1 from "../images/Kitchen/kitchen1.jpg";
import kit2 from "../images/Kitchen/kitchen2.jpg";
import kit3 from "../images/Kitchen/kitchen3.jpg";
import kit4 from "../images/Kitchen/kitchen4.jpg";
import kit5 from "../images/Kitchen/kitchen5.jpg";
import kit6 from "../images/Kitchen/kitchen6.jpg";
import kit7 from "../images/Kitchen/kitchen7.jpg";
import kit8 from "../images/Kitchen/kitchen8.jpg";
import kit9 from "../images/Kitchen/kitchen9.jpg";
import kit10 from "../images/Kitchen/kitchen10.jpg";
import kit11 from "../images/Kitchen/kitchen11.jpg";
import kit12 from "../images/Kitchen/kitchen12.jpg";
import kit13 from "../images/Kitchen/kitchen13.jpg";
import kit14 from "../images/Kitchen/kitchen14.jpg";
import kit15 from "../images/Kitchen/kitchen15.jpg";
import kit16 from "../images/Kitchen/kitchen16.jpg";
import kit17 from "../images/Kitchen/kitchen17.jpg";
import kit18 from "../images/Kitchen/kitchen18.jpg";
import kit19 from "../images/Kitchen/kitchen19.jpg";
import kit20 from "../images/Kitchen/kitchen20.jpg";
import kit21 from "../images/Kitchen/kitchen21.jpg";
import kit22 from "../images/Kitchen/kitchen22.jpg";
import kit23 from "../images/Kitchen/kitchen23.jpg";
import kit24 from "../images/Kitchen/kitchen24.jpg";
import kit25 from "../images/Kitchen/kitchen25.jpg";
import kit26 from "../images/Kitchen/kitchen26.jpg";
import kit27 from "../images/Kitchen/kitchen27.jpg";
import kit28 from "../images/Kitchen/kitchen28.jpg";
import kit29 from "../images/Kitchen/kitchen29.jpg";
import kit30 from "../images/Kitchen/kitchen30.jpg";
import kit31 from "../images/Kitchen/kitchen31.jpg";
import kit32 from "../images/Kitchen/kitchen32.jpg";
import kit33 from "../images/Kitchen/kitchen33.jpg";
import kit34 from "../images/Kitchen/kitchen34.jpg";
import kit35 from "../images/Kitchen/kitchen35.jpg";
import kit36 from "../images/Kitchen/kitchen36.jpg";
import kit37 from "../images/Kitchen/kitchen37.jpg";

const Kitchen = () => {
  const images = [
    kit1,
    kit2,
    kit3,
    kit4,
    kit5,
    kit6,
    kit7,
    kit8,
    kit9,
    kit10,
    kit11,
    kit12,
    kit13,
    kit14,
    kit15,
    kit16,
    kit17,
    kit18,
    kit19,
    kit20,
    kit21,
    kit22,
    kit23,
    kit24,
    kit25,
    kit26,
    kit27,
    kit28,
    kit29,
    kit30,
    kit31,
    kit32,
    kit33,
    kit34,
    kit35,
    kit36,
    kit37,
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
        Kitchen Furniture
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
                Kitchen Item {index + 1}
              </h2>
              <p className="text-gray-600">
                Description of the Kitchen item goes here.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kitchen;
