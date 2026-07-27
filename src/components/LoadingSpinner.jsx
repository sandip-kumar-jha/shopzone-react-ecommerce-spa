const LoadingSpinner = () => {
  return (

    <div className="
      flex 
      flex-col
      justify-center 
      items-center 
      py-20
      gap-4
    ">


      <div
        className="
          w-14
          h-14
          border-4
          border-blue-600
          border-t-transparent
          rounded-full
          animate-spin
        "
      ></div>


      <p className="
        text-gray-500
        font-medium
      ">
        Loading products...
      </p>


    </div>

  );
};


export default LoadingSpinner;