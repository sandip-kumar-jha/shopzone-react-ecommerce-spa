import { Link } from "react-router-dom";


const Hero = () => {


  return (

    <section className="
      from-blue-600 
      to-indigo-700 
      text-white
    ">


      <div className="
        max-w-7xl 
        mx-auto 
        px-6 
        py-24 
        text-center
      ">


        <h1 className="
          text-4xl 
          md:text-6xl 
          font-extrabold 
          mb-6
        ">

          Discover Amazing Products

        </h1>



        <p className="
          text-lg 
          md:text-xl 
          text-blue-100
          max-w-2xl
          mx-auto
          mb-8
        ">

          Shop the latest fashion, electronics, beauty products
          and everything you need at one place.

        </p>




        <Link
          to="/shop"
          className="
            inline-block
            bg-white
            text-blue-600
            px-8
            py-3
            rounded-full
            font-semibold
            shadow-lg
            hover:bg-gray-100
            hover:scale-105
            transition
          "
        >

          Shop Now

        </Link>




        <div className="
          grid 
          grid-cols-1
          md:grid-cols-3
          gap-6
          mt-12
        ">


          <div className="
            bg-white/10
            rounded-xl
            p-5
          ">

            🚚
            <h3 className="font-semibold mt-2">
              Fast Delivery
            </h3>

          </div>




          <div className="
            bg-white/10
            rounded-xl
            p-5
          ">

            🔒
            <h3 className="font-semibold mt-2">
              Secure Payment
            </h3>

          </div>




          <div className="
            bg-white/10
            rounded-xl
            p-5
          ">

            ⭐
            <h3 className="font-semibold mt-2">
              Quality Products
            </h3>

          </div>


        </div>



      </div>


    </section>

  );

};


export default Hero;