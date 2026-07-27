const categories = [
  {
    name: "Beauty",
    icon: "💄",
  },
  {
    name: "Fragrances",
    icon: "🌸",
  },
  {
    name: "Furniture",
    icon: "🪑",
  },
  {
    name: "Groceries",
    icon: "🛒",
  },
  {
    name: "Laptops",
    icon: "💻",
  },
  {
    name: "Mens Shirts",
    icon: "👕",
  },
  {
    name: "Mens Shoes",
    icon: "👟",
  },
  {
    name: "Womens Dresses",
    icon: "👗",
  },
];


const Categories = () => {


  return (

    <section className="max-w-7xl mx-auto px-6 py-16">


      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Shop By Category
      </h2>



      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">


        {
          categories.map((category)=>(


            <div
              key={category.name}
              className="
              bg-white
              rounded-2xl
              shadow-md
              p-6
              text-center
              cursor-pointer
              transition
              duration-300
              hover:-translate-y-2
              hover:shadow-xl
              "
            >


              <div className="text-5xl mb-4">
                {category.icon}
              </div>


              <h3 className="font-semibold text-lg">
                {category.name}
              </h3>


            </div>


          ))
        }


      </div>


    </section>

  );

};


export default Categories;