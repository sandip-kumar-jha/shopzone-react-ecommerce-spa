import { Link } from "react-router-dom";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";


const ProductCard = ({ product }) => {


  const { addCart } = useCart();



  const discountPrice = product.discountPercentage

    ?

    (
      product.price -
      (product.price * product.discountPercentage) / 100

    ).toFixed(2)

    :

    product.price.toFixed(2);





  const handleAddCart = () => {

    addCart(product);

  };




  return (


    <div
      className="
      bg-white
      rounded-2xl
      shadow-md
      overflow-hidden
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      group
      "
    >



      {/* Image */}

      <div className="relative overflow-hidden">


        <img

          src={
            product.thumbnail ||
            "https://via.placeholder.com/300"
          }

          alt={product.title}

          className="
          w-full
          h-60
          object-cover
          group-hover:scale-110
          transition
          duration-500
          "

        />



        {
          product.discountPercentage &&

          <span
            className="
            absolute
            top-3
            left-3
            bg-red-500
            text-white
            text-sm
            font-semibold
            px-3
            py-1
            rounded-full
            "
          >

            {Math.round(product.discountPercentage)}% OFF

          </span>

        }



      </div>






      {/* Details */}

      <div className="p-5">


        <p
          className="
          text-sm
          text-blue-600
          uppercase
          font-semibold
          "
        >

          {product.category}

        </p>




        <h2
          className="
          text-xl
          font-bold
          mt-2
          line-clamp-2
          "
        >

          {product.title}

        </h2>




        <p
          className="
          text-gray-500
          text-sm
          mt-2
          "
        >

          Brand: {product.brand}

        </p>





        {/* Rating */}

        <div
          className="
          flex
          items-center
          gap-2
          mt-3
          "
        >

          <FaStar className="text-yellow-400"/>


          <span className="font-medium">

            {product.rating}

          </span>


        </div>





        {/* Price */}

        <div
          className="
          flex
          items-center
          gap-3
          mt-4
          "
        >


          <span
            className="
            text-2xl
            font-bold
            text-blue-600
            "
          >

            ₹{discountPrice}

          </span>



          {
            product.discountPercentage &&

            <span
              className="
              text-gray-400
              line-through
              "
            >

              ₹{product.price}

            </span>

          }



        </div>







        {/* Actions */}

        <div
          className="
          flex
          gap-3
          mt-6
          "
        >



          <Link

            to={`/product/${product.id}`}

            className="
            flex-1
            bg-blue-600
            text-white
            text-center
            py-3
            rounded-lg
            hover:bg-blue-700
            transition
            "

          >

            View Details


          </Link>





          <button

            onClick={handleAddCart}

            className="
            bg-green-600
            text-white
            p-3
            rounded-lg
            hover:bg-green-700
            transition
            "

            title="Add To Cart"

          >

            <FaShoppingCart/>


          </button>




        </div>



      </div>



    </div>


  );

};


export default ProductCard;