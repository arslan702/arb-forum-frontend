import { useMyContext } from "../../context/MyContext";
import { header } from "../../data";


function Rules() {
    const { language } = useMyContext();
    return (<>
        <div className="bg-custum-back">

            <div className="h-32 bg-custum-pri font-bold text-white grid place-items-center ">
            {language === 'Arabic' ? header?.terms?.aterm : header?.terms?.eterm}
            </div>
            <div className="sm:p-20 p-10">
                <ol className="text-right sm:text-lg text-xs  font-normal">
                    <div className="relative p-1"> <span className="absolute top-4 rounded-md bg-custum-pri text-white font-bold p-2 ">01</span><li className="py-3 pe-6">{language === 'Arabic' ? header?.termOne?.aterm : header?.termOne?.eterm}</li></div>
                    <div className="relative p-1">
                        <span className="absolute top-4 rounded-md bg-custum-pri text-white font-bold p-2 ">02</span>
                        <li className="py-3 pe-6">{language === 'Arabic' ? header?.termTwo?.aterm : header?.termTwo?.eterm}</li>
                    </div>
                    <div className="relative p-1">
                        <span className="absolute top-4 rounded-md bg-custum-pri text-white font-bold p-2 ">03</span>
                        <li className="py-3 pe-6">{language === 'Arabic' ? header?.termThree?.aterm : header?.termThree?.eterm}</li>
                    </div>
                    <div className="relative p-1">
                        <span className="absolute top-4 rounded-md bg-custum-pri text-white font-bold p-2 ">04</span>
                        <li className="py-3 pe-6">{language === 'Arabic' ? header?.termFour?.aterm : header?.termFour?.eterm}</li>
                    </div>
                    <div className="relative p-1">
                        <span className="absolute top-4 rounded-md bg-custum-pri text-white font-bold p-2 ">05</span>
                        <li className="py-3 pe-6">{language === 'Arabic' ? header?.termFive?.aterm : header?.termFive?.eterm}</li>
                    </div>
                    <div className="relative p-1">
                        <span className="absolute top-4 rounded-md bg-custum-pri text-white font-bold p-2 ">06</span>
                        <li className="py-3 pe-6">{language === 'Arabic' ? header?.termSix?.aterm : header?.termSix?.eterm}</li>
                    </div>
                    <div className="relative p-1">
                        <span className="absolute top-4 rounded-md bg-custum-pri text-white font-bold p-2 ">07</span>
                        <li className="py-3 pe-6">{language === 'Arabic' ? header?.termSeven?.aterm : header?.termSeven?.eterm}</li>
                    </div>
                    <div className="relative p-1">
                        <span className="absolute top-4 rounded-md bg-custum-pri text-white font-bold p-2 ">08</span>
                        <li className="py-3 pe-6">{language === 'Arabic' ? header?.termEight?.aterm : header?.termEight?.eterm}</li>
                    </div>
                </ol>
            </div>
        </div>
    </>);
}

export default Rules;