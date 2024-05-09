import playStore from "../../assets/image 81.png"
import huawei from "../../assets/image 80.png"
import apple from "../../assets/image 79.png"
import logoWhite from "../../assets/logo s2 3.png"
import { useMyContext } from "../../context/MyContext"
import { header } from "../../data"


function Footer() {
    const { language } = useMyContext();
    return (<>
        <div className=" bg-custum-pri font-Almarai   flex flex-col justify-end">
            <div className="flex sm:flex-row flex-col items-center justify-between p-2 md:p-5 md:px-20">
                <div className="lg:w-3/12 sm:w-4/12 sm:order-1 order-2 text-white sm:text-right text-center">
                    <p className="text-[12px] md:text-[16px] text-sm p-6">
                        {language === 'Arabic' ? header?.footerAterm?.heading : header?.footerEterm?.heading}
                    </p>
                    <p className="text-[12px] md:text-[16px] text-md font-bold px-6">
                        {language === 'Arabic' ? header?.footerAterm?.downloadApp : header?.footerEterm?.downloadApp}
                    </p>
                    <div className="md:flex items-center justify-end  gap-3 md:p-6">
                        <button className="bg-white md:m-0 mt-5 mx-1 p-3 rounded-full"><img src={huawei} alt="" /></button>
                        <button className="bg-white md:m-0 mt-5 mx-1 p-3 rounded-full"><img src={apple} alt="" /></button>
                        <button className="bg-white md:m-0 mt-5 mx-1 p-3 rounded-full"><img src={playStore} alt="" /></button>
                    </div>
                </div>
                <div className="lg:w-3/12 w-full sm:w-2/4 sm:order-2 order-1 sm:text-right text-center" >
                    <div className="text-white flex flex-col md:flex-row items-center sm:justify-end justify-center gap-5">
                        <p className="text-[12px] md:text-2xl font-bold">{language === 'Arabic' ? header?.platform?.aterm : header?.platform?.eterm}</p>
                        <img src={logoWhite} alt="" />
                    </div>
                    <p className="text-white text-[12px] md:text-[16px] font-normal">
                        {language === 'Arabic' ? header?.footerAterm?.appDescription : header?.footerEterm?.appDescription}

                    </p>
                </div>
            </div>
            <div className="grid place-items-center	border-t-2 text-white font-normal py-5 " >Design & Developed By ZySoftec</div>

        </div>


    </>);
}

export default Footer;