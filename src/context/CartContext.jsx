import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";


const CartContext = createContext();



export const useCart = () => useContext(CartContext);




const CartProvider = ({ children }) => {



  const [cartItems, setCartItems] = useState(() => {


    try {

      const savedCart =
        localStorage.getItem("cartItems");


      return savedCart
        ? JSON.parse(savedCart)
        : [];


    }

    catch(error){

      return [];

    }


  });







  useEffect(() => {


    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems)
    );


  }, [cartItems]);








  // Add Product

  const addToCart = (product) => {


    setCartItems((prev)=>{


      const existingProduct =
        prev.find(
          item=>item.id===product.id
        );



      if(existingProduct){


        return prev.map(item=>

          item.id===product.id

          ?

          {
            ...item,
            quantity:item.quantity+1
          }

          :

          item

        );


      }




      return [

        ...prev,

        {
          ...product,
          quantity:1
        }

      ];



    });


  };








  // Increase Quantity

  const increaseQuantity = (id)=>{


    setCartItems((prev)=>

      prev.map(item=>

        item.id===id

        ?

        {
          ...item,
          quantity:item.quantity+1
        }

        :

        item

      )

    );


  };








  // Decrease Quantity

  const decreaseQuantity=(id)=>{


    setCartItems((prev)=>

      prev

      .map(item=>

        item.id===id

        ?

        {
          ...item,
          quantity:item.quantity-1
        }

        :

        item

      )


      .filter(
        item=>item.quantity>0
      )


    );


  };








  // Remove Product

  const removeItem=(id)=>{


    setCartItems((prev)=>

      prev.filter(
        item=>item.id!==id
      )

    );


  };








  // Empty Cart

  const clearCart=()=>{

    setCartItems([]);

  };








  // Total Items

  const totalItems = cartItems.reduce(

    (total,item)=>

      total + item.quantity,

    0

  );








  // Total Price

  const totalPrice = cartItems.reduce(

    (total,item)=>

      total + item.price * item.quantity,

    0

  );







  return (


    <CartContext.Provider


      value={{

        cart:cartItems,

        totalItems,

        totalPrice,

        addToCart,

        increaseQuantity,

        decreaseQuantity,

        removeItem,

        clearCart

      }}


    >


      {children}


    </CartContext.Provider>


  );


};



export { CartProvider };

export default CartProvider;