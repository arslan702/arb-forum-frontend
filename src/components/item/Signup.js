import img from "../../assets/Group 20391.png"
import logo from "../../assets/logo s2 1.png"
import vector from "../../assets/Vector.png"
import { FaRegUser } from "react-icons/fa"
import { GoMail } from "react-icons/go"
import { AiOutlineLock, AiOutlineEye } from "react-icons/ai"
import { useRef, useState } from "react"
import axios from "axios"
import { API_URL } from "../../constants"
import { useNavigate } from "react-router-dom"
import { useMyContext } from "../../context/MyContext"
import { header } from "../../data"

function Signup() {
    const navigate = useNavigate();
    const { language } = useMyContext();
    const fileInputRef = useRef(null);
    const [firstName, setFirstName] = useState('')
    const [familyName, setFamilyName] = useState('')
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [one, setOne] = useState('');
    const [two, setTwo] = useState('');
    const [three, setThree] = useState('');
    const [four, setFour] = useState('');
    const [selectedFile, setSelectedFile] = useState('');

    const handleDivClick = () => {
        // Trigger a click on the hidden file input when the div is clicked
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
        console.log("clicked")
      };
    
    const handleFileChange = (e) => {
        // Handle file change logic here
        const selectedFile = e.target.files[0];
        console.log('Selected File:', selectedFile);
        setSelectedFile(selectedFile);
      };

      const handleEmailVerification = async (e) => {
        e.preventDefault();
        try {
          // Send email to backend
          const response = await axios.post(`${API_URL}/send-email`, { email });
          console.log(response.data); // Assuming backend returns a response
    
          // Update UI to enter code
          alert("code-sent");
          // setVerificationStatus('code_sent');
        } catch (error) {
          console.error(error);
        }
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        const emailCode = Number(`${one}${two}${three}${four}`)
        try {
            // code validation
            const response = await axios.post(`${API_URL}/verify-email`, {
              email,
              code: emailCode,
            });
            console.log(response.data);
      
            // setVerificationStatus(response.data.status);
            alert(response?.data?.status);
            if(response?.data?.status === "verified") {
                // Create FormData object
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('familyName', familyName);
        formData.append('email', email);
        formData.append('userName', userName);
        formData.append('phone', phone);
        formData.append('password', password);
    
        if (selectedFile) {
          formData.append('picture', selectedFile);
        }
    
        try {
            const response = await axios.post(`${API_URL}/user/register`, formData);          
            const data = response.data;
            localStorage.setItem('user', JSON.stringify(response?.data?.user))
            localStorage.setItem('token', response?.data?.token)
            navigate('/')
            console.log(data);
          } catch (error) {
            console.error('Error:', error);
          }
        }
          } catch (error) {
            console.error(error);
            alert("Email verification failed")
          }
      };
    return (
        <>
            <div className="flex lg:flex-row    flex-col">
                <div className="grid place-items-center lg:w-1/2 w-full lg:order1 p-2 md:p-5 py-10  order-2">
                    <div className="border border-white lg:w-[85%] w-5/6">
                        <div className="flex flex-col justify-center md:flex-row items-center gap-6">
                            <p className="text-custum-pri text-2xl font-bold">{language === 'Arabic' ? header?.signupHeading1?.aterm : header?.signupHeading1?.eterm}</p>
                            <img src={logo} alt="img"/>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 w-3/4  mx-auto">
                            <h2 className="text-custum-pri text-2xl font-extrabold">{language === 'Arabic' ? header?.signupAccount?.aterm : header?.signupAccount?.eterm}</h2>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-10">
                            <div className="grid sm:grid-cols-2  gap-4  mt-4">
                                <div className='flex flex-col items-end  gap-3'>
                                    <label className="font-normal text-base" htmlFor="input_1">
                                    {language === 'Arabic' ? header?.signupFamilyName?.aterm : header?.signupFamilyName?.eterm}<span className="text-red-400">*</span>
                                    </label>
                                    <div className="w-full relative">
                                        <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                            <FaRegUser />
                                        </div>
                                        <input required type="text" value={familyName} onChange={(e) => setFamilyName(e.target.value)} id="input_1" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_1" placeholder={language === 'Arabic' ? header?.signup2Name?.aterm : header?.signup2Name?.eterm} />
                                    </div>
                                </div>
                                <div className='flex flex-col items-end  gap-3'>
                                    <label className="font-normal text-base" htmlFor="input_1">
                                    {language === 'Arabic' ? header?.signup1Name?.aterm : header?.signup1Name?.eterm}<span className="text-red-400">*</span>
                                    </label>
                                    <div className="w-full relative">
                                        <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                            <FaRegUser />
                                        </div>
                                        <input required type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} id="input_1" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_1" placeholder={language === 'Arabic' ? header?.signup1Name?.aterm : header?.signup1Name?.eterm} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col items-end mt-6  gap-3'>
                                <label className="font-normal text-base" htmlFor="input_1">
                                    {language === 'Arabic' ? header?.signupEmail?.aterm : header?.signupEmail?.eterm}<span className="text-red-400">*</span>
                                </label>
                                <div className="w-full relative">
                                    <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                        <GoMail />
                                    </div>
                                    <button onClick={handleEmailVerification} className="hidden md:inline absolute top-1.5 left-3 bg-custum-pri text-white font-bold rounded-md text- md:text-sm px-4 py-2">
                                    {language === 'Arabic' ? header?.signupVerification?.aterm : header?.signupVerification?.eterm}
                                    </button>
                                    <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="input_1" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_1" placeholder='User@emial.com' />
                                </div>
                                <button onClick={handleEmailVerification} className=" md:hidden top-1.5 left-3 bg-custum-pri text-white font-bold rounded-md text- md:text-sm px-4 py-2">
                                {language === 'Arabic' ? header?.signupVerification?.aterm : header?.signupVerification?.eterm}
                                </button>
                            </div>
                            <div className="grid sm:grid-cols-2  gap-4 mt-6">
                                <div className='flex flex-col items-end  gap-3'>
                                    <label className="font-normal text-base" htmlFor="input_1">
                                    {language === 'Arabic' ? header?.signupMobile?.aterm : header?.signupMobile?.eterm}<span className="text-red-400">*</span>
                                    </label>
                                    <div className="w-full relative">
                                        <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                            <FaRegUser />
                                        </div>
                                        <input required type="number" value={phone} onChange={(e) => setPhone(e.target.value)} id="input_1" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_1" placeholder='+914566565464' />
                                    </div>
                                </div>
                                <div className='flex flex-col items-end  gap-3'>
                                    <label className="font-normal text-base" htmlFor="input_1">
                                    {language === 'Arabic' ? header?.signUpUsername?.aterm : header?.signUpUsername?.eterm}<span className="text-red-400">*</span>
                                    </label>
                                    <div className="w-full relative">
                                        <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                            <FaRegUser />
                                        </div>
                                        <input required type="text" value={userName} onChange={(e) => setUserName(e.target.value)} id="input_1" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_1" placeholder={language === 'Arabic' ? header?.signUpUsername?.aterm : header?.signUpUsername?.eterm} />
                                    </div>
                                </div>
                            </div>
                            <div className="grid sm:grid-cols-2 md:gap-0 gap-4 mt-6">
                                <div className='flex flex-col items-end  gap-3'>
                                    <label className="font-normal text-base" htmlFor="input_2">
                                    {language === 'Arabic' ? header?.signupPassword?.aterm : header?.signupPassword?.eterm}<span className="text-red-400">*</span>
                                    </label>
                                    <div className="w-full relative">
                                        <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                            <AiOutlineLock />
                                        </div>
                                        <button className="absolute left-0 top-0 h-full ps-3 text-custum-pri">
                                            <AiOutlineEye />
                                        </button>
                                        <input required value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="input_2" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_2" placeholder='' />
                                    </div>
                                </div>
                                <div className="px-3 sm:mt-0 mt-4 flex gap-4 flex-col justify-between">
                                    <p className="text-right text-sm">{language === 'Arabic' ? header?.signupCodeSent?.aterm : header?.signupCodeSent?.eterm}<span className="text-red-400">*</span></p>
                                    <div className="flex justify-between items-center">
                                        <input value={one} onChange={(e) => setOne(e.target.value)} type="" className=" rounded-md w-10 md:w-14 h-10 md:h-12 border text-center border-custum-pri" maxLength="1" minLength="1" placeholder="1" />
                                        <input value={two} onChange={(e) => setTwo(e.target.value)} type="" className=" rounded-md w-10 md:w-14 h-10 md:h-12 border text-center border-custum-pri" maxLength="1" minLength="1" placeholder="1" />
                                        <input value={three} onChange={(e) => setThree(e.target.value)} type="" className=" rounded-md w-10 md:w-14 h-10 md:h-12 border text-center border-custum-pri" maxLength="1" minLength="1" placeholder="1" />
                                        <input value={four} onChange={(e) => setFour(e.target.value)} type="" className=" rounded-md w-10 md:w-14 h-10 md:h-12 border text-center border-custum-pri" maxLength="1" minLength="1" placeholder="1" />
                                    </div>
                                </div>
                            </div>
                            <div className="md:p-3 mt-3 " onClick={handleDivClick}>
                                <p className="text-right font-bold md:p-2 pb-3">{language === 'Arabic' ? header?.signupPic?.aterm : header?.signupPic?.eterm}<span className="text-red-400">*</span></p>
                                <div className="w-full p-3 md:h-36 rounded-md border border-custum-pri border-dashed grid place-items-center" >
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                                    <div className="flex flex-col items-center md:w-1/3">
                                        <img src={vector} alt="" />
                                        <p className="text-[10px] md:text-[16px] text-center">
                                        {language === 'Arabic' ? header?.signupBrowse?.aterm : header?.signupBrowse?.eterm}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="md:p-3 ">
                                <p className="text-right font-bold p-2 pb-3">{language === 'Arabic' ? header?.signupLocation?.aterm : header?.signupLocation?.eterm}</p>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7088400576!2d66.49600118540117!3d25.19298377106345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697717697691!5m2!1sen!2s" className="w-full rounded-md" allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                            <div className="mt-2">
                                <p className="text-[10px] md:text-[16px] text-right md:p-3">{language === 'Arabic' ? header?.signupPara?.aterm : header?.signupPara?.eterm}</p>
                            </div>

                            <div className='mt-3 flex justify-end  items-center gap-2'>
                                <label className="font-light text-[11px] md:text-base" htmlFor="input_3">
                                {language === 'Arabic' ? header?.signupTerms?.aterm : header?.signupTerms?.eterm}
                                </label>
                                <input type="checkbox" id="input_3" className='border text-right border-custum-pri rounded-md py-3 px-4 w-5' name="input_3" placeholder={language === 'Arabic' ? header?.signupTerms?.aterm : header?.signupTerms?.eterm} />
                            </div>

                            <button type="submit" className="bg-custum-pri text-white w-full p-4 rounded-md mt-4">
                            {language === 'Arabic' ? header?.signupVerification?.aterm : header?.signupVerification?.eterm}
                            </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="flex justify-center items-center lg:order-2 lg:h-[150vh] h-full w-full order-1 lg:w-1/2 bg-custum-back  p-20 ">
                    <img className="xl:p-20 md:my-20 " src={img} alt=""/>

                </div>
            </div>

        </>
    );
}

export default Signup;