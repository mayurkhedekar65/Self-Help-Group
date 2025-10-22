import { useState } from "react";
import "./App.css";
import MainSection from "./components/MainSection";
import ShopCategoryCard from "./components/ShopCategoryCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainSection></MainSection>
      <section className="text-center py-14 bg-blue-50">
        <div>
          <h2 className="font-bold text-black font-sans text-3xl ">Shop by Category</h2>
          <p className="text-black text-[17px] mt-4">Explore authentic Goan products crafted with love by local Self Help Groups</p>
        </div>
        <div  className="flex flex-col md:flex-row justify-center items-center space-x-10 text-center pt-10">
        <ShopCategoryCard logo={"1"} CategoryType={"Food & Beverages"}></ShopCategoryCard>
        <ShopCategoryCard logo={"1"} CategoryType={"Food & Beverages"}></ShopCategoryCard>
        <ShopCategoryCard logo={"1"} CategoryType={"Food & Beverages"}></ShopCategoryCard>
        <ShopCategoryCard logo={"1"} CategoryType={"Food & Beverages"}></ShopCategoryCard>
        <ShopCategoryCard logo={"1"} CategoryType={"Food & Beverages"}></ShopCategoryCard>
        <ShopCategoryCard logo={"1"} CategoryType={"Food & Beverages"}></ShopCategoryCard>
        </div>
      </section>
    </>
  );
}

export default App;
