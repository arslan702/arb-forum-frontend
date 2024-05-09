import img from "../../assets/Group 20389.png"
import logo from "../../assets/logo s2 1.png"
import { FaRegUser } from "react-icons/fa"
import { AiOutlineLock, AiOutlineEye } from "react-icons/ai"
function Verify() {
    return (
        <>
            <div className="flex lg:flex-row items-center flex-col">
                <div className="grid place-items-center lg:w-1/2 w-full lg:order1 lg:p-0 p-2 md:p-5 order-2">
                    <div className="border border-white xl:w-3/4 w-5/6">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                            <p className="text-custum-pri text-[14px] md:text-[20px] font-bold">منصة الجار للجار</p>
                            <img src={logo} />
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 w-3/4  mx-auto">
                            <h2 className="text-custum-pri text-[13px] md:text-[24px] font-extrabold">إعادة تعيين كلمة المرور </h2>

                        </div>
                        <div className="mt-6">
                            <div className='flex flex-col items-end  gap-3'>
                                <label className="font-normal text-base" htmlFor="input_1">
                                    البريد الالكتروني
                                </label>
                                <div className="w-full relative">
                                    <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                        <FaRegUser />
                                    </div>
                                    <button className="hidden md:inline absolute top-1.5 left-3 bg-custum-pri text-white font-bold rounded-md text-sm px-4 py-2">
                                        أرسل رمز التحقق
                                    </button>

                                    <input type="email" id="input_1" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_1" placeholder='otfrtda@gmail.com' />
                                </div>
                                <button className=" md:hidden bg-custum-pri text-white font-bold rounded-md text-sm px-4 py-2">
                                    أرسل رمز التحقق
                                </button>

                            </div>
                            <div className="grid sm:grid-cols-2 md:gap-0 gap-4 mt-4">
                                <div className='flex flex-col items-end  gap-3'>
                                    <label className="font-normal text-base" htmlFor="input_2">
                                        كلمة المرور
                                    </label>
                                    <div className="w-full relative">
                                        <div className="absolute right-0 top-4 h-full w-8 text-custum-pri">
                                            <AiOutlineLock />
                                        </div>
                                        <button className="absolute left-0 top-0 h-full ps-3 text-custum-pri">
                                            <AiOutlineEye />
                                        </button>
                                        <input type="password" id="input_2" className='border text-right border-custum-pri rounded-md px-10 py-3  w-full' name="input_2" placeholder='' />
                                    </div>

                                </div>
                                <div className=" md:px-3 sm:mt-0 mt-3 flex gap-3 flex-col justify-between">
                                    <p className="text-right">رمز التفعيل المرسل عبر البريد الالكتروني</p>
                                    <div className="flex justify-between items-center">
                                        <input type="" className=" rounded-md w-10 md:w-14 h-10 md:h-12 border text-center border-custum-pri" maxLength="1" minLength="1" placeholder="1" />
                                        <input type="" className=" rounded-md w-10 md:w-14 h-10 md:h-12 border text-center border-custum-pri" maxLength="1" minLength="1" placeholder="1" />
                                        <input type="" className=" rounded-md w-10 md:w-14 h-10 md:h-12 border text-center border-custum-pri" maxLength="1" minLength="1" placeholder="1" />
                                        <input type="" className=" rounded-md w-10 md:w-14 h-10 md:h-12 border text-center border-custum-pri" maxLength="1" minLength="1" placeholder="1" />
                                    </div>
                                </div>
                            </div>


                            <button className="bg-custum-pri text-white w-full p-4 rounded-md mt-4">
                                أرسل رمز التحقق
                            </button>
                        </div>

                    </div>
                </div>
                <div className="grid place-items-center lg:order-2 w-full order-1 lg:w-1/2 bg-custum-back  lg:p-20 sm:p-10">
                    <img src={img} />
                </div>
            </div>

        </>
    );
}

export default Verify;