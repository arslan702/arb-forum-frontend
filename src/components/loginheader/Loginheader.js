import React, { useState } from 'react'
import { ImCross } from "react-icons/im"
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useMyContext } from '../../context/MyContext';
import { header } from '../../data';
import Siderbar from '../item/Siderbar';
export default function Loginheader() {
    const { language, setLanguage } = useMyContext();

    const [isMenuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (
        <>
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        onClick={closeMenu}

                        className="= bg-black/90 z-[200] lg:hidden text-black w-full absolute top-0   rounded-md  p-3 shadow-lg  text-bold text-[12px]  uppercase  flex flex-col"
                    >
                        <div className="flex flex-col justify-center items-center gap-y-4">
                            <div onClick={closeMenu} className="flex justify-end items-end  w-full">
                                <ImCross className="text-white" />
                            </div>
                            <div className="flex text-custum-pri flex-col justify-center items-center gap-y-4">

                                <div className='w-full justify-center items-center hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-[#777777] flex gap-x-3'>
                                    <p className='text-[14px]'> لوحة المعلومات</p>
                                </div>
                                {/* 2nd */}
                                <div className='w-full justify-center items-center hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-[#777777] flex gap-x-3'>
                                    <p className='text-[14px]'>خدمات</p>
                                </div>
                                {/* 3rd */}
                                <div className='w-full justify-center items-center hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-[#777777] flex gap-x-3'>
                                    <p className='text-[14px]'>العرض أو الطلب</p>
                                </div>
                                {/* 4th */}
                                <div className='w-full justify-center items-center hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-[#777777] flex gap-x-3'>
                                    <p className='text-[14px]'>طلب الخدمة</p>
                                </div>
                                {/* 5th */}
                                <div className='w-full justify-center items-center hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-[#777777] flex gap-x-3'>
                                    <p className='text-[14px]'> تعديل العرض أو الطلب</p>
                                </div>
                                {/* 6th */}
                                <div className='w-full justify-center items-center hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-[#777777] flex gap-x-3'>
                                    <p className='text-[14px]'>طلب الرد</p>
                                </div>
                                {/* 7th */}
                                <div className='w-full justify-center items-center hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-[#777777] flex gap-x-3'>
                                    <p className='text-[14px]'> المعاملات</p>
                                </div>
                                {/* 8th */}
                                <div className='w-full justify-center items-center hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-[#777777] flex gap-x-3'>
                                    <p className='text-[14px]'> محادثة</p>
                                </div>
                                {/* last user */}
                                <div className='w-full bg-[#A87D2E] justify-center items-center hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-white flex gap-x-3'>
                                    <p className='text-[14px]'> تعديل الملف الشخصي</p>
                                    <img src="/userside.svg" alt="" />
                                </div>



                            </div>


                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className='  bg-[#FFFFFF] border border-b flex justify-between font-Almarai'>
                {/* left */}
                <div className='md:ml-[20px] flex gap-x-2 md:gap-x-5'>
                    <div className='p-3 flex justify-center items-end flex-col text-right'>
                        <p className='text-[#000000BF] text-[12px] lg:text-[16px]'>جيمس ويليامز</p>
                        <p className='text-[#00000061] text-[10px] lg:text-[13px]'>مستخدم</p>

                    </div>
                    {/* icons */}
                    <div className='p-3 flex justify-center items-center gap-x-2 md:gap-x-4'>
                        <img src="/user.svg" alt="" className='cursor-pointer h-[20px] w-[20px] md:h-[40px] md:w-[40px] rounded-full' />
                        <img src="/bell.svg" alt="" className='cursor-pointer h-[20px] w-[20px] md:h-auto md:w-auto' />
                        <img src="/noti.svg" alt="" className='cursor-pointer h-[20px] w-[20px] md:h-auto md:w-auto' />
                    </div>

                </div>

                {/* right */}
                <div className=' flex  gap-x-8'>
                    <div className='hidden p-3 md:flex justify-center items-center text-[18px] lg:text-[24px] font-bold'>
                        <p className='cursor-pointer'>تعديل الملف الشخصي</p>
                    </div>

                    <div className='p-3 lg:w-[243px]   border-l flex justify-center items-center gap-x-5'>
                        <p className='hidden md:flex text-[16px] lg:text-[20px] font-bold text-[#A87D2E]'>منصة الجار للجار</p>
                        <img onClick={toggleMenu} src="logoha.svg" alt="" className='cursor-pointer h-[48px] w-[48px]' />
                    </div>

                </div>

            </div>
        </>
    )
}
