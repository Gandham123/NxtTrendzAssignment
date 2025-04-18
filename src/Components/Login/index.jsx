import { useState } from "react";
import Cookies from "js-cookie";
import axios from 'axios'
import { Navigate,useNavigate} from "react-router-dom";
const LoginEl=()=>{
    const token=Cookies.get('token');
    const navigate=useNavigate();
    if(token!=undefined){
        return <Navigate to={'/'}/>
    }

    const[name,setName]=useState("");
    const[password,setPassword]=useState("");
    const[errormsg,setErrorMsg]=useState("");
    const[showErrorMsg,setShowErrorMsg]=useState(false);
    const userDetails=async(event)=>{
        event.preventDefault();
        const details=JSON.stringify({username:name,password:password})
        try{
            const response=await axios.post('https://apis.ccbp.in/login',details);
           //const data=await response.json();
            console.log(response);
            Cookies.set('token',response.data.jwt_token,{expires:1});
            navigate('/');
            setPassword("");
            setName("");
                //setErrorMsg("");
                //setShowErrorMsg(false);
            
        }
        catch(error){
            console.error('Error posting data:', error);
            setShowErrorMsg(true);
            setErrorMsg(error.response.data.error_msg);
        }
    }
    return(
        <div className="flex flex-row justify-center items-center h-screen p-12 max-md:flex-col max-md:justify-start">
            <h1 className="text-[40px] font-[450] font-roboto text-[#78abee] text-center mb-10 md:hidden">
                Login
            </h1>

            <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                className="w-[200px] mb-10 md:hidden"
                alt="logo"
            />

            <div className="w-[50vh] m-8 max-md:w-[400px] max-md:mb-5 max-md:mt-8">
                <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
                className="w-full"
                alt="login-logo"
                />
            </div>

            <div className="bg-white rounded-[15px] shadow-[4px_4px_16px_#1e293b] p-10 w-[50vh] m-8 max-md:w-full max-md:shadow-none max-md:rounded-none max-md:p-0 max-md:m-0 max-md:mt-8">
                <div className="text-center max-md:hidden">
                <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                    className="w-[120px] mb-2 text-center"
                    alt="logo"
                />
                </div>

                <form onSubmit={userDetails} className="w-full">
                <label className="text-[14px] text-[#1e293b] font-roboto font-[550] block mb-1">
                    USERNAME
                </label>
                <input
                    type="text"
                    onChange={(event)=>(setName(event.target.value))}
                    placeholder="Username"
                    value={name}
                    className="h-[40px] px-5 w-full bg-[#d7dfe9] rounded-md mb-5 font-medium text-[#0f1621] outline-none placeholder:text-[#64748b]"
                />

                <label className="text-[14px] text-[#1e293b] font-roboto font-[550] block mb-1">
                    PASSWORD
                </label>
                <input
                    type="text"
                    onChange={(event)=>(setPassword(event.target.value))}
                    placeholder="Password"
                    value={password}
                    className="h-[40px] px-5 w-full bg-[#d7dfe9] rounded-md mb-5 font-medium text-[#0f1621] outline-none placeholder:text-[#64748b]"
                />

                {showErrorMsg && (
                    <p className="text-[17px] text-red-600 font-roboto font-[450] mt-[-14px] mb-4">
                    {errormsg}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full h-[40px] bg-[#0b69ff] text-white font-roboto rounded-lg cursor-pointer max-md:mb-10"
                >
                    Login
                </button>
                </form>
            </div>
        </div>

    )
}
export default LoginEl;