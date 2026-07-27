import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


const Checkout = () => {


  const { cart, totalPrice } = useCart();




  return (

    <div className="
      max-w-5xl
      mx-auto
      px-6
      py-20
    ">



      <div className="
        bg-white
        shadow-xl
        rounded-2xl
        p-10
        text-center
      ">


        <h1 className="
          text-5xl
          font-bold
          text-green-600
        ">

          Checkout Successful 🎉

        </h1>




        <p className="
          mt-5
          text-xl
          text-gray-600
        ">

          Your order has been placed successfully.

        </p>





        <div className="
          mt-10
          bg-gray-100
          rounded-xl
          p-6
        ">


          <h2 className="
            text-2xl
            font-bold
            mb-5
          ">

            Order Summary

          </h2>





          <p className="text-lg">

            Total Items: {cart.length}

          </p>



          <p className="
            text-2xl
            font-bold
            text-blue-600
            mt-3
          ">

            Total Amount: ₹{totalPrice.toFixed(2)}

          </p>



        </div>





        <Link

          to="/shop"

          className="
          inline-block
          mt-8
          bg-blue-600
          text-white
          px-8
          py-3
          rounded-lg
          hover:bg-blue-700
          "

        >

          Continue Shopping

        </Link>



      </div>



    </div>

  );


};


export default Checkout;