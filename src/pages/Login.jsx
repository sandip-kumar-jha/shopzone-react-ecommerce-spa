import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUserCircle, FaShoppingBag } from "react-icons/fa";


const Login = () => {


  const { login } = useAuth();

  const navigate = useNavigate();




  const handleLogin = () => {

    login();

    navigate("/checkout");

  };





  return (


    <div className="
      min-h-[80vh]
      flex
      items-center
      justify-center
      px-6
    ">



      <div className="
        bg-white
        shadow-2xl
        rounded-2xl
        p-10
        w-full
        max-w-md
        text-center
      ">



        <FaUserCircle

          className="
          mx-auto
          text-blue-600
          text-6xl
          mb-5
          "

        />




        <h1 className="
          text-4xl
          font-bold
          text-slate-800
        ">

          Welcome Back

        </h1>




        <p className="
          text-gray-500
          mt-3
        ">

          Login to continue your shopping journey

        </p>






        <button

          onClick={handleLogin}

          className="
          w-full
          mt-8
          bg-blue-600
          text-white
          py-3
          rounded-xl
          font-semibold
          hover:bg-blue-700
          transition
          flex
          items-center
          justify-center
          gap-3
          "

        >


          <FaShoppingBag/>


          Login As Guest


        </button>







        <Link

          to="/shop"

          className="
          block
          mt-5
          text-blue-600
          hover:underline
          "

        >

          Continue Shopping

        </Link>




      </div>




    </div>


  );


};


export default Login;