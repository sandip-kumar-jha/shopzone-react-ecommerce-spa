import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";



const AuthContext = createContext();



export const useAuth = () => useContext(AuthContext);




const AuthProvider = ({ children }) => {



  const [isLoggedIn, setIsLoggedIn] = useState(() => {


    try {

      return (
        JSON.parse(
          localStorage.getItem("isLoggedIn")
        ) || false
      );

    }

    catch(error){

      return false;

    }


  });






  useEffect(() => {


    localStorage.setItem(
      "isLoggedIn",
      JSON.stringify(isLoggedIn)
    );


  }, [isLoggedIn]);







  const login = () => {

    setIsLoggedIn(true);

  };






  const logout = () => {

    setIsLoggedIn(false);

  };







  return (


    <AuthContext.Provider

      value={{

        isLoggedIn,

        login,

        logout

      }}

    >


      {children}


    </AuthContext.Provider>


  );


};



export { AuthProvider };

export default AuthProvider;