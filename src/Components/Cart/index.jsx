import HeaderEl from "../Header";
import { useSelector } from "react-redux";
import EachCartItem from "../CartItems";
import { Link } from "react-router-dom";
const CartEl=()=>{
    const cartItemsList=useSelector((state)=>(state.cartProducts.items));
    let totalCostOfTheProducts=0;
    for(let eachItem of cartItemsList){
        totalCostOfTheProducts+=eachItem.price*eachItem.counter;
    }
    if(cartItemsList.length===0){
        return(
           <>
            <HeaderEl/>
            <div className="flex flex-col items-center self-center">
            <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
                className="w-[180px] h-[190px] md:w-[360px] md:h-[380px]"
                alt="cart empty"
            />
            <h1 className="text-[#1e293b] font-['Roboto'] text-[24px] font-medium md:text-[32px]">
                Your Cart Is Empty
            </h1>

            <Link to="/products">
                <button
                type="button"
                className="bg-[#0b69ff] text-white font-['Roboto'] text-[12px] rounded-[8px] border-none px-4 py-2 outline-none cursor-pointer"
                >
                Shop Now
                </button>
            </Link>
            </div>
           </>
        )
    }
    else{
        return(
            <>
            <HeaderEl/>
            <div className="mx-15 my-5">
               <h1 className="font-sans text-[25px] text-black font-medium mb-2">MyCart</h1>
                {cartItemsList.map((eachItem)=>(<EachCartItem key={eachItem.id} data={eachItem}/>))}
                <div className="flex flex-row justify-end mt-8">
                    <div>
                    <p className="font-['Roboto'] text-[20px] font-[550] text-[#616e7c] mb-4 mt-3">
                    Order Total:
                    <span className="font-['Roboto'] text-[23px] font-bold text-[#171f46]"> Rs {totalCostOfTheProducts}</span>
                    </p>
                    <p className="font-['Roboto'] text-[20px] font-[450] text-[#616e7c] -mt-3 mb-3 ">
                    {cartItemsList.length} Items in cart
                    </p>
                    <button className="h-[30px] w-[200px] border-0 bg-[#0b69ff] rounded-[5px] text-white text-[12px] font-[450]">
                    Checkout
                    </button>
                   </div>
                </div>
    
            </div>
            </>
        )
    }
}
export default CartEl;