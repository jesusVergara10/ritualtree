import React from "react";
import Header from "../Components/Header";

const Home = () => {
  return (
    <>
      <Header></Header>
      <div className="flex flex-col flex-wrap content-center justify-center w-screen h-screen bg-flowers bg-cover">
        <div className="px-4">
          <p className="font-archivo-black mb-4 text-center text-4xl text-rtgreen uppercase sm:w-[50vh]">
            ritual tree
          </p>
          <p className="font-work-sans text-center text-lg text-rtgreen uppercase sm:w-[50vh]">
            In time you will see What's behind the leaves. Carved in bark, the
            devil's mark. Follow me to the Ritual Tree.
          </p>
        </div>
      </div>
    </>
  );
};
export default Home;
