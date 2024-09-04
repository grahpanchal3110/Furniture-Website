// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav
//       className="p-4"
//       style={{
//         backgroundColor: "rgba(238,224,208)",
//       }}
//     >
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-black text-lg font-bold">VPS Furniture</div>
//         <div className="block lg:hidden"></div>
//         <ul>
//           <li>
//             <Link to="/" className="text-black font-bold hover:text-sky-800">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/office"
//               className="text-black font-bold hover:text-sky-800"
//             >
//               Office
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/reception"
//               className="text-black font-bold hover:text-sky-800"
//             >
//               Reception
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/tvunit"
//               className="text-black font-bold hover:text-sky-800"
//             >
//               TV Unit
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/kitchen"
//               className="text-black font-bold hover:text-sky-800"
//             >
//               Kitchen
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/bedroom"
//               className="text-black font-bold hover:text-sky-800"
//             >
//               Bedroom
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/residence"
//               className="text-black font-bold hover:text-sky-800"
//             >
//               Residence
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/contact"
//               className="text-black font-bold hover:text-sky-800"
//             >
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className="p-4"
      style={{
        backgroundColor: "rgba(238, 224, 208)",
      }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-lg font-bold">VPS Furniture</div>
        <div className="block lg:hidden">
          <button className="text-black font-bold" onClick={handleMenuToggle}>
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
        <ul
          className={`lg:flex lg:items-center lg:space-x-6 lg:ml-auto ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link
              to="/"
              className="text-black font-bold hover:text-sky-800"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/office"
              className="text-black font-bold hover:text-sky-800"
              onClick={() => setIsOpen(false)}
            >
              Office
            </Link>
          </li>
          <li>
            <Link
              to="/reception"
              className="text-black font-bold hover:text-sky-800"
              onClick={() => setIsOpen(false)}
            >
              Reception
            </Link>
          </li>
          <li>
            <Link
              to="/tvunit"
              className="text-black font-bold hover:text-sky-800"
              onClick={() => setIsOpen(false)}
            >
              TV Unit
            </Link>
          </li>
          <li>
            <Link
              to="/kitchen"
              className="text-black font-bold hover:text-sky-800"
              onClick={() => setIsOpen(false)}
            >
              Kitchen
            </Link>
          </li>
          <li>
            <Link
              to="/bedroom"
              className="text-black font-bold hover:text-sky-800"
              onClick={() => setIsOpen(false)}
            >
              Bedroom
            </Link>
          </li>
          <li>
            <Link
              to="/residence"
              className="text-black font-bold hover:text-sky-800"
              onClick={() => setIsOpen(false)}
            >
              Residence
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-black font-bold hover:text-sky-800"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
