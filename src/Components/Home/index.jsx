import HeaderEl from "../Header";
import { useNavigate } from "react-router-dom";
const HomeEl=()=>{
    const navigate=useNavigate();
    const handlingClick=()=>{
        navigate("/products")
    }
    return(
        <>
          <h1 className="text-[40px] font-[450] text-[#78abee] text-center mt-5 md:hidden">Home</h1>
          <HeaderEl />
          <div className="flex flex-row justify-between items-center p-10 text-left max-md:flex-col max-md:text-center">
                <div className="w-[60%] mr-20 max-md:w-full max-md:mr-0">
                <h1 className="font-roboto text-[50px] text-[#1e293b] font-bold">Clothes That Get You Noticed</h1>
                <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                    alt="Home-image"
                    className="w-full mt-5 md:hidden"
                />
                <p className="pt-5 pb-5 font-sans text-[20px] text-[#64748b] font-[450]">
                    Fashion is part of the daily air does not quite help that it changes all the time. Clothes have always been a maker of the era and we are in a revolution. Your fashion makes you be seen and heard that way you are. So, celebrate the season's new and exciting fashion in your way.
                </p>
                <button
                    className="h-10 w-40 bg-[#0b69ff] rounded-lg text-white font-roboto cursor-pointer border-0"
                    onClick={handlingClick}
                >
                    Shop Now
                </button>
                </div>
                <div className="w-[40%] max-md:hidden">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
                    alt="Home-image"
                    className="w-full"
                />
                </div>
          </div>
        </>

    )
}
export default HomeEl;