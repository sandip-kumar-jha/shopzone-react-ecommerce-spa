import { useEffect, useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import LoadingSpinner from "../components/LoadingSpinner";
import { FaSearch, FaFilter } from "react-icons/fa";


const Shop = () => {


  const [products,setProducts] = useState([]);

  const [loading,setLoading] = useState(true);

  const [error,setError] = useState("");

  const [searchTerm,setSearchTerm] = useState("");

  const [selectedCategory,setSelectedCategory] = useState("All");

  const [sort,setSort] = useState("default");







  useEffect(()=>{


    const fetchProducts = async()=>{


      try{


        const response = await fetch(
          "https://dummyjson.com/products?limit=100"
        );


        if(!response.ok){

          throw new Error("Failed to load products");

        }


        const data = await response.json();


        setProducts(data.products);


      }
      catch(err){

        setError(err.message);

      }
      finally{

        setLoading(false);

      }


    };


    fetchProducts();


  },[]);










  const categories = useMemo(()=>{


    const unique = [

      ...new Set(
        products.map(item=>item.category)
      )

    ];


    return [

      "All",

      ...unique

    ];


  },[products]);









  const filteredProducts = useMemo(()=>{


    let result = products.filter((product)=>{


      const search =

      product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

      ||

      product.category
      .toLowerCase()
      .includes(searchTerm.toLowerCase());




      const category =

      selectedCategory==="All"

      ||

      product.category===selectedCategory;




      return search && category;


    });






    if(sort==="low"){

      result.sort(
        (a,b)=>a.price-b.price
      );

    }



    if(sort==="high"){

      result.sort(
        (a,b)=>b.price-a.price
      );

    }



    return result;



  },[
    products,
    searchTerm,
    selectedCategory,
    sort
  ]);









  if(loading){

    return <LoadingSpinner/>;

  }








  if(error){

    return (

      <div className="
        text-center
        py-20
      ">

        <h1 className="
          text-3xl
          font-bold
          text-red-600
        ">

          {error}

        </h1>

      </div>

    );

  }










  return (


<main className="
bg-slate-50
min-h-screen
">







{/* HERO */}


<section className="
bg-gradient-to-r
from-blue-700
via-indigo-700
to-purple-700
text-white
py-20
">


<div className="
max-w-7xl
mx-auto
px-6
text-center
">


<h1 className="
text-5xl
md:text-6xl
font-extrabold
">

Explore ShopZone Collection

</h1>



<p className="
mt-5
text-lg
text-blue-100
">

Discover thousands of amazing products at the best prices.

</p>



</div>


</section>









<div className="
max-w-7xl
mx-auto
px-6
py-12
">







{/* SEARCH + SORT */}



<div className="
bg-white
rounded-2xl
shadow-md
p-6
mb-10
grid
md:grid-cols-3
gap-5
">






<div className="
md:col-span-2
relative
">


<FaSearch

className="
absolute
left-5
top-5
text-gray-400
"

/>



<input


type="text"


placeholder="Search products..."


value={searchTerm}


onChange={(e)=>setSearchTerm(e.target.value)}



className="
w-full
h-14
pl-12
pr-5
rounded-xl
border
outline-none
focus:ring-2
focus:ring-blue-500
"


/>


</div>








<select

value={sort}

onChange={(e)=>setSort(e.target.value)}

className="
h-14
rounded-xl
border
px-5
outline-none
"

>

<option value="default">
Sort Products
</option>

<option value="low">
Price Low to High
</option>


<option value="high">
Price High to Low
</option>


</select>






</div>










{/* CATEGORY FILTER */}



<div className="
mb-12
">


<div className="
flex
items-center
gap-3
mb-5
">

<FaFilter className="text-blue-600"/>


<h2 className="
text-2xl
font-bold
">

Categories

</h2>


</div>







<div className="
flex
flex-wrap
gap-4
">


{

categories.map(category=>(



<button

key={category}

onClick={()=>setSelectedCategory(category)}


className={`

px-6

py-3

rounded-full

font-semibold

transition


${

selectedCategory===category

?

"bg-blue-600 text-white shadow-lg"

:

"bg-white border hover:bg-blue-50"

}

`}

>


{category}


</button>



))


}


</div>


</div>









{/* PRODUCT HEADER */}



<div className="
flex
justify-between
items-center
mb-8
">


<h2 className="
text-3xl
font-bold
">

Products

<span className="
text-blue-600
ml-3
">

({filteredProducts.length})

</span>


</h2>



</div>









{/* PRODUCTS */}



{

filteredProducts.length===0 ?



(

<div className="
text-center
py-20
bg-white
rounded-2xl
">


<h2 className="
text-4xl
font-bold
">

No Products Found

</h2>


<p className="
text-gray-500
mt-3
">

Try searching something else.

</p>


</div>


)

:



(


<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
xl:grid-cols-4
gap-8
">


{

filteredProducts.map(product=>(


<ProductCard

key={product.id}

product={product}

/>


))


}


</div>


)


}





</div>


</main>



  );

};


export default Shop;