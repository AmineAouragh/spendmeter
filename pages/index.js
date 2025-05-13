import Image from "next/image";
import Head from 'next/head'

import { useState } from 'react'

import { FaDollarSign } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaCartPlus } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import { MdRemoveShoppingCart } from "react-icons/md";
import { FaCoins } from "react-icons/fa";


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Home() {

  const [ budget, setBudget ] = useState(0)
  const [ budgetBtnClicked, setBudgetBtnClicked ] = useState(false)
  const [ shoppingList, setShoppingList ] = useState([])
  const [ itemName, setItemName ] = useState('')
  const [ itemPrice, setItemPrice ] = useState(0)
  const [ itemQuantity, setItemQuantity ] = useState(1) 
  const [ totalSpent, setTotalSpent ] = useState(0)
  const [ percentage, setPercentage ] = useState(0)

  function addNewItem(){
    if (itemPrice > 0){
      let product = {
        "name": itemName || "Item", 
        "price": itemPrice,
        "quantity": itemQuantity,
        "total": itemPrice * itemQuantity
      } 
      console.log(product)
      setShoppingList(prevList => [... prevList, product])
      let totalPrice = totalSpent + product.price * product.quantity
      setTotalSpent(totalPrice) 
      console.log(totalPrice)
      if (totalPrice < budget || totalPrice > budget){
        let percent = totalPrice/budget * 100 
        console.log(percent)
        setPercentage(percent)
      }
      else if (totalPrice == budget){
        setPercentage(100)
      } 
    }
  }

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Bebas+Neue&family=Cairo:wght@200..1000&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Nunito:wght@400;700&display=swap" rel="stylesheet" />
        <title>Spendmeter - Grocery Spending Tracker</title>
      </Head>
      <div className="w-full bg-bgsoft h-full fixed flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <GiWallet size={42} className="text-textdark mb-4" />
          <h2 className="text-center text-xl font-Inter text-textdark">Spendmeter</h2>
        </div>
        <h1 className="mt-4 text-3xl text-textdark font-bold font-Nunito text-center">Stay on Budget While Shopping</h1>
        <div className="mt-16 mx-auto w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
          {
            !budgetBtnClicked && <p className="mb-6 text-2xl text-center font-Nunito text-slate-700">How much do you plan to spend today?</p>
          }
          {
            budgetBtnClicked 
            &&
            <div className="mb-6 w-full">
              <div className="mb-6 flex flex-row items-end w-full justify-between">
                <div>
                  <p className="font-Nunito text-lg text-textlight mb-4">My budget for today&apos;s shopping:</p>
                  <p className="text-brand mb-2 flex flex-row items-center text-6xl font-bold font-Inter">
                    <span>${budget}</span>
                    <FaCoins size={36} className="text-yellow-400 ml-2" />
                  </p>
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <button className="bg-accent hover:bg-blue-700 rounded-2xl flex flex-row text-3xl text-white font-Nunito font-bold px-8 py-4">
                      <FaCartPlus className="text-white" />
                      <span className="ml-2">Add Item</span>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="">
                    <DialogHeader>
                      <DialogTitle className="font-Inter text-2xl text-textdark">Add new item</DialogTitle>
                      <DialogDescription>
                        
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-4 w-full">
                      <div className="w-full flex flex-col mb-2">
                        <label htmlFor="itemName" className="mb-1 text-xl font-Nunito">
                          Item name
                        </label>
                        <input id="itemName" value={itemName} onChange={e => setItemName(e.target.value)} type="text" className="outline-none text-3xl font-Nunito border px-6 py-4 rounded-2xl" />
                      </div>
                      <div className="w-full flex flex-col mb-2">
                        <label htmlFor="itemPrice" className="mb-1 text-xl font-Nunito">
                          Item price (required)
                        </label>
                        <input id="itemPrice" value={itemPrice} onChange={e => setItemPrice(e.target.value)} type="number" min={0} className="outline-none text-3xl font-Nunito border px-6 py-4 rounded-2xl" required />
                      </div>
                      <div className="w-full flex flex-col mb-2">
                        <label htmlFor="itemPrice" className="mb-1 text-xl font-Nunito">
                          Item quantity
                        </label>
                        <input id="itemQuantity" value={itemQuantity} onChange={e => setItemQuantity(e.target.value)} type="number" min={0} className="outline-none text-3xl font-Nunito border px-6 py-4 rounded-2xl" />
                      </div>
                    </div>
                    <DialogFooter>
                      <button type="submit" onClick={addNewItem} className="px-8 py-3 text-xl rounded-2xl text-white bg-accent hover:bg-blue-700 font-Nunito font-bold">Add</button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
              <p className={`mb-3 ${shoppingList.length > 0 ? "" : "hidden"} flex flex-row items-center justify-between text-textlight text-xl font-Nunito`}>
                <span>About to spend: ${totalSpent}</span>
                {
                    percentage <= 80 
                    && 
                    <span className="text-center text-green-500 font-Nunito font-bold text-lg">
                      You are within budget 👍
                    </span>
                  }
                  {
                    percentage > 80 && percentage <= 100
                    && 
                    <span className="text-center text-amber font-Nunito font-bold text-lg">
                      Close to your limit ⚠️
                    </span>
                  }
                  {
                    percentage > 100
                    && 
                    <span className="text-center text-danger font-Nunito font-bold text-lg">
                      Over budget 
                    </span>
                  }
              </p>
              <div className={`${shoppingList.length > 0 ? "" : "hidden"} bg-slate-100 rounded-2xl w-full border h-[48px] mb-6`}>
                <div style={{ width: `${Math.min(percentage, 100)}%` }} className={`${percentage <= 80 && "bg-brand"} ${percentage > 80 && percentage < 100 && "bg-amber"} ${percentage > 100 && "bg-danger"} h-full flex flex-col justify-center items-center rounded-2xl`}>
                  
                </div>
              </div>
              <div className="w-full">
                {
                  shoppingList &&
                  Object.entries(shoppingList).map(([key, value]) => (
                    <div className="w-full flex flex-row items-center mb-4">
                      <div key={key} className="mr-2 flex flex-row items-center justify-between w-full px-4 py-3 bg-white border rounded-2xl shadow-sm">
                        <span className="text-3xl font-Inter text-textdark">{value.quantity} x {value.name}</span>
                        <span className="text-3xl font-Inter text-textdark">Total cost: ${value.total}</span>
                      </div>
                      <button type="button" className="bg-green-500 hover:bg-green-600 mr-2 text-white text-3xl px-6 py-3 font-Nunito rounded-2xl">
                        Edit
                      </button>
                      <button type="button" className="flex flex-row items-center bg-red-500 hover:bg-red-600 text-white text-3xl px-6 py-3 font-Nunito rounded-2xl">
                        <MdRemoveShoppingCart size={36} className="text-white" />
                      </button>
                    </div>
                  ))
                }
              </div>
            </div> 
          }
          <div className={`${budgetBtnClicked ? "hidden" : ""} flex flex-row items-center justify-center`}>
            <FaDollarSign className="text-gray-300" size={32} />
            <input type="number" value={budget} onChange={e => setBudget(e.target.value)} min={0} className="mr-3 w-[140px] relative text-center py-4 rounded-2xl outline-none font-Inter text-textdark text-4xl border" />
            <button type="button" onClick={() => setBudgetBtnClicked(true)} className=" transition duration-100 focus:scale-85 bg-accent rounded-2xl text-4xl text-white px-8 py-4 font-Nunito font-bold">Set A Budget</button>
          </div>
        </div>
      </div>
    </>
  );
}
