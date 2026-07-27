import { Link } from "react-router-dom";


const Footer = () => {


  return (

    <footer className="bg-slate-950 text-white mt-20">


      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-3">


        {/* Brand Section */}

        <div>


          <h2 className="text-3xl font-bold text-blue-400">
            ShopZone
          </h2>


          <p className="mt-5 text-gray-400 leading-7">

            ShopZone is a modern React E-Commerce SPA built
            using React Router, Context API and REST API
            integration.

          </p>



          <div className="flex gap-4 mt-6">


            <a
              href="#"
              className="hover:text-blue-400 transition"
            >
              Facebook
            </a>


            <a
              href="#"
              className="hover:text-blue-400 transition"
            >
              Instagram
            </a>


            <a
              href="#"
              className="hover:text-blue-400 transition"
            >
              Twitter
            </a>


          </div>


        </div>




        {/* Navigation */}

        <div>


          <h2 className="text-xl font-semibold mb-5">
            Quick Links
          </h2>


          <ul className="space-y-3 text-gray-400">


            <li>

              <Link
                to="/"
                className="hover:text-white transition"
              >
                Home
              </Link>

            </li>


            <li>

              <Link
                to="/shop"
                className="hover:text-white transition"
              >
                Shop
              </Link>

            </li>



            <li>

              <Link
                to="/contact"
                className="hover:text-white transition"
              >
                Contact
              </Link>

            </li>



            <li>

              <Link
                to="/cart"
                className="hover:text-white transition"
              >
                Cart
              </Link>

            </li>


          </ul>


        </div>





        {/* Contact */}

        <div>


          <h2 className="text-xl font-semibold mb-5">
            Contact Us
          </h2>



          <div className="space-y-3 text-gray-400">


            <p>
              📧 support@shopzone.com
            </p>


            <p>
              📞 +91 9876543210
            </p>


            <p>
              📍 India
            </p>


          </div>


        </div>



      </div>





      <div className="
      border-t 
      border-slate-800
      text-center
      py-5
      text-gray-400
      text-sm
      ">


        © 2026 ShopZone. All Rights Reserved.


      </div>



    </footer>

  );

};


export default Footer;