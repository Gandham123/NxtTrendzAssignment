
import {Link, useNavigate} from 'react-router-dom';


import Cookies from "js-cookie";
const HeaderEl=()=>{
  const navigate=useNavigate();
  
  const logoutHandel=()=>{
    Cookies.remove('token');
    
    navigate('/login');
  }
    return(
        <>
      <div className="px-[30px] py-[20px]">
      <div className="flex flex-row justify-between">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="w-[120px] mt-[15px] mb-[15px]"
          alt="logo"
        />

        <div className="hidden md:flex justify-end items-center">
          <Link to="/" className="font-sans font-[450] text-[20px] text-[#1e293b] mx-[15px] ">
            Home
          </Link>
          <Link to="/products" className="font-sans font-[450] text-[20px] text-[#1e293b] mx-[15px]">
            Products
          </Link>

          <div className="flex flex-row">
            <Link to="/cart" className="font-sans font-[450] text-[20px] text-[#1e293b] mx-[15px]">
              Cart
            </Link>
           
          </div>

          <button
            type="button"
            className="h-[35px] w-[80px] border-0 bg-[#0b69ff] rounded-[5px] font-sans font-[450] text-[18px] text-white mx-[15px]"
            onClick={logoutHandel}
           
          >
            Logout
          </button>
        </div>

        {/* Exit icon visible only on small screens */}
        <div className="md:hidden">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            className="h-[50px] mt-[30px] mx-[20px] mb-[20px] cursor-pointer"
            alt="exit"
            
          />
        </div>
      </div>

      {/* Bottom icons for small screens */}
      <div className="md:hidden py-[20px] bg-[#e6f6ff] my-[20px] flex flex-row justify-between items-center">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            className="w-[50px]"
            alt="nav-home"
          />
        </Link>
        <Link to="/products">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            className="w-[50px]"
            alt="nav-products"
          />
        </Link>
        <div className="flex flex-row items-center">
          <Link to="/cart">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              className="w-[50px]"
              alt="nav-cart"
            />
          </Link>
        </div>
      </div>
    </div>
    </>
    )
}
export default HeaderEl;