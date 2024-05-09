import img from "../../assets/Group 20379.png"
import logo from "../../assets/logo s2 1.png"
import { FaRegUser } from "react-icons/fa"
import { AiOutlineLock, AiOutlineEye } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { API_URL } from "../../constants"
import { useMyContext } from "../../context/MyContext"
import { header } from "../../data"
function Login() {
    const { language } = useMyContext();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/user/login`, {email, password});          
            const data = response.data;
            localStorage.setItem('user', JSON.stringify(response?.data?.user))
            localStorage.setItem('token', response?.data?.token)
            navigate('/')
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <>
            <div className="flex lg:flex-row items-center flex-col">
                <div className="grid place-items-center lg:w-1/2 w-full lg:order1 lg:p-0 p-2 md:p-5 order-2">
                    <div className="  xl:w-2/3 w-5/6">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                            <p className="text-custum-pri text-2xl font-bold">{language === 'Arabic' ? header?.signupHeading1?.aterm : header?.signupHeading1?.eterm}</p>
                            <img src={logo} alt=""/>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 w-3/4  mx-auto">
                            <h2 className="text-custum-pri text-[12px] md:text-2xl font-extrabold">{language === 'Arabic' ? header?.loginButton?.aterm : header?.loginButton?.eterm}</h2>
                            <p className="text-[12px] md:text-xl font-normal text-center">
                            {language === 'Arabic' ? header?.singinDetails?.aterm : header?.singinDetails?.eterm}
                            </p>
                        </div>
                        <form onSubmit={handleSubmit}>
                        <div className="mt-4">
                            <div className='flex flex-col  items-end  gap-3'>
                                <label className="font-normal text-[12px] md:text-base" htmlFor="input_1">
                                {language === 'Arabic' ? header?.signupEmail?.aterm : header?.signupEmail?.eterm}
                                </label>
                                <div className="w-full  relative">
                                    <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                        <FaRegUser />
                                    </div>

                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="input_1" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_1" placeholder='otfrtda@gmail.com' />
                                </div>

                            </div>
                            <div className='flex flex-col items-end mt-3  gap-3'>
                                <label className="font-normal text-[12px] md:text-base" htmlFor="input_2">
                                {language === 'Arabic' ? header?.signupPassword?.aterm : header?.signupPassword?.eterm}
                                </label>
                                <div className="w-full relative">
                                    <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                        <AiOutlineLock />
                                    </div>
                                    <button className="absolute left-0 top-0 h-full ps-3 text-custum-pri">
                                        <AiOutlineEye />
                                    </button>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="input_2" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_2" placeholder={language === 'Arabic' ? header?.signupMessage?.aterm : header?.signupMessage?.eterm} />
                                </div>

                            </div>
                            <div className="flex justify-between p-2">
                                <p onClick={() => navigate('/forgot-password')} className="font-bold text-[12px] md:text-[14px] flex items-center justify-center cursor-pointer">
                                {language === 'Arabic' ? header?.forgotPassword?.aterm : header?.forgotPassword?.eterm}
                                </p>
                                <div className='flex  items-center gap-3'>
                                    <label className="font-light text-[12px] md:text-base" htmlFor="input_3">
                                        {language === 'Arabic' ? header?.rememberMe?.aterm : header?.rememberMe?.eterm}
                                    </label>


                                    <input type="checkbox" id="input_3" className='border text-right border-custum-pri rounded-md py-3 px-4 w-5' name="input_3" placeholder={language === 'Arabic' ? header?.signupMessage?.aterm : header?.signupMessage?.eterm} />

                                </div>

                            </div>
                            <button type="submit" className="bg-custum-pri text-white w-full p-4 rounded-md mt-4">
                            {language === 'Arabic' ? header?.loginButton?.aterm : header?.loginButton?.eterm}
                            </button>
                        </div>
                        </form>
                        <p className="text-center text-[12px] md:text-lg p-4">
                        {language === 'Arabic' ? header?.noAccount?.aterm : header?.noAccount?.eterm}
                            <span className="text-custum-pri cursor-pointer" onClick={() => navigate("/signup")}>{language === 'Arabic' ? header?.registerNow?.aterm : header?.registerNow?.eterm}</span>

                        </p>

                    </div>
                </div>
                <div className="grid place-items-center lg:order-2 w-full order-1 lg:w-1/2 bg-custum-back  lg:p-20 sm:p-10">
                    <img src={img} alt=""/>
                </div>
            </div>

        </>
    );
}

export default Login;