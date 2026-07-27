import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";


function App() {


  return (

    <BrowserRouter>


      <Routes>


        {/* Website Routes */}

        <Route element={<MainLayout />}>


          <Route path="/" element={<Home />} />

          <Route path="/shop" element={<Shop />} />

          <Route 
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route 
            path="/contact"
            element={<Contact />}
          />

          <Route 
            path="/cart"
            element={<Cart />}
          />


        </Route>





        {/* Authentication */}

        <Route 
          path="/login"
          element={<Login />}
        />





        {/* Protected */}

        <Route

          path="/checkout"

          element={

            <ProtectedRoute>

              <Checkout />

            </ProtectedRoute>

          }

        />





        {/* Error */}

        <Route

          path="*"

          element={<NotFound />}

        />


      </Routes>


    </BrowserRouter>

  );

}


export default App;