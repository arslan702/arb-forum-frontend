import React, { useEffect, useRef, useState } from 'react'
import { AiOutlineEye, AiOutlineLock } from 'react-icons/ai'
import vector from "../../assets/Vector.png"
import axios from 'axios'
import { API_URL } from '../../constants'
import { useNavigate } from 'react-router-dom'

export default function Editform() {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);
    const [id, setId] = useState('');
    const [familyName, setFamilyName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
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

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
        axios.get(`${API_URL}/user/${user?.id}`)
        .then((res) => {
            setId(res?.data?.id)
            setFamilyName(res?.data?.familyName)
            setFirstName(res?.data?.firstName)
            setUserName(res?.data?.userName)
            setEmail(res?.data?.email)
            setPhone(res?.data?.phone)
            // setPassword(res?.data?.password)        
        })
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('familyName', familyName);
        formData.append('email', email);
        formData.append('userName', userName);
        formData.append('phone', phone);
        if(password !== ''){
        formData.append('password', password);
        }
        if (selectedFile) {
          formData.append('picture', selectedFile);
        }
    
        try {
            const response = await axios.put(`${API_URL}/user/${id}`, formData);          
            const data = response.data;
            navigate('/')
            console.log(data);
            alert('Profile updated Successfully');
          } catch (error) {
            console.error('Error:', error);
          }
    }
    return (
        <div className='md:p-4  flex flex-col w-full lg:w-[55%] '>
            <form onSubmit={handleSubmit}>
            <div className='p-4 flex flex-col   border border-[#A87D2E1F]  bg-white  rounded-lg'>
                <div className='flex justify-end items-end'>
                    <p className='text-[16px] md:text-[24px] font-bold'>تعديل المعلومات الشخصية</p>
                </div>
                <div className='mt-[42px] grid grid-cols-2 gap-3'>
                    <div className='flex flex-col items-end  gap-3'>
                        <label className="font-normal text-base" htmlFor="input_1">
                            الاسم الاول
                        </label>
                        <div className="w-full ">
                            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className='border text-right border-custum-pri rounded-md px-3 py-3  w-full' name="input_1" placeholder='الاسم الأول' />
                        </div>
                    </div>
                    <div className='flex flex-col items-end  gap-3'>
                        <label className="font-normal text-base" htmlFor="input_1">
                            اسم العائلة
                        </label>
                        <div className="w-full ">
                            <input type="text" value={familyName} onChange={(e) => setFamilyName(e.target.value)} id="input_1" className='border text-right border-custum-pri rounded-md px-3 py-3  w-full' name="input_1" placeholder='اسم العائلة' />
                        </div>
                    </div>

                </div>

                {/* 2nd email,pass */}
                <div className='mt-[20px] grid grid-cols-2 gap-3'>
                    <div className='flex flex-col items-end  gap-3'>
                        <label className="font-normal text-base">
                            كلمة المرور
                        </label>
                        <div className="w-full relative">
                            <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                <AiOutlineLock />
                            </div>
                            <button className="absolute left-0 top-0 h-full ps-3 text-custum-pri">
                                <AiOutlineEye />
                            </button>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='border text-right border-custum-pri rounded-md px-10 py-3 w-full' name="input_2" placeholder='' />
                        </div>
                    </div>
                    <div className=' flex flex-col items-end  gap-3'>
                        <label className="font-normal text-base">
                            البريد الإلكتروني
                        </label>
                        <div className="w-full">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='border text-right border-custum-pri rounded-md px-3 py-3 w-full' name="input_1" placeholder='username@gmail.com' />
                        </div>
                    </div>
                </div>

                {/* 3rd phone, */}
                <div className='mt-[20px] grid grid-cols-2 gap-3'>
                    <div className='flex flex-col items-end  gap-3'>
                        <label className="font-normal text-base" htmlFor="input_1">
                            رقم الجوال
                        </label>
                        <div className="w-full ">
                            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className='border text-right border-custum-pri rounded-md px-3 py-3  w-full' name="input_1" placeholder='+914566565464' />
                        </div>
                    </div>
                    <div className='flex flex-col items-end  gap-3'>
                        <label className="font-normal text-base" htmlFor="input_1">
                            اسم المستخدم
                        </label>
                        <div className="w-full ">
                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} id="input_1" className='border text-right border-custum-pri rounded-md px-3 py-3  w-full' name="input_1" placeholder=' نسميه هنا' />
                        </div>


                    </div>

                </div>
                {/* upload */}
                <div className='flex flex-col gap-y-3 mt-[20px]' onClick={handleDivClick}>
                    <p className="text-right text-[16px]  ">ارفق صورة</p>
                    <div className="cursor-pointer active:opacity-75 w-full p-3 md:h-36 rounded-md border border-custum-pri border-dashed grid place-items-center" >
                        <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                        <div className="flex flex-col items-center lg:w-1/3">
                            <img src={vector} alt="" />
                            <p className="text-[10px] md:text-[16px] text-center">
                                قم بالسحب والإفلات هنا
                                يتصفح ملفًا لتحميله
                            </p>
                        </div>
                    </div>
                </div>
                {/* map */}
                <div className='flex flex-col justify-end text-right items-end gap-y-3 mt-[20px]' >
                    <p className="text-right text-[16px]  ">  حدد الموقع الخاص بك</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7088400576!2d66.49600118540117!3d25.19298377106345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1697717697691!5m2!1sen!2s" className="w-full rounded-md" allowfullscreen="allowfullscreen" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p className='text-[#777777] text-[12px] md:text-[16px]'>انقر على أيقونة خريطة الموقع وحدد عنوانك المفضل من الخريطة لتعيين موقعك.</p>
                </div>
                {/* button submit */}
                <button type='submit' className='active:bg-opacity-75 mt-[20px] rounded-md text-white bg-[#A87D2E] w-full h-[50px]'>
                    حفظ
                </button>


            </div>
            </form>
        </div>
    )
}
