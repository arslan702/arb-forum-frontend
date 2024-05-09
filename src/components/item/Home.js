import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import bgImage from "../../assets/Rectangle 9777.png"
import { header } from "../../data";
import { useMyContext } from "../../context/MyContext";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useRef } from "react";




function Home() {
    // for arrows

    const swiperRef = useRef();
    const { language } = useMyContext();
    return (
        <>
            <Swiper
                grabCursor={true}
                initialSlide={0}
                className="mySwiper"
                slidesPerView={1}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                <SwiperSlide>
                    <div className=' font-Almarai  relative w-100 overflow-hidden'>
                        <img className="w-[100%] h-[30vh] lg:h-auto mx-auto " src={bgImage} alt="background" />
                        <div className='  absolute   top-0 left-0  h-full w-full flex items-center justify-evenly'>

                            <div
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="sm:px-5 px-2 "><button className='bg-custum-sec rounded-md sm:p-2 p-1 text-white sm:text-xl tex-xs '><IoIosArrowBack /></button></div>
                            <div className="  w-11/12 flex flex-col items-end justify-between " >
                                <h1 className=' text-[12px] md:text-[20px] lg:text-[40px]  sm:text-2xl  xl:w-1/2 md:w-4/5 text-right xl:leading-normal md:leading-normal  font-bold text-white'>
                                    <span className='text-custum-sec font-bold' >
                                        {language === 'Arabic' ? header?.homeh1?.aterm : header?.homeh1?.eterm}</span> &nbsp;
                                    {language === 'Arabic' ? header?.homeh2?.aterm : header?.homeh2?.eterm}
                                </h1>
                                <p className=' text-[9px] lg:text-[16px] lg:w-2/5    w-full text-white md:text-base  text-right xl:p-10 p-1 border rounded-md sm:leading-9 xl:text-lg  text-xs	 font-bold lg:mt-10 sm:mt-5 mt-3 '>
                                    {language === 'Arabic' ? header?.homep?.aterm : header?.homep?.eterm}</p>
                                {/* <p className='lg:w-2/5 w-2/5 sm:hidden block text-white md:text-base sm:text-sm text-right xl:p-10 p-1 border rounded-md sm:leading-9 xl:text-lg  text-xs	 font-bold lg:mt-10 sm:mt-5 mt-3 '>
                            {language === 'Arabic' ? header?.homep2?.aterm : header?.homep2?.eterm}
                        </p> */}
                                <div className='w-full xl:text-2xl lg:text-xl md:text-base	text-xs text-custum-sec font-bold text-left  lg:w-2/5 lg:mt-6 mt-2' >{language === 'Arabic' ? header?.homeButton?.aterm : header?.homeButton?.eterm}</div>
                            </div>
                            <div
                                onClick={() => swiperRef.current?.slideNext()}
                                className='sm:px-5 px-2'><button className='bg-custum-sec rounded-md sm:p-2 p-1 text-white sm:text-xl tex-xs'><IoIosArrowForward /></button></div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 2nd */}
                <SwiperSlide>
                    <div className=' font-Almarai  relative w-100 overflow-hidden'>
                        <img className="w-[100%] h-[30vh] lg:h-auto mx-auto " src={bgImage} alt="background" />
                        <div className='  absolute   top-0 left-0  h-full w-full flex items-center justify-evenly'>

                            <div
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="sm:px-5 px-2 "><button className='bg-custum-sec rounded-md sm:p-2 p-1 text-white sm:text-xl tex-xs '><IoIosArrowBack /></button></div>
                            <div className="  w-11/12 flex flex-col items-end justify-between " >
                                <h1 className=' text-[12px] md:text-[20px] lg:text-[40px]  sm:text-2xl  xl:w-1/2 md:w-4/5 text-right xl:leading-normal md:leading-normal  font-bold text-white'>
                                    <span className='text-custum-sec font-bold' >
                                        {language === 'Arabic' ? header?.homeh1?.aterm : header?.homeh1?.eterm}</span> &nbsp;
                                    {language === 'Arabic' ? header?.homeh2?.aterm : header?.homeh2?.eterm}
                                </h1>
                                <p className=' text-[9px] lg:text-[16px] lg:w-2/5    w-full text-white md:text-base  text-right xl:p-10 p-1 border rounded-md sm:leading-9 xl:text-lg  text-xs	 font-bold lg:mt-10 sm:mt-5 mt-3 '>
                                    {language === 'Arabic' ? header?.homep?.aterm : header?.homep?.eterm}</p>
                                {/* <p className='lg:w-2/5 w-2/5 sm:hidden block text-white md:text-base sm:text-sm text-right xl:p-10 p-1 border rounded-md sm:leading-9 xl:text-lg  text-xs	 font-bold lg:mt-10 sm:mt-5 mt-3 '>
                            {language === 'Arabic' ? header?.homep2?.aterm : header?.homep2?.eterm}
                        </p> */}
                                <div className='w-full xl:text-2xl lg:text-xl md:text-base	text-xs text-custum-sec font-bold text-left  lg:w-2/5 lg:mt-6 mt-2' >{language === 'Arabic' ? header?.homeButton?.aterm : header?.homeButton?.eterm}</div>
                            </div>
                            <div
                                onClick={() => swiperRef.current?.slideNext()}
                                className='sm:px-5 px-2'><button className='bg-custum-sec rounded-md sm:p-2 p-1 text-white sm:text-xl tex-xs'><IoIosArrowForward /></button></div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>

        </>
    );
}

export default Home;