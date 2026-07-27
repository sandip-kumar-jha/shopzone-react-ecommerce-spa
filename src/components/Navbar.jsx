import { Link, NavLink } from "react-router-dom";
import {
  FaShoppingCart,
  FaBars,
  FaTimes
} from "react-icons/fa";

import { useState } from "react";
import { useCart } from "../context/CartContext";


const Navbar = () => {


  const [menuOpen, setMenuOpen] = useState(false);


  const { cart } = useCart();



  const totalItems = cart.reduce(
    (total, item) => total + item.qty,
    0
  );



  const navClass = ({ isActive }) =>

    isActive

      ?

      "text-blue-600 font-semibold"

      :

      "text-slate-700 hover:text-blue-600 transition";




  return (

    <header className="
      sticky 
      top-0 
      z-50 
      bg-white 
      shadow-md
    ">


      <div className="
        max-w-7xl
        mx-auto
        px-6
        h-20
        flex
        items-center
        justify-between
      ">



        {/* Logo */}

        <Link
          to="/"
          className="
          text-3xl
          font-extrabold
          text-blue-600
          "
        >

          ShopZone

        </Link>




        {/* Desktop Navigation */}

        <nav className="
          hidden
          md:flex
          items-center
          gap-8
        ">


          <NavLink
            to="/"
            className={navClass}
          >
            Home
          </NavLink>



          <NavLink
            to="/shop"
            className={navClass}
          >
            Shop
          </NavLink>



          <NavLink
            to="/contact"
            className={navClass}
          >
            Contact
          </NavLink>




          {/* Cart */}

          <Link
            to="/cart"
            className="
              relative
              text-slate-700
              hover:text-blue-600
              transition
            "
          >

            <FaShoppingCart size={23}/>


            {
              totalItems > 0 &&

              <span
                className="
                absolute
                -top-3
                -right-3
                bg-red-500
                text-white
                text-xs
                w-5
                h-5
                rounded-full
                flex
                items-center
                justify-center
                "
              >

                {totalItems}

              </span>

            }


          </Link>




          <Link
            to="/login"
            className="
            bg-blue-600
            text-white
            px-5
            py-2
            rounded-lg
            hover:bg-blue-700
            transition
            "
          >

            Login

          </Link>


        </nav>





        {/* Mobile Button */}

        <button
          className="md:hidden"
          onClick={()=>setMenuOpen(!menuOpen)}
        >

          {
            menuOpen

            ?

            <FaTimes size={24}/>

            :

            <FaBars size={24}/>
          }


        </button>



      </div>






      {/* Mobile Menu */}

      {
        menuOpen &&


        <div className="
          md:hidden
          bg-white
          border-t
          shadow-lg
        ">


          <div className="
            flex
            flex-col
            gap-5
            p-6
          ">


            <NavLink
              to="/"
              className={navClass}
              onClick={()=>setMenuOpen(false)}
            >

              Home

            </NavLink>



            <NavLink
              to="/shop"
              className={navClass}
              onClick={()=>setMenuOpen(false)}
            >

              Shop

            </NavLink>



            <NavLink
              to="/contact"
              className={navClass}
              onClick={()=>setMenuOpen(false)}
            >

              Contact

            </NavLink>




            <NavLink
              to="/cart"
              className={navClass}
              onClick={()=>setMenuOpen(false)}
            >

              Cart ({totalItems})

            </NavLink>




            <Link
              to="/login"
              onClick={()=>setMenuOpen(false)}
              className="
              bg-blue-600
              text-white
              text-center
              py-3
              rounded-lg
              "
            >

              Login

            </Link>



          </div>


        </div>

      }



    </header>

  );

};


export default Navbar;