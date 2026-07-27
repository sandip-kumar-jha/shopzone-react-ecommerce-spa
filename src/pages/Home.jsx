import { Link } from "react-router-dom";

import {
  FaShippingFast,
  FaShieldAlt,
  FaUndoAlt,
  FaHeadset,
  FaLaptop,
  FaMobileAlt,
  FaCouch,
  FaTshirt,
} from "react-icons/fa";



const categories = [

  {
    name:"Electronics",
    icon:<FaLaptop/>,
    color:"text-blue-600"
  },

  {
    name:"Mobiles",
    icon:<FaMobileAlt/>,
    color:"text-green-600"
  },

  {
    name:"Furniture",
    icon:<FaCouch/>,
    color:"text-orange-500"
  },

  {
    name:"Fashion",
    icon:<FaTshirt/>,
    color:"text-pink-500"
  }

];




const features = [

{
 title:"Free Delivery",
 desc:"Fast delivery across India.",
 icon:<FaShippingFast/>,
 color:"text-blue-600"
},


{
 title:"Secure Payment",
 desc:"100% safe payment gateway.",
 icon:<FaShieldAlt/>,
 color:"text-green-600"
},


{
 title:"Easy Returns",
 desc:"7 Days easy replacement.",
 icon:<FaUndoAlt/>,
 color:"text-red-500"
},


{
 title:"24×7 Support",
 desc:"Always ready to help.",
 icon:<FaHeadset/>,
 color:"text-purple-600"
}

];





const Home = () => {



return (


<>

{/* HERO */}


<section className="
bg-gradient-to-r
from-slate-900
via-blue-900
to-blue-700
text-white
">


<div className="
max-w-7xl
mx-auto
px-6
py-24
grid
lg:grid-cols-2
gap-12
items-center
">


<div>


<span className="
bg-yellow-400
text-black
px-4
py-2
rounded-full
font-semibold
">

🔥 Biggest Sale 2026

</span>



<h1 className="
text-5xl
lg:text-7xl
font-extrabold
mt-8
leading-tight
">


Discover


<span className="
text-yellow-300
">

 Amazing

</span>


 Products


</h1>




<p className="
mt-8
text-lg
text-slate-200
leading-8
">

Shop electronics, fashion, furniture,
beauty products and much more.
Enjoy amazing discounts every day.

</p>





<div className="
flex
flex-wrap
gap-5
mt-10
">


<Link

to="/shop"

className="
bg-yellow-400
text-black
px-8
py-4
rounded-xl
font-bold
hover:bg-yellow-300
transition
"

>

Shop Now

</Link>



<Link

to="/contact"

className="
border-2
border-white
px-8
py-4
rounded-xl
hover:bg-white
hover:text-blue-700
transition
"

>

Contact Us

</Link>


</div>


</div>






<div className="
flex
justify-center
">


<img

src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=900"

alt="Shopping"

loading="lazy"

className="
rounded-3xl
shadow-2xl
hover:scale-105
transition
duration-500
"

/>


</div>


</div>


</section>







{/* CATEGORY */}


<section className="
py-20
bg-slate-50
">


<div className="
max-w-7xl
mx-auto
px-6
">


<h2 className="
text-4xl
font-bold
text-center
mb-14
">

Shop By Category

</h2>




<div className="
grid
sm:grid-cols-2
lg:grid-cols-4
gap-8
">


{

categories.map((item)=>(


<div

key={item.name}

className="
bg-white
rounded-2xl
shadow-lg
p-8
text-center
hover:-translate-y-2
hover:shadow-2xl
transition
"


>


<div className={`
mx-auto
text-5xl
${item.color}
flex
justify-center
`}>

{item.icon}

</div>



<h3 className="
text-2xl
font-bold
mt-5
">

{item.name}

</h3>


</div>


))

}


</div>


</div>


</section>









{/* FEATURES */}


<section className="py-20">


<div className="
max-w-7xl
mx-auto
px-6
">


<h2 className="
text-4xl
font-bold
text-center
mb-14
">

Why Choose ShopZone?

</h2>




<div className="
grid
md:grid-cols-2
lg:grid-cols-4
gap-8
">


{

features.map((item)=>(


<div

key={item.title}

className="
bg-white
rounded-2xl
shadow-lg
p-8
text-center
hover:shadow-xl
transition
"

>


<div className={`
text-5xl
${item.color}
flex
justify-center
`}>

{item.icon}

</div>



<h3 className="
font-bold
text-xl
mt-5
">

{item.title}

</h3>



<p className="
mt-3
text-gray-600
">

{item.desc}

</p>



</div>


))


}


</div>


</div>


</section>








{/* OFFER */}



<section className="
bg-blue-700
text-white
">


<div className="
max-w-7xl
mx-auto
px-6
py-20
text-center
">


<h2 className="
text-5xl
font-bold
">

Flat 50% OFF

</h2>


<p className="
text-xl
mt-6
">

On Selected Products

</p>




<Link

to="/shop"

className="
inline-block
mt-10
bg-yellow-400
text-black
px-10
py-4
rounded-xl
font-bold
hover:bg-yellow-300
transition
"

>

Explore Collection

</Link>



</div>


</section>



</>


);


};


export default Home;