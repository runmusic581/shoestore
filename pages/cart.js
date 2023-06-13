import CartItem from "@/Components/CartItem";
import Wrapper from "@/Components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const cart = () => {
  const {cartItems} = useSelector((state)=>state.cart);
const subTotal = useMemo(()=>{
  return cartItems.reduce((total, val)=> total + val.attributes.price, 0)
},[cartItems])

  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {cartItems.length>0 && (
 <>
 {/* Heading & Paragraph  start*/}
 <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
 <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
   Shoping Cart
 </div>
</div>
{/* Heading & Paragraph  end*/}

{/* cart content start */}
<div className="flex flex-col lg:flex-row gap-12 py-10">
 {/* cart items start */}
 <div className="flex-[2]">
   <div className="text-lg font-bold">Cart Items</div>
   {cartItems.map((item)=>(
 <CartItem key={item.id} data={item}/>
   ))}
  
 </div>
 {/* cart items end */}

 {/*  summary start */}
 <div className="flex-[1]">
   <div className="text-lg font-bold">Summary</div>
   <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
     <div className="flex justify-between">
       <div className="uppercase text-md md:text-lg font-medium text-black">
         Subtotal  &#8377;
       </div>
       <div className="text-md md:text-lg font-medium text-black">
       &#8377;{subTotal}
       </div>
     </div>
     <div className="text-sm md:text-md py-5 border-t mt-5">
       It is a long established fact that a reader will be distracted
       by the readable content of a page when looking at its layout.
       The point of using Lorem Ipsum is that it has a more-or-less
       norma readable English. Many w use Lorem Ipsum as their.
     </div>
   </div>
   {/* BUTTON START */}

   <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
     CHECKOUT
   </button>
   {/* BUTTON END */}
 </div>

 {/*  summary end */}
</div>
{/* cart content end */}
</>
        )}
       
      

        {/* This is Empty Screen */}

    {cartItems.length<1  &&  ( <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <Image 
          src="/empty-cart.jpg" 
          width={300} 
          height={300}
          className="w-[300px] md:w-[400px]" />
          <span className="text-xl font-bold">Your Cart Is Empty</span>
          <span className="text-center mt-4">
            Looks like you have not added anything in your cart.
            <br/>
            Go Ahed and explore top categories.
          </span>
          <Link  
          href='/'
          className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
          Continue Shopping</Link>
        </div>)}
      </Wrapper>
    </div>
  );
};

export default cart;
