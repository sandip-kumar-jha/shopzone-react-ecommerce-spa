import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart, FaArrowLeft } from "react-icons/fa";


const ProductDetails = () => {


  const { id } = useParams();


  const { addToCart } = useCart();



  const [product,setProduct] = useState(null);

  const [loading,setLoading] = useState(true);

  const [error,setError] = useState("");





  useEffect(()=>{


    const fetchProduct = async()=>{


      try{


        const response = await fetch(
          `https://dummyjson.com/products/${id}`
        );



        if(!response.ok){

          throw new Error("Product not found");

        }



        const data = await response.json();


        setProduct(data);



      }
      catch(err){

        setError(err.message);

      }
      finally{

        setLoading(false);

      }


    };



    fetchProduct();



  },[id]);








  if(loading){


    return (

      <div className="
        text-center
        text-3xl
        font-bold
        py-20
      ">

        Loading Product...

      </div>

    );


  }








  if(error){


    return (

      <div className="
        text-center
        text-red-600
        text-3xl
        py-20
      ">

        {error}

      </div>

    );


  }







  const discountPrice = (

    product.price -
    (product.price * product.discountPercentage) / 100

  ).toFixed(2);







  return (


    <div className="
      max-w-7xl
      mx-auto
      px-6
      py-12
    ">





      <Link

        to="/shop"

        className="
        flex
        items-center
        gap-2
        text-blue-600
        mb-8
        "

      >

        <FaArrowLeft/>

        Back To Shop


      </Link>









      <div className="
        grid
        md:grid-cols-2
        gap-12
        items-center
      ">






        {/* IMAGE SECTION */}


        <div>


          <img

            src={product.thumbnail}

            alt={product.title}

            className="
            w-full
            h-[450px]
            object-cover
            rounded-2xl
            shadow-xl
            "

          />



        </div>









        {/* DETAILS */}


        <div>




          <p className="
            text-blue-600
            uppercase
            font-semibold
          ">

            {product.category}

          </p>





          <h1 className="
            text-4xl
            font-bold
            mt-3
          ">

            {product.title}

          </h1>






          <p className="
            text-gray-500
            mt-3
          ">

            Brand: {product.brand}

          </p>







          <div className="
            mt-5
            flex
            items-center
            gap-3
          ">


            <span className="
              bg-yellow-400
              px-3
              py-1
              rounded-lg
              font-semibold
            ">

              ⭐ {product.rating}

            </span>


            <span className="text-gray-500">

              Stock: {product.stock}

            </span>



          </div>









          <div className="
            mt-6
            flex
            gap-4
            items-center
          ">



            <h2 className="
              text-4xl
              font-bold
              text-blue-600
            ">

              ₹{discountPrice}

            </h2>



            <span className="
              line-through
              text-gray-400
              text-xl
            ">

              ₹{product.price}

            </span>



          </div>








          <p className="
            mt-6
            text-gray-700
            leading-8
          ">

            {product.description}

          </p>









          <button

            onClick={()=>addToCart(product)}

            className="
            mt-8
            bg-blue-600
            text-white
            px-10
            py-4
            rounded-xl
            font-semibold
            flex
            items-center
            gap-3
            hover:bg-blue-700
            transition
            "

          >


            <FaShoppingCart/>


            Add To Cart


          </button>





        </div>





      </div>





    </div>


  );


};


export default ProductDetails;