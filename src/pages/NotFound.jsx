import { Link } from "react-router-dom";
import { FaHome, FaShoppingBag } from "react-icons/fa";


const NotFound = () => {


  return (

    <div className="
      min-h-[80vh]
      flex
      items-center
      justify-center
      px-6
    ">


      <div className="
        text-center
        bg-white
        shadow-xl
        rounded-2xl
        p-10
        max-w-lg
      ">



        <h1 className="
          text-8xl
          font-extrabold
          text-blue-600
        ">

          404

        </h1>





        <h2 className="
          text-3xl
          font-bold
          mt-5
        ">

          Page Not Found

        </h2>





        <p className="
          mt-4
          text-gray-500
          leading-7
        ">

          Sorry, the page you are looking for
          does not exist or has been moved.

        </p>







        <div className="
          flex
          justify-center
          gap-4
          mt-8
        ">



          <Link

            to="/"

            className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-lg
            flex
            items-center
            gap-2
            hover:bg-blue-700
            transition
            "

          >

            <FaHome/>

            Home


          </Link>






          <Link

            to="/shop"

            className="
            bg-green-600
            text-white
            px-6
            py-3
            rounded-lg
            flex
            items-center
            gap-2
            hover:bg-green-700
            transition
            "

          >

            <FaShoppingBag/>

            Shop


          </Link>



        </div>




      </div>



    </div>

  );


};


export default NotFound;