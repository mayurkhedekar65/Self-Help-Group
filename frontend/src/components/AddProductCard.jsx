import React from "react";


const AddProductCard=()=>{
    return(
        <>
        <section>
             <main className="py-15  min-h-screen bg-[#dddddd]">
          <div className=" bg-[#F5C469] text-center  pt-8 pb-8  md:pt-8 md:pb-8 pr-10 pl-10 rounded-2xl md:mx-96 mx-140">
            <h3 className="capitalize font-bold md:text-3xl text-2xl mb-5 text-[#333333]">
              add product
            </h3>
            <form action="#" className="text-center" 
            // onSubmit={handleSubmit}
            >
              <div className="flex flex-col md:flex-row justify-center items-center md:gap-8">
              <div>
                <div className="text-left mb-2">
                  <label
                    htmlFor="price"
                    className="capitalize text-[#333333]  md:text-[15px] text-[14px]"
                  >
                    price*
                  </label>
                </div>
                <input
                  name="price"
                  className="border bg-[#dddddd]  border-[#333333]  w-70 h-13 md:w-80 md:h-12 mb-6 rounded-xl pl-3 placeholder:capitalize placeholder:text-[14px] placeholder:text-[#585858]"
                  type="text"
                  placeholder="enter the product price"
                //   onChange={handleChange}
                //   value={FormData.price}
                />
              </div>
              <div>
                <div className="text-left mb-2">
                  <label
                    htmlFor="category"
                    className="capitalize text-[#333333]  md:text-[15px] text-[14px]"
                  >
                    category*
                  </label>
                </div>
                <input
                  name="category"
                  className="border bg-[#dddddd]  border-[#333333]  w-70 h-13 md:w-80 md:h-12 mb-6 rounded-xl pl-3 placeholder:capitalize placeholder:text-[14px] placeholder:text-[#585858]"
                  type="email"
                  placeholder="enter the product category"
                //   onChange={handleChange}
                //   value={FormData.category}
                />
              </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center md:gap-8">
              <div>
                <div className="text-left mb-2">
                  <label
                    htmlFor="image"
                    className="capitalize text-[#333333]  md:text-[15px] text-[14px]"
                  >
                    image*
                  </label>
                </div>
                <input
                  name="image"
                  className="  bg-[#b8b8b8] border border-[#333333]  w-70 h-13 md:w-80 md:h-12 mb-6 rounded-xl pl-3 pt-3 placeholder:capitalize placeholder:text-[14px] text-[#333333]"
                  type="file"
                  placeholder="add the product image"
                //   onChange={handleChange}
                //   value={FormData.image}
                />
              </div>
              <div>
                <div className="text-left mb-2">
                  <label
                    htmlFor="stock quantity"
                    className="capitalize text-[#333333]  md:text-[15px] text-[14px]"
                  >
                    stock quantity*
                  </label>
                </div>
                <input
                  name="stock_quantity"
                  className="border  bg-[#dddddd] border-[#333333]  w-70 h-13 md:w-80 md:h-12 mb-6 rounded-xl pl-3 placeholder:capitalize placeholder:text-[14px] placeholder:text-[#585858]"
                  type="text"
                  placeholder="enter the product stock quantity"
                //   onChange={handleChange}
                //   value={FormData.stock_quantity}
                />
              </div>
              </div>
              <div>
                <div>
                  <div className="text-left mb-2">
                    <label
                      htmlFor="description"
                      className="capitalize text-[#333333]  md:text-[15px] text-[14px]"
                    >
                      description*
                    </label>
                  </div>
                   <textarea
                          className="mb-10 w-70 h-30 md:w-2xl md:h-35 p-3 border bg-[#dddddd]  border-[#333333] rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none placeholder:capitalize placeholder:text-[14px] placeholder:text-[#585858]"
                          placeholder="the the product description"
                        //   onChange={handleChange}
                        //   value={FormData.description}
                          name="description"
                        ></textarea>
                </div>
                <button className="hover:bg-[#dddddd] hover:border-[#333333] hover:border  hover:rounded-lg  hover:text-[#333333] bg-accent bg-[#333333] text-[#F5C469] font-semibold capitalize border pt-2 pb-2 md:px-77 px-28 rounded-xl md:text-[17px] text-[17px]">
                  submit
                </button>
              </div>
            </form>
          </div>
        </main>
        </section>
        </>
    )
}

export default AddProductCard;