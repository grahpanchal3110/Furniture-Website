// import React from "react";
// import bed1 from "../images/Bed/bed4.jpg";
// import office1 from "../images/Office/office1.jpg";
// import kitchen1 from "../images/Kitchen/kitchen4.jpg";
// import RT1 from "../images/ReceptionTable/RT1.jpg";
// import res1 from "../images/Residence/res3.jpg";
// import TV1 from "../images/TVUnit/TV1.jpg";
// import background from "../images/Bed/background.png";
// import about from "../images/Bed/about.png";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();

//   const handleCardClick = (path) => {
//     navigate(path);
//   };

//   return (
//     <>
//       <div className="home bg-gray-100">
//         <div
//           className="content p-6 bg-gray-100"
//           style={{
//             width: "100%",
//             height: "95vh",
//             backgroundImage: `url(${background})`,
//             backgroundSize: "cover",
//             backgroundPosition: "80%",
//           }}
//         >
//           <h1 className="text-4xl font-bold text-center mb-8">
//             Welcome to Our Furniture Store
//           </h1>
//           <h1
//             className="text-4xl font-bold mb-4"
//             style={{
//               marginTop: "150px",
//               marginLeft: "60px",
//             }}
//           >
//             Make Your Home
//             <br /> Modern Design.
//           </h1>
//           <p className="text-gray-700 mb-6 ml-14">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
//             omnis rerum facilis vero voluptatem tempore minima, tempora officiis
//             dignissimos atque.
//           </p>
//           <div id="btn1">
//             <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ml-14">
//               Shop Now
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto mt-10">
//         <div className="flex flex-wrap justify-evenly">
//           <div className="col-md-4 py-3">
//             <div
//               className="card"
//               style={{
//                 backgroundImage: `url(${office1})`,
//                 backgroundSize: "cover",
//                 boxShadow:
//                   "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
//                 transition: "0.5s ease, transform 0.3s ease",
//                 cursor: "pointer",
//                 borderRadius: ".25rem",
//                 width: "300px",
//                 height: "300px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 textAlign: "center",
//               }}
//               onClick={() => handleCardClick("/office")}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-10px)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//               }}
//             >
//               <div className="card-img-overlay">
//                 <h4 className="card-title">Office</h4>
//                 <div id="btn2">
//                   <button className="bg-blue-400 text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
//                     View More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4 py-3">
//             <div
//               className="card"
//               style={{
//                 backgroundImage: `url(${res1})`,
//                 backgroundSize: "cover",
//                 boxShadow:
//                   "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
//                 transition: "0.5s ease, transform 0.3s ease",
//                 cursor: "pointer",
//                 borderRadius: ".25rem",
//                 width: "300px",
//                 height: "300px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 textAlign: "center",
//               }}
//               onClick={() => handleCardClick("/residence")}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-10px)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//               }}
//             >
//               <div className="card-img-overlay" style={{}}>
//                 <h4 className="card-title">Residence</h4>
//                 <div id="btn2">
//                   <button className="bg-blue-400 text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
//                     View More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-md-4 py-3">
//             <div
//               className="card"
//               style={{
//                 backgroundImage: `url(${kitchen1})`,
//                 backgroundSize: "cover",
//                 boxShadow:
//                   "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
//                 transition: "0.5s ease, transform 0.3s ease",
//                 cursor: "pointer",
//                 borderRadius: ".25rem",
//                 width: "300px",
//                 height: "300px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 textAlign: "center",
//               }}
//               onClick={() => handleCardClick("/kitchen")}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-10px)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//               }}
//             >
//               <div className="card-img-overlay">
//                 <h4 className="card-title">Kitchen</h4>
//                 <div id="btn2">
//                   <button className="bg-blue-400 text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
//                     View More
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container mx-auto mt-10">
//           <div className="flex flex-wrap justify-evenly">
//             <div className="col-md-4 py-3">
//               <div
//                 className="card"
//                 style={{
//                   backgroundImage: `url(${RT1})`,
//                   backgroundSize: "cover",
//                   boxShadow:
//                     "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
//                   transition: "0.5s ease, transform 0.3s ease",
//                   cursor: "pointer",
//                   borderRadius: ".25rem",
//                   width: "300px",
//                   height: "300px",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                 }}
//                 onClick={() => handleCardClick("/reception")}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-10px)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                 }}
//               >
//                 <div className="card-img-overlay">
//                   <h4 className="card-title">Reception Table</h4>
//                   <div id="btn2">
//                     <button className="bg-blue-400 text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
//                       View More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 py-3">
//               <div
//                 className="card"
//                 style={{
//                   backgroundImage: `url(${bed1})`,
//                   backgroundSize: "cover",
//                   boxShadow:
//                     "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
//                   transition: "0.5s ease, transform 0.3s ease",
//                   cursor: "pointer",
//                   borderRadius: ".25rem",
//                   width: "300px",
//                   height: "300px",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                 }}
//                 onClick={() => handleCardClick("/bedroom")}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-10px)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                 }}
//               >
//                 <div className="card-img-overlay">
//                   <h4 className="card-title">BedRoom</h4>
//                   <div id="btn2">
//                     <button className="bg-blue-400 text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
//                       View More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-4 py-3">
//               <div
//                 className="card"
//                 style={{
//                   backgroundImage: `url(${TV1})`,
//                   backgroundSize: "cover",
//                   boxShadow:
//                     "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
//                   transition: "0.5s ease, transform 0.3s ease",
//                   cursor: "pointer",
//                   borderRadius: ".25rem",
//                   width: "300px",
//                   height: "300px",
//                   display: "flex",
//                   flexDirection: "column",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   textAlign: "center",
//                 }}
//                 onClick={() => handleCardClick("/tvunit")}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = "translateY(-10px)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = "translateY(0)";
//                 }}
//               >
//                 <div className="card-img-overlay">
//                   <h4 className="card-title">TV Unit</h4>
//                   <div id="btn2">
//                     <button className="bg-blue-400 text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
//                       View More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full mb-4">
//         <h1 className="text-center font-extrabold mt-16">ABOUT US</h1>
//         <div className="flex flex-col md:flex-row items-center mt-12 space-y-10 md:space-y-0 md:space-x-24">
//           {/* Image Section */}
//           <div className="w-full md:w-1/2 flex justify-center">
//             <div
//               className="w-full h-96 ml-6 bg-cover bg-center rounded-md shadow-lg transform transition-transform duration-300 ease-in-out"
//               style={{ backgroundImage: `url(${about})` }}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.transform = "translateY(-10px)")
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.transform = "translateY(0)")
//               }
//             ></div>
//           </div>

//           {/* Text Section */}
//           <div className="w-full md:w-1/2">
//             <p className="font-bold text-justify leading-relaxed">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
//               incidunt, minima impedit eaque hic eos quidem doloremque possimus
//               soluta molestias eligendi ipsa voluptatibus nesciunt consequatur
//               cupiditate iste rerum. similique dolor. Eaque recusandae
//               accusantium debitis ducimus? Tenetur magni omnis nobis delectus
//               nulla explicabo sequi, nisi corrupti voluptate ea dignissimos.
//               Ipsum voluptas repellat blanditiis, dicta nemo deserunt ratione,
//               quod provident beatae fugit corrupti quidem quo sapiente
//               recusandae fugiat. Nesciunt ipsa ratione eum recusandae nemo,
//               voluptates reprehenderit voluptatum quisquam perspiciatis, magni
//               similique illo totam magnam deserunt porro, et quae lab
//               accusantium obcaecati mollitia nisi dolorum sed atque fuga
//               necessitatibus commodi esse minus et, optio corrupti! Tempora
//               dignissimos dicta nulla porro expedita vitae aperiam error
//               voluptatum, facilis voluptas necessitatibus iste, laudantium
//               voluptates soluta nesciunt dolore! Sapiente sed repudiandae
//               laboriosam fugit, odit labore? Amet exercitationem esse, nulla
//               aspernatur placeat reprehenderit excepturi delectus culpa? Sed
//               quas blanditiis, dolorum sequi deleniti tenetur saepe harum
//               commodi minima voluptatibus quo voluptas libero nam doloribus,
//               eum, id neque minus eveniet! Et consectetur facere sapiente
//               impedit excepturi quis laboriosam .
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

// import React from "react";
// import bed1 from "../images/Bed/bed4.jpg";
// import office1 from "../images/Office/office1.jpg";
// import kitchen1 from "../images/Kitchen/kitchen4.jpg";
// import RT1 from "../images/ReceptionTable/RT1.jpg";
// import res1 from "../images/Residence/res3.jpg";
// import TV1 from "../images/TVUnit/TV1.jpg";
// import background from "../images/Bed/background.png";
// import about from "../images/Bed/about.png";
// import { useNavigate } from "react-router-dom";

// const Card = ({ image, title, path }) => {
//   const navigate = useNavigate();

//   const handleCardClick = () => {
//     navigate(path);
//   };

//   return (
//     <div
//       className="card"
//       style={{
//         backgroundImage: `url(${image})`,
//         backgroundSize: "cover",
//         boxShadow:
//           "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
//         transition: "0.5s ease, transform 0.3s ease",
//         cursor: "pointer",
//         borderRadius: ".25rem",
//         width: "300px",
//         height: "300px",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//       }}
//       onClick={handleCardClick}
//       onMouseEnter={(e) => {
//         e.currentTarget.style.transform = "translateY(-10px)";
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.style.transform = "translateY(0)";
//       }}
//     >
//       <div className="card-img-overlay">
//         <h4 className="card-title">{title}</h4>
//         <button className="bg-white text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
//           View More
//         </button>
//       </div>
//     </div>
//   );
// };

// const Home = () => {
//   return (
//     <>
//       <div className="home bg-gray-100">
//         <div
//           className="content p-6 bg-gray-100"
//           style={{
//             width: "100%",
//             height: "95vh",
//             backgroundImage: `url(${background})`,
//             backgroundSize: "cover",
//             backgroundPosition: "80%",
//           }}
//         >
//           <h1 className="text-4xl font-bold text-center mb-8">
//             Welcome to Our Furniture Store
//           </h1>
//           <h1
//             className="text-4xl font-bold mb-4"
//             style={{
//               marginTop: "150px",
//               marginLeft: "60px",
//             }}
//           >
//             Make Your Home
//             <br /> Modern Design.
//           </h1>
//           <p className="text-gray-700 mb-6 ml-14">
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
//             omnis rerum facilis vero voluptatem tempore minima, tempora officiis
//             dignissimos atque.
//           </p>
//           <div id="btn1">
//             <button className="bg-white text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ml-14">
//               Shop Now
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto mt-10">
//         <div className="flex flex-wrap justify-evenly">
//           <Card image={office1} title="Office" path="/office" />
//           <Card image={res1} title="Residence" path="/residence" />
//           <Card image={kitchen1} title="Kitchen" path="/kitchen" />
//         </div>
//         <div className="flex flex-wrap justify-evenly mt-10">
//           <Card image={RT1} title="Reception Table" path="/reception" />
//           <Card image={bed1} title="Bedroom" path="/bedroom" />
//           <Card image={TV1} title="TV Unit" path="/tvunit" />
//         </div>
//       </div>

//       <div className="w-full mb-4">
//         <h1 className="text-center font-extrabold mt-16">ABOUT US</h1>
//         <div className="flex flex-col md:flex-row items-center mt-12 space-y-10 md:space-y-0 md:space-x-24">
//           {/* Image Section */}
//           <div className="w-full md:w-1/2 flex justify-center">
//             <div
//               className="w-full h-96 ml-10 bg-cover bg-center rounded-md shadow-lg transform transition-transform duration-300 ease-in-out"
//               style={{ backgroundImage: `url(${about})` }}
//               onMouseEnter={(e) =>
//                 (e.currentTarget.style.transform = "translateY(-10px)")
//               }
//               onMouseLeave={(e) =>
//                 (e.currentTarget.style.transform = "translateY(0)")
//               }
//             ></div>
//           </div>

//           {/* Text Section */}
//           <div className="w-full md:w-1/2">
//             <p className="font-bold text-justify leading-relaxed mr-6">
//               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
//               incidunt, minima impedit eaque hic eos quidem doloremque possimus
//               soluta molestias eligendi ipsa voluptatibus nesciunt consequatur
//               cupiditate iste rerum. similique dolor. Eaque recusandae
//               accusantium debitis ducimus? Tenetur magni omnis nobis delectus
//               nulla explicabo sequi, nisi corrupti voluptate ea dignissimos.
//               Ipsum voluptas repellat blanditiis, dicta nemo deserunt ratione,
//               quod provident beatae fugit corrupti quidem quo sapiente
//               recusandae fugiat. Nesciunt ipsa ratione eum recusandae nemo,
//               voluptates reprehenderit voluptatum quisquam perspiciatis, magni
//               similique illo totam magnam deserunt porro, et quae lab
//               accusantium obcaecati mollitia nisi dolorum sed atque fuga
//               necessitatibus commodi esse minus et, optio corrupti! Tempora
//               dignissimos dicta nulla porro expedita vitae aperiam error
//               voluptatum, facilis voluptas necessitatibus iste, laudantium
//               voluptates soluta nesciunt dolore! Sapiente sed repudiandae
//               laboriosam fugit, odit labore? Amet exercitationem esse, nulla
//               aspernatur placeat reprehenderit excepturi delectus culpa? Sed
//               quas blanditiis, dolorum sequi deleniti tenetur saepe harum
//               commodi minima voluptatibus quo voluptas libero nam doloribus, .
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

import React from "react";
import bed1 from "../images/Bed/bed4.jpg";
import Godrej from "../images/Bed/download.jpg";
import Hettich from "../images/Bed/hettich.jpg";
import Yale from "../images/Bed/Yale.jpg";
import Hafele from "../images/Bed/Hafele.png";
import Dorset from "../images/Bed/dorset.svg";
import office1 from "../images/Office/office1.jpg";
import kitchen1 from "../images/Kitchen/kitchen4.jpg";
import RT1 from "../images/ReceptionTable/RT1.jpg";
import res1 from "../images/Residence/res3.jpg";
import TV1 from "../images/TVUnit/TV1.jpg";
import background from "../images/Bed/background.png";
import about from "../images/Bed/about.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const clients = [
  { name: "Godrej", imgSrc: Godrej },
  { name: "Hettich", imgSrc: Hettich },
  { name: "Dorse", imgSrc: Dorset },
  { name: "Yale", imgSrc: Yale },
  { name: "Hafele", imgSrc: Hafele },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000, // 2 seconds
  appendDots: (dots) => (
    <div style={{ bottom: "-50px" }}>
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
};

const services = [
  {
    title: "3D Home Visualisation",
    description:
      "Our 3D Visualisation services help you see how your space will look before we proceed to do a makeover.",
  },
  {
    title: "One Stop Solution",
    description:
      "We provide solutions for all of your interior design demands, from conceptualization to modeling and implementation.",
  },
  {
    title: "Affordable Prices",
    description:
      "We give low-cost interior decoration services that are tailored to your specific tastes and improve your quality of life.",
  },
  {
    title: "Design Experts",
    description:
      "We'll provide you with more than just style, substance, and sass! Let us create a space for you that embodies your individuality.",
  },
  {
    title: "Customise Designs",
    description:
      "Say goodbye to generic designs and say hello to a place that shows your personality.",
  },
  {
    title: "Home Interior Expert",
    description:
      "Allow us to turn your house from simple to stunning, improving its value and practicality while helping you live your dream life.",
  },
];

const Card = ({ image, title, path }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(path);
  };

  return (
    <div
      className="card relative"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        transition: "0.5s ease, transform 0.3s ease",
        cursor: "pointer",
        borderRadius: ".25rem",
        width: "100%",
        maxWidth: "300px",
        height: "200px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
      onClick={handleCardClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-10px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div className="card-img-overlay absolute bottom-0 left-0 right-0 p-4 bg-opacity-50 bg-black text-white">
        <h4 className="card-title text-lg font-bold">{title}</h4>
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300 mt-2">
          View More
        </button>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <>
      <div className="home bg-gray-100">
        <div
          className="content p-6 bg-gray-100"
          style={{
            width: "100%",
            height: "95vh",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 className="text-4xl font-bold text-center mb-4 md:mb-8">
            Welcome to Our Furniture Store
          </h1>
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 px-4 md:px-0">
            Make Your Home
            <br /> Modern Design.
          </h1>
          <p className="text-gray-700 mb-6 px-4 md:px-0 text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            omnis rerum facilis vero voluptatem tempore minima, tempora officiis
            dignissimos atque.
          </p>
          <div className="text-center">
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-10 px-4">
        <div className="flex flex-wrap justify-center gap-24">
          <Card image={office1} title="Office" path="/office" />
          <Card image={res1} title="Residence" path="/residence" />
          <Card image={kitchen1} title="Kitchen" path="/kitchen" />
        </div>
        <div className="flex flex-wrap justify-center gap-24 mt-10">
          <Card image={RT1} title="Reception Table" path="/reception" />
          <Card image={bed1} title="Bedroom" path="/bedroom" />
          <Card image={TV1} title="TV Unit" path="/tvunit" />
        </div>
      </div>
      <div className="w-full mb-4 px-4">
        <h1 className="text-center font-extrabold mt-16 text-2xl md:text-4xl">
          ABOUT US
        </h1>
        <div className="flex flex-col md:flex-row items-center mt-12 space-y-10 md:space-y-0 md:space-x-12">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              className="w-full h-60 md:h-96 bg-cover bg-center rounded-md shadow-lg transform transition-transform duration-300 ease-in-out"
              style={{ backgroundImage: `url(${about})` }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-10px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            ></div>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <p className="font-bold text-justify leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
              incidunt, minima impedit eaque hic eos quidem doloremque possimus
              soluta molestias eligendi ipsa voluptatibus nesciunt consequatur
              cupiditate iste rerum. similique dolor. Eaque recusandae
              accusantium debitis ducimus? Tenetur magni omnis nobis delectus
              nulla explicabo sequi, nisi corrupti voluptate ea dignissimos.
              Ipsum voluptas repellat blanditiis, dicta nemo deserunt ratione,
              quod provident beatae fugit corrupti quidem quo sapiente
              recusandae fugiat. Nesciunt ipsa ratione eum recusandae nemo,
              voluptates reprehenderit voluptatum quisquam perspiciatis, magni
              similique illo totam magnam deserunt porro, et quae lab
              accusantium obcaecati mollitia nisi dolorum sed atque fuga
              necessitatibus commodi esse minus et, optio corrupti! Tempora
              dignissimos dicta nulla porro expedita vitae aperiam error
              voluptatum, facilis voluptas necessitatibus iste, laudantium
              voluptates soluta nesciunt dolore! Sapiente sed repudiandae
              laboriosam fugit, odit labore? Amet exercitationem esse, nulla
              aspernatur placeat reprehenderit excepturi delectus culpa? Sed
              quas blanditiis, dolorum sequi deleniti tenetur saepe harum
              commodi minima voluptatibus quo voluptas libero nam doloribus, .
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4">
        <h2 className="text-4xl font-bold text-center">
          Why Choose VSP furniture in Ahmedabad?
        </h2>
        {/* <p className="text-center mt-4 text-gray-600">
          Here are some of the reasons our clients say they continue to work
          with us.
        </p> */}

        <Slider {...settings} className="mt-8 mb-4">
          {services.map((service, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <h3 className="font-bold text-xl mb-4">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="max-w-7xl mx-auto py-12 px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">
          We partner with the Best Brands to offer Superior Solutions
        </h2>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10"
          style={{
            marginLeft: "150px",
          }}
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="border border-gray-300 shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={client.imgSrc}
                alt={client.name}
                className="mx-auto h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* <footer class="bg-gray-900 text-gray-300 py-8"> */}
      <div
        className="text-black"
        style={{
          backgroundColor: "rgba(238, 224, 208)",
        }}
      >
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-3">
            <div>
              <h5 className="text-xl font-semibold mb-4 text-black">
                About VSP Furniture
              </h5>
              <p className="text-sm">
                VSP Furniture offers a wide range of high-quality furniture
                designed to bring elegance and comfort to your home or office.
                Our collections are crafted to suit various styles and
                preferences.
              </p>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-4 text-black">
                Useful Links
              </h5>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="hover:text-blue-800">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-blue-800">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:text-blue-800">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-800">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xl font-semibold mb-4 text-black">
                Follow Us
              </h5>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-blue-800"
                >
                  <FaFacebook size={32} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-blue-800"
                >
                  <FaTwitter size={32} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-blue-800"
                >
                  <FaInstagram size={32} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-blue-800"
                >
                  <FaLinkedin size={32} />
                </a>
              </div>
            </div>
            <div>
              <h5 className="text-xl font-semibold mb-4 text-black">
                Contact Us
              </h5>
              <p>
                <i className="fas fa-phone-alt"></i> +123 456 7890
              </p>
              <p>
                <i className="fas fa-envelope"></i> info@vspfurniture.com
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i> 37 - Vrundavan Society
                Near Vishwkarma Mandir - Chandlodiya - 382481, Ahmedabad, India
              </p>
            </div>
          </div>

          <div className="text-center pt-2 border-t font-semibold border-gray-700 mt-2">
            <p>© 2024 VSP Furniture. All rights reserved.</p>
          </div>
        </div>
      </div>
      {/* </footer> */}
    </>
  );
};

export default Home;
