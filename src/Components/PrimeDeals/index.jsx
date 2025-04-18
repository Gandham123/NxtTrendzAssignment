import { fetchPrimeProducts } from "../../features/PrimeProducts";
import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import {ThreeDots} from 'react-loading-icons';
import ProductCard from "../EachProductCard";
const PrimeDealsEl=()=>{
    const dispatch=useDispatch();
    const {status,items,errormsg}=useSelector((state)=>(state.primeProducts))
    useEffect(() => {
        if (status === 'idle') {
        dispatch(fetchPrimeProducts());
        }
    }, [status, dispatch]);
    if(status==='loading'){
        return(
            <>
            <div className="flex justify-center mt-20">
                <ThreeDots fill={'orange'} height={50} width={50}/>
            </div>
            </>
        )
    }
    if(status==="succeeded"){
        return(
            <>
            <h1 className="text-2xl text-green-400 text-medium mx-12">Exclusive Prime Deals</h1>
            <div className="m-5 flex flex-col items-center md:flex-row md:justify-between">
              {items.map((eachItem)=>(<ProductCard key={eachItem.id} productData={eachItem}/>))}
            </div>
            </>
        )
    }
    if(status==='failed'){
        return(
            alert('Something went Wrong')
        )
    }
}
export default PrimeDealsEl;