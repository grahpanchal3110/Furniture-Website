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

import React from "react";
import bed1 from "../images/Bed/bed4.jpg";
import office1 from "../images/Office/office1.jpg";
import kitchen1 from "../images/Kitchen/kitchen4.jpg";
import RT1 from "../images/ReceptionTable/RT1.jpg";
import res1 from "../images/Residence/res3.jpg";
import TV1 from "../images/TVUnit/TV1.jpg";
import background from "../images/Bed/background.png";
import about from "../images/Bed/about.png";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, path }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(path);
  };

  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        transition: "0.5s ease, transform 0.3s ease",
        cursor: "pointer",
        borderRadius: ".25rem",
        width: "300px",
        height: "300px",
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
      <div className="card-img-overlay">
        <h4 className="card-title">{title}</h4>
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
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
            backgroundPosition: "80%",
          }}
        >
          <h1 className="text-4xl font-bold text-center mb-8">
            Welcome to Our Furniture Store
          </h1>
          <h1
            className="text-4xl font-bold mb-4"
            style={{
              marginTop: "150px",
              marginLeft: "60px",
            }}
          >
            Make Your Home
            <br /> Modern Design.
          </h1>
          <p className="text-gray-700 mb-6 ml-14">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
            omnis rerum facilis vero voluptatem tempore minima, tempora officiis
            dignissimos atque.
          </p>
          <div id="btn1">
            <button className="bg-white text-black px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ml-14">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap justify-evenly">
          <Card image={office1} title="Office" path="/office" />
          <Card image={res1} title="Residence" path="/residence" />
          <Card image={kitchen1} title="Kitchen" path="/kitchen" />
        </div>
        <div className="flex flex-wrap justify-evenly mt-10">
          <Card image={RT1} title="Reception Table" path="/reception" />
          <Card image={bed1} title="Bedroom" path="/bedroom" />
          <Card image={TV1} title="TV Unit" path="/tvunit" />
        </div>
      </div>

      <div className="w-full mb-4">
        <h1 className="text-center font-extrabold mt-16">ABOUT US</h1>
        <div className="flex flex-col md:flex-row items-center mt-12 space-y-10 md:space-y-0 md:space-x-24">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              className="w-full h-96 ml-10 bg-cover bg-center rounded-md shadow-lg transform transition-transform duration-300 ease-in-out"
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
            <p className="font-bold text-justify leading-relaxed mr-6">
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
    </>
  );
};

export default Home;
