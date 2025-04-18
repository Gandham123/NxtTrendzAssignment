import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import ThreeDots from "react-loading-icons/dist/esm/components/three-dots";
import ProductCard from "../EachProductCard";
import HeaderEl from "../Header";
import { BsPlusSquare } from "react-icons/bs";
import { BsDashSquare } from "react-icons/bs";
import { useSelector,useDispatch } from "react-redux";
import { addItems } from "../../features/CartManage";
const FullProductDetailsEl=(props)=>{
      let apiStatusList={
        success:'SUCCESS',
        failure:'FAILURE',
        loading:'LOADING',
        intial:'INTIAL'
      }
       const dispatch=useDispatch();
       const addingToCart=()=>{
        const cartProductDetails={
            id:productDetails.id,
            title:productDetails.title,
            brand:productDetails.brand,
            price:productDetails.price,
            image_url:productDetails.image_url,
            counter
        };
        dispatch(addItems(cartProductDetails));
       }
       const[productDetails,setProductDetails]=useState({});
       const[similarProducts,setSimilarProducts]=useState([]);
       const[counter,setCounter]=useState(1);
       const[apiStatus,setApiStatus]=useState(apiStatusList.intial);

       const{id}=useParams();
       const decreasingCount=()=>{
        if(counter>1){
            setCounter((counter)=>(counter-1));
          }
       }
       const increasingCount=()=>{
            setCounter((counter)=>(counter+1));
       }

       const url=`https://apis.ccbp.in/products/${id}`;

       useEffect(()=>{
        const fetchData=async()=>{
            const token=Cookies.get('token');
            setApiStatus(apiStatusList.loading);
            try{
                const response=await axios.get(url,{headers:{
                    Authorization:`Bearer ${token}`
                }});
                setApiStatus(apiStatusList.success);
                setProductDetails(response.data);
                setSimilarProducts(response.data.similar_products);
                //console.log(response);
            }
            catch(error){
                console.error('error Msg is',error.message());
                setApiStatus(apiStatusList.failure);
            }
        }
        fetchData();
         
       },[]);

    if(apiStatus===apiStatusList.loading){
        return(
            <>
            <div className="flex justify-center mt-10">
              <ThreeDots fill={'orange'} height={60} width={60}/>
            </div>
            </>
        )
    }

    if(apiStatus===apiStatusList.failure){
        return(
            alert("Something went wrong")
        )
    }

    if(apiStatus===apiStatusList.success){
        console.log(productDetails.image_url);
        return(
            <>
            <HeaderEl />
             <div className="flex flex-row justify-start my-8 mx-20 max-md:flex-col max-md:mx-16">
                <div className="mr-5 w-[100%]">
                <img
                    src={productDetails.image_url}
                    alt={`${id}`}
                    className="h-[450px] w-full rounded-lg max-md:w-full max-md:mb-8"
                />
                </div>
            <div>
                <h1 className="text-[40px] font-normal text-[#1e293b] font-roboto">{productDetails.title}</h1>
                <p className="text-[20px] font-semibold text-[#12022f] font-roboto">Rs {productDetails.price}/-</p>
                <div className="flex flex-row items-center justify-start mt-2">
                    <div className="flex items-center justify-center bg-blue-500 h-[30px] w-[70px] rounded-md mr-2">
                    <p className="text-white font-roboto text-[18px] font-normal m-1">{productDetails.rating}</p>
                    <img
                        src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                        alt="product-star"
                        className="w-[20px]"
                    />
                    </div>
                    <p className="text-[15px] font-medium text-[#171f46] font-roboto m-1">
                    {productDetails.totalReviews} Reviews
                    </p>
                </div>
                <p className="text-[16px] font-medium text-[#616e7c] mt-5 font-roboto">{productDetails.description}</p>
                <p className="text-[18px] font-semibold text-[#1e293b] font-roboto mt-3">
                    Available: <span className="text-[#616e7c] font-normal">{productDetails.availability}</span>
                </p>
                <p className="text-[18px] font-semibold text-[#1e293b] font-roboto mt-1">
                    Brand: <span className="text-[#616e7c] font-normal">{productDetails.brand}</span>
                </p>
                <hr className="w-full border border-[#616e7c] my-6" />
                <div className="flex items-center">
                    <BsDashSquare className="text-[20px] mr-5 cursor-pointer" onClick={decreasingCount} />
                    <p className="text-[20px] font-semibold text-[#12022f] font-roboto">{counter}</p>
                    <BsPlusSquare className="text-[20px] mx-5 cursor-pointer" onClick={increasingCount} />
                </div>
                <button
                    className="h-[30px] w-[120px] bg-blue-500 text-white text-sm rounded mt-3 cursor-pointer"
                    onClick={addingToCart} 
                >
                    ADD To CART
               </button>
           </div>
        </div>
        <div className="my-8 mx-20 max-md:mx-16">
                <h1 className="text-[30px] font-normal text-[#1e293b] font-roboto mb-0">
                Similar Products
                </h1>
                <div className="flex flex-row flex-wrap justify-start mt-4">
                {similarProducts.map((eachItem) => (
                    <ProductCard key={eachItem.id} productData={eachItem} />
                ))}
                </div>
        </div>
           </>

        )
    }

}
export default FullProductDetailsEl;