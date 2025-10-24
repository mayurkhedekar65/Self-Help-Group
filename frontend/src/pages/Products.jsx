import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { Await, data } from "react-router-dom";

const Products = () => {
  const [ProductName,setProductName]=useState(null)
  const [GroupName,setGroupName]=useState(null)
  const [Location,setLocation]=useState(null)
  const [Amount,setAmount]=useState(null)
  const [Quantity,setQuantity]=useState(null)

  try{
    fetch("http://127.0.0.1:8000/products/")
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      let ProductName=data["ProductName"]
      let GroupName=data["GroupName"]
      let Location=data["Location"]
      let Amount=data["Amount"]
      let Quantity=data["Quantity"]
      setProductName(ProductName)
      setGroupName(GroupName)
      setLocation(Location)
      setAmount(Amount)
      setQuantity(Quantity)
    })
    .catch(error => console.error('Error:', error));
  }
  catch(error){
        console.log(error)
  }
  
  
  return (
    <>
      <Navbar></Navbar>

      <section className=" py-35 bg-[#dddddd]">
        <div className="text-center">
          <h2 className="font-bold text-[#333333] font-sans text-2xl md:text-3xl ">
            Products
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 text-center pt-10">
          <ProductCard
            ProductName={ProductName}
            GroupName={GroupName}
            Amount={Amount}
            Quantity={Quantity}
            Location={Location}
          ></ProductCard>
          {/* <ProductCard
            ProductName={"Handwoven Table Runner"}
            GroupName={"by Ponda Craft Circle"}
            Amount={"800"}
            Quantity={"500"}
            Location={"Ponda, Central Goa"}
          ></ProductCard>
          <ProductCard
            ProductName={"Artisanal Cashew Feni"}
            GroupName={"by Bicholim Distillers Group"}
            Amount={"1,200"}
            Quantity={"750"}
            Location={"Bicholim, North Goa"}
          ></ProductCard>
          <ProductCard
            ProductName={"Ceramic Dinner Set"}
            GroupName={"by Margao Pottery Collective"}
            Amount={"2,500"}
            Quantity={"500"}
            Location={"Margao, Salcete"}
          ></ProductCard> */}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
};
export default Products;
