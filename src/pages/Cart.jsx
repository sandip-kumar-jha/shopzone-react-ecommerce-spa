import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";


const Cart = () => {


  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    clearCart,
  } = useCart();




  const totalPrice = cart.reduce(

    (total,item)=>

    total + item.price * item.quantity,

    0

  );






  if(cart.length===0){


    return (

      <div className="
        min-h-[70vh]
        flex
        flex-col
        justify-center
        items-center
        px-6
      ">


        <h1 className="
          text-4xl
          font-bold
          text-slate-800
        ">

          Your Cart is Empty

        </h1>



        <Link

          to="/shop"

          className="
          mt-8
          bg-blue-600
          text-white
          px-8
          py-3
          rounded-xl
          hover:bg-blue-700
          "

        >

          Continue Shopping

        </Link>



      </div>

    );


  }








  return (


    <div className="
      max-w-7xl
      mx-auto
      px-6
      py-12
    ">




      <h1 className="
        text-4xl
        font-bold
        mb-10
      ">

        Shopping Cart

      </h1>







      <div>


      {


      cart.map((item)=>(


        <div

        key={item.id}

        className="
        bg-white
        shadow-md
        rounded-2xl
        p-5
        mb-6
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-6
        "


        >





        {/* Product Info */}


        <div className="
          flex
          items-center
          gap-5
          w-full
          md:w-auto
        ">



          <img

          src={item.thumbnail}

          alt={item.title}

          className="
          w-24
          h-24
          rounded-xl
          object-cover
          "

          />





          <div>


            <h2 className="
              font-bold
              text-lg
            ">

              {item.title}

            </h2>



            <p className="
              text-blue-600
              font-semibold
              mt-2
            ">

              £{item.price}

            </p>



          </div>



        </div>








        {/* Quantity */}


        <div className="
          flex
          items-center
          gap-4
          bg-slate-100
          px-4
          py-2
          rounded-xl
        ">


          <button

          onClick={()=>decreaseQuantity(item.id)}

          className="
          bg-white
          p-2
          rounded-lg
          hover:bg-blue-100
          "

          >

            <FaMinus/>

          </button>





          <span className="
            font-bold
            text-lg
          ">

            {item.quantity}

          </span>





          <button

          onClick={()=>increaseQuantity(item.id)}

          className="
          bg-white
          p-2
          rounded-lg
          hover:bg-blue-100
          "

          >

            <FaPlus/>

          </button>



        </div>







        {/* Remove */}


        <button

        onClick={()=>removeItem(item.id)}

        className="
        bg-red-500
        text-white
        px-5
        py-3
        rounded-xl
        flex
        items-center
        gap-2
        hover:bg-red-600
        "

        >

          <FaTrash/>

          Remove

        </button>





        </div>


      ))


      }


      </div>









      {/* Bottom Section */}


      <div className="
        mt-10
        bg-white
        shadow-lg
        rounded-2xl
        p-8
        flex
        flex-col
        md:flex-row
        justify-between
        items-center
        gap-6
      ">



        <button

        onClick={clearCart}

        className="
        bg-red-600
        text-white
        px-8
        py-3
        rounded-xl
        hover:bg-red-700
        "

        >

          Clear Cart

        </button>







        <div className="
          text-center
          md:text-right
        ">



          <h2 className="
            text-3xl
            font-bold
          ">

            Total: £{totalPrice.toFixed(2)}

          </h2>





          <Link

          to="/checkout"

          className="
          inline-block
          mt-5
          bg-green-600
          text-white
          px-10
          py-3
          rounded-xl
          hover:bg-green-700
          "

          >

            Proceed Checkout

          </Link>




        </div>



      </div>





    </div>


  );

};


export default Cart;