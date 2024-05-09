import img from "../../assets/Group 20389.png"
import logo from "../../assets/logo s2 1.png"
import { FaRegUser } from "react-icons/fa"
import { AiOutlineLock, AiOutlineEye } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"
import { API_URL } from "../../constants"
import { useMyContext } from "../../context/MyContext"
import { header } from "../../data"
function Forgot() {
    const { language } = useMyContext();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailVerified, setEmailVerified] = useState(false);
    const [emailCode, setEmailCode] = useState('');
    const [forgotPassWord, setForgotPassword] = useState(false);

    const handleEmailVerification = async (e) => {
        e.preventDefault();
        try {
          // Send email to backend
          const response = await axios.post(`${API_URL}/send-email`, { email });
          console.log(response.data); // Assuming backend returns a response
          setForgotPassword(true);
          // Update UI to enter code
          alert(`Email Verification Code send to ${email}`);
          // setVerificationStatus('code_sent');
        } catch (error) {
          console.error(error);
        }
      };

      const verifyCode = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post(`${API_URL}/verify-email`, {
            email,
            code: Number(emailCode),
          });
          console.log(response.data);
          if(response?.data?.status === 'verified'){
            setEmailVerified(true);
          }
          
          // setVerificationStatus(response.data.status);
          alert(response?.data?.status);
        } catch (error) {
          console.error(error);
        }
      };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/user/updated-password`, {email, password});          
            const data = response.data;
            alert('password updated successfully')
            navigate('/login')
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
                            {/* <h2 className="text-custum-pri text-[12px] md:text-2xl font-extrabold">تسجيل الدخول</h2> */}
                            <p className="text-[12px] md:text-xl font-normal text-center">
                                {language === 'Arabic' ? header?.emailVerificationCode?.aterm : header?.emailVerificationCode?.eterm}
                            </p>
                        </div>
                        {!forgotPassWord ? 
                        <form onSubmit={handleEmailVerification}>
                        <div className="mt-4">
                            <div className='flex flex-col  items-end  gap-3'>
                                <label className="font-normal text-[12px] md:text-base" htmlFor="input_1">
                                {language === 'Arabic' ? header?.email?.aterm : header?.email?.eterm}
                                </label>
                                <div className="w-full  relative">
                                    <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                        <FaRegUser />
                                    </div>

                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="input_1" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_1" placeholder='otfrtda@gmail.com' />
                                </div>

                            </div>
                            <button type="submit" className="bg-custum-pri text-white w-full p-4 rounded-md mt-4">
                            {language === 'Arabic' ? header?.sendCode?.aterm : header?.sendCode?.eterm}
                            </button>
                        </div>
                        </form>
                        :
                        <div>
                        {!emailVerified ? 
                        <div className="mt-4">
                            <div className='flex flex-col  items-end  gap-3'>
                                <label className="font-normal text-[12px] md:text-base" htmlFor="input_1">
                                {language === 'Arabic' ? header?.verificationCode?.aterm : header?.verificationCode?.eterm}
                                </label>
                                <div className="w-full  relative">
                                    <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                        <FaRegUser />
                                    </div>

                                    <input type="text" value={emailCode} onChange={(e) => setEmailCode(e.target.value)} id="input_1" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_1" placeholder='1234' />
                                </div>

                            </div>
                            <button onClick={verifyCode} className="bg-custum-pri text-white w-full p-4 rounded-md mt-4">
                            {language === 'Arabic' ? header?.sendCode?.aterm : header?.sendCode?.eterm}
                            </button>
                        </div>
                        : 
                        <div className="mt-4">
                            <div className='flex flex-col  items-end  gap-3'>
                                <label className="font-normal text-[12px] md:text-base" htmlFor="input_1">
                                {language === 'Arabic' ? header?.newPassword?.aterm : header?.newPassword?.eterm}
                                </label>
                                <div className="w-full  relative">
                                    <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                        <FaRegUser />
                                    </div>

                                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} id="input_1" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_1" placeholder='*******' />
                                </div>

                            </div>
                            <button onClick={handleSubmit} className="bg-custum-pri text-white w-full p-4 rounded-md mt-4">
                            {language === 'Arabic' ? header?.presents?.aterm : header?.presents?.eterm}
                            </button>
                        </div>
                        }
                        </div>
                        }
                    </div>
                </div>
                <div className="grid place-items-center lg:order-2 w-full order-1 lg:w-1/2 bg-custum-back  lg:p-20 sm:p-10">
                    <img src={img} alt=""/>
                </div>
            </div>

        </>
    );
}

export default Forgot;