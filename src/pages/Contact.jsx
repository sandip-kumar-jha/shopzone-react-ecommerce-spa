import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";


const Contact = () => {


  return (


    <section className="
      max-w-7xl
      mx-auto
      px-6
      py-16
    ">


      {/* Heading */}

      <div className="text-center mb-14">


        <h1 className="
          text-5xl
          font-bold
          text-slate-800
        ">

          Contact Us

        </h1>



        <p className="
          mt-4
          text-gray-600
          text-lg
        ">

          Have questions? We would love to hear from you.

        </p>


      </div>







      <div className="
        grid
        md:grid-cols-2
        gap-10
        items-start
      ">





        {/* Left Side */}

        <div>


          <h2 className="
            text-3xl
            font-bold
            mb-6
          ">

            Get In Touch

          </h2>




          <p className="
            text-gray-600
            leading-7
            mb-8
          ">

            Our team is always ready to help you with
            your orders, products and any queries.
            Contact us anytime.

          </p>







          <div className="
            space-y-5
          ">




            <div className="
              flex
              items-center
              gap-4
              bg-white
              shadow-md
              rounded-xl
              p-5
            ">


              <FaEnvelope
                className="
                text-blue-600
                text-2xl
                "
              />


              <div>

                <h3 className="font-semibold">
                  Email
                </h3>


                <p className="text-gray-600">
                  support@shopzone.com
                </p>

              </div>


            </div>








            <div className="
              flex
              items-center
              gap-4
              bg-white
              shadow-md
              rounded-xl
              p-5
            ">


              <FaPhone
                className="
                text-green-600
                text-2xl
                "
              />


              <div>

                <h3 className="font-semibold">
                  Phone
                </h3>


                <p className="text-gray-600">
                  +91 9876543210
                </p>

              </div>


            </div>








            <div className="
              flex
              items-center
              gap-4
              bg-white
              shadow-md
              rounded-xl
              p-5
            ">


              <FaMapMarkerAlt
                className="
                text-red-500
                text-2xl
                "
              />


              <div>

                <h3 className="font-semibold">
                  Location
                </h3>


                <p className="text-gray-600">
                  India
                </p>

              </div>


            </div>








            <div className="
              flex
              items-center
              gap-4
              bg-white
              shadow-md
              rounded-xl
              p-5
            ">


              <FaClock
                className="
                text-purple-600
                text-2xl
                "
              />


              <div>

                <h3 className="font-semibold">
                  Working Hours
                </h3>


                <p className="text-gray-600">
                  Mon - Sat (9AM - 6PM)
                </p>

              </div>


            </div>





          </div>



        </div>









        {/* Contact Form */}


        <form
          className="
          bg-white
          shadow-xl
          rounded-2xl
          p-8
          "
        >



          <h2 className="
            text-2xl
            font-bold
            mb-6
          ">

            Send Message

          </h2>







          <div className="mb-5">


            <label className="
              block
              font-semibold
              mb-2
            ">

              Name

            </label>


            <input

              type="text"

              placeholder="Enter your name"

              className="
              w-full
              border
              border-gray-300
              rounded-lg
              p-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              "

            />


          </div>







          <div className="mb-5">


            <label className="
              block
              font-semibold
              mb-2
            ">

              Email

            </label>


            <input

              type="email"

              placeholder="Enter your email"

              className="
              w-full
              border
              border-gray-300
              rounded-lg
              p-3
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              "

            />


          </div>







          <div className="mb-5">


            <label className="
              block
              font-semibold
              mb-2
            ">

              Message

            </label>


            <textarea

              rows="5"

              placeholder="Write your message..."

              className="
              w-full
              border
              border-gray-300
              rounded-lg
              p-3
              resize-none
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              "

            />


          </div>







          <button

            type="submit"

            className="
            w-full
            bg-blue-600
            text-white
            py-3
            rounded-lg
            font-semibold
            hover:bg-blue-700
            transition
            "

          >

            Send Message

          </button>




        </form>




      </div>



    </section>


  );


};


export default Contact;