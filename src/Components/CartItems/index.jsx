import { useSelector,useDispatch } from "react-redux";
import { removeItems,increaseCount,decreaseCount } from "../../features/CartManage";
import { BsPlusSquare } from "react-icons/bs";
import { BsDashSquare } from "react-icons/bs";
import { FaCircleXmark } from "react-icons/fa6";
const EachCartItem=(props)=>{
    const{data}=props;
    const{id,image_url,title,brand,price,counter}=data;
    const dispatch=useDispatch();
    const cartProductDecreaseCount=()=>{
          dispatch(decreaseCount(id));
    }
    const cartProductIncreaseCount=()=>{
        dispatch(increaseCount(id))
    }
    const deleteItem=()=>{
       dispatch(removeItems(id))
    }
    return(
        <div>
        <div className="flex flex-row justify-between p-5 shadow-[4px_4px_16px_#cbd5e1] my-5">
    <div className="flex flex-row justify-start">
      <img src={image_url} alt="cart" className="w-[130px] rounded-lg mr-2.5 md:w-[100px]" />
      <div className="mt-1 md:mt-5">
        <h1 className="font-roboto text-[20px] font-[450] text-[#202020] w-[300px] md:w-auto md:text-[18px] md:font-bold">{title}</h1>
        <p className="font-roboto text-[15px] font-[450] text-[#2c364c] md:text-[13px] md:text-[#616e7c] mb-3 md:mb-1">{brand}</p>
        
        {/* Mobile view controls */}
        <div className="md:hidden">
          <div className="flex flex-row justify-start -ml-1 mt-2 mb-2 ">
            <BsDashSquare className="h-[20px] w-[17px] m-[5px] cursor-pointer" onClick={cartProductDecreaseCount} />
            <h1 className="font-roboto text-[20px] font-extrabold text-[#1d1c38]  ml-2 mr-2">{counter}</h1>
            <BsPlusSquare className="h-[20px] w-[17px] m-[5px] cursor-pointer" onClick={cartProductIncreaseCount} />
          </div>
          <div className="flex flex-row justify-between -mt-1">
            <p className="font-roboto text-[20px] font-medium text-[#6366f1] mt-1">Rs {price}/-</p>
            <p className="font-sans font-[450] text-[#616e7c] text-[15px] mt-2 cursor-pointer ml-2" onClick={deleteItem}>Remove</p>
          </div>
        </div>
      </div>
    </div>

    {/* Larger view controls */}
    <div className="hidden md:flex flex-row justify-center items-center">
      <BsDashSquare className="h-[20px] w-[17px] m-[5px] cursor-pointer" onClick={cartProductDecreaseCount} />
      <h1 className="font-roboto text-[20px] font-extrabold text-[#1d1c38] mt-1 mx-2 md:-mt-1">{counter}</h1>
      <BsPlusSquare className="h-[20px] w-[17px] m-[5px] cursor-pointer" onClick={cartProductIncreaseCount} />
    </div>

    <div className="hidden md:block mt-11 md:mt-6">
      <p className="font-roboto text-[25px] font-medium text-[#6366f1] mt-1">Rs {price}/-</p>
    </div>

    <div className="hidden md:block mt-12 md:mt-10">
      <FaCircleXmark className="w-[100px] h-[30px] cursor-pointer" onClick={deleteItem} />
    </div>
  </div>
</div>

    )
}
export default EachCartItem;