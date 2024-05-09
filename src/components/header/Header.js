
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo s2 1.png";
import { PiList } from "react-icons/pi"
import { useMyContext } from "../../context/MyContext";
import { header } from "../../data";
import { useState } from "react";
import { ImCross } from "react-icons/im"
import { motion, AnimatePresence } from 'framer-motion';
function Headeer() {
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
                <NavLink to={"/login"}>

                  {language === 'Arabic' ? header?.loginButton?.aterm : header?.loginButton?.eterm}
                </NavLink>

                <NavLink to={"/"}>

                  {language === 'Arabic' ? header?.contactUs?.aterm : header?.contactUs?.eterm}
                </NavLink>
                <NavLink to={"/list"}>

                  {language === 'Arabic' ? header?.aboutUs?.aterm : header?.aboutUs?.eterm}
                </NavLink>
                <button className="rounded-md bg-custum-pri text-white py-3 px-5 font-bold " onClick={() => setLanguage(language === 'Arabic' ? 'English' : 'Arabic')}>
                  {language === 'Arabic' ? 'إنجليزي' : 'Arabic'}
                </button>

              </div>


            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative  font-Almarai text-[14px] lg:text-[20px] h-20 md:px-20 px-3    lg:flex hidden  items-center justify-between  overflow-hidden" >

        <div>
          <button className="rounded-md bg-custum-pri text-white py-3 px-5 font-bold	">
            <NavLink to={"/login"}>

              {language === 'Arabic' ? header?.loginButton?.aterm : header?.loginButton?.eterm}
            </NavLink>
          </button>
          <button className="rounded-md bg-custum-pri text-white py-3 px-5 font-bold ml-5" onClick={() => setLanguage(language === 'Arabic' ? 'English' : 'Arabic')}>
            {language === 'Arabic' ? 'إنجليزي' : 'Arabic'}
          </button>
        </div>
        <div className="   flex gap-x-[120px] lg:justify-between justify-end" >
          <ul className=" flex items-center  gap-x-8 " >
            <li className="	">
              <NavLink to={"/"}>

                {language === 'Arabic' ? header?.contactUs?.aterm : header?.contactUs?.eterm}
              </NavLink>

            </li>
            <li className='	'>
              <NavLink to={"/list"}>

                {language === 'Arabic' ? header?.aboutUs?.aterm : header?.aboutUs?.eterm}
              </NavLink>

            </li>
          </ul>
          {/* end */}
          <div className=' flex gap-x-8  items-center  '>
            <div className='cursor-pointer  text-custum-pri text-[24px] font-bold	' >{language === 'Arabic' ? header?.platform?.aterm : header?.platform?.eterm}</div>
            <div className="logo flex justify-end">

              <NavLink to={"/"}>   <img className="w-fit my-auto" src="/logoha.svg" alt="" /></NavLink>
            </div>
          </div>
        </div>
      </div >
      <div className=" h-20 md:px-20 px-3 lg:hidden flex items-center justify-between" >
        <button onClick={toggleMenu} className="rounded-md bg-custum-pri text-white p-3  font-bold	"><PiList /></button>
        <div className="logo flex justify-end">
          <NavLink to={"/"}>  <img className="w-fit my-auto" src={logo} alt="" /> </NavLink>
        </div>
      </div >
    </>
  );
}

export default Headeer;