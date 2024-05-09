import { ErrorMessage, Field, Formik } from "formik";
import { header } from "../../data";
import { useMyContext } from "../../context/MyContext";
import axios from "axios";
import { useState } from "react";
import ThanksModal from "./ThanksModal";

const initialValues = {
  firstName: "",
  familyName: "",
  email: "",
  phone: "",
  message: "",
};
function FormSection() {
  const { language } = useMyContext();
  const [modal, setModal] = useState(false);
  const onSubmit = async (values) => {
    console.log("Form values:", values);
    const res = await axios.post("http://localhost:5000/api/contact", {
      ...values,
    });
    if (res.data?.isSuccessfull) {
      setModal(true);
    }
  };
  return (
    <>
      <div className="bg-custum-back p-8 font-Almarai">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ handleSubmit }) => (
            <form
              onSubmit={handleSubmit}
              className="rounded-md lg:w-2/5 sm:w-4/5 lg:translate-y-40 mx-auto w-full border-2 bg-white"
            >
              <h2 className="text-custum-pri font-bold text-[16px] lg:text-[40px] text-center p-8">
                {language === "Arabic"
                  ? header?.contactUs?.aterm
                  : header?.contactUs?.eterm}

              </h2>
              <div className="grid lg:grid-cols-2 md:grid-cols-2  gap-3  p-3">
                <div className="flex flex-col items-end lg:grid-cols-1 gap-3">
                  <label className="font-normal  text-base" htmlFor="firstName">
                    {language === "Arabic"
                      ? header?.secondName?.aterm
                      : header?.secondName?.eterm}{" "}
                  </label>
                  <Field
                    type="text"
                    id="firstName"
                    className="border  text-right border-custum-pri rounded-md py-3 px-4 w-full"
                    name="firstName"
                    placeholder={
                      language === "Arabic"
                        ? header?.secondNamePlaceholder?.aterm
                        : header?.secondNamePlaceholder?.eterm
                    }
                  />
                  <ErrorMessage name="firstName" component="div" />
                </div>
                <div className="flex flex-col items-end lg:grid-cols-1 gap-3">
                  <label
                    className="font-normal  text-base"
                    htmlFor="familyName"
                  >
                    {language === "Arabic"
                      ? header?.firstName?.aterm
                      : header?.firstName?.eterm}
                  </label>
                  <Field
                    type="text"
                    id="familyName"
                    className="border text-right border-custum-pri rounded-md py-3 px-4 w-full"
                    name="familyName"
                    placeholder={
                      language === "Arabic"
                        ? header?.firstNamePlaceholder?.aterm
                        : header?.firstNamePlaceholder?.eterm
                    }
                  />
                  <ErrorMessage name="familyName" component="div" />
                </div>
                <div className="flex flex-col items-end lg:grid-cols-1 gap-3">
                  <label className="font-normal  text-base" htmlFor="phone">
                    {language === "Arabic"
                      ? header?.mobileNo?.aterm
                      : header?.mobileNo?.eterm}{" "}
                  </label>
                  <Field
                    type="number"
                    id="phone"
                    className="border text-right border-custum-pri rounded-md py-3 px-4 w-full"
                    name="phone"
                    placeholder="+914566565464"
                  />
                  <ErrorMessage name="phone" component="div" />
                </div>
                <div className="flex flex-col items-end lg:grid-cols-1 gap-3">
                  <label className="font-normal  text-base" htmlFor="email">
                    {language === "Arabic"
                      ? header?.email?.aterm
                      : header?.email?.eterm}{" "}
                  </label>
                  <Field
                    type="email"
                    className="border text-right border-custum-pri rounded-md py-3 px-4 w-full"
                    name="email"
                    placeholder="User78@email.com"
                  />
                  <ErrorMessage name="email" component="div" />
                </div>
              </div>
              <div className="p-3">
                <div className="flex flex-col items-end lg:grid-cols-1  gap-3">
                  <label className="font-normal text-base" htmlFor="message">
                    {language === "Arabic"
                      ? header?.message?.aterm
                      : header?.message?.eterm}
                  </label>
                  <Field
                    component="textarea"
                    id="message"
                    className="border text-right border-custum-pri h-32 rounded-md py-3 px-4 w-full"
                    name="message"
                    placeholder={
                      language === "Arabic"
                        ? header?.messagePlaceholder?.aterm
                        : header?.messagePlaceholder?.eterm
                    }
                  />
                  <ErrorMessage name="message" component="div" />
                </div>
                {modal && 
                <div>
                <span className="mt-5">
                  {
                      language === "Arabic"
                        ? header?.formSubmission?.aterm
                        : header?.formSubmission?.eterm
                    }
                </span>
                <button
                  className="bg-custum-pri w-[50px] rounded-md text-white font-bold ml-4 p-3 mt-4"
                  onClick={() => setModal(false)}
                >
                  {language === "Arabic" ? header?.okText.aterm : header.okText.eterm}
                </button>
                </div>
                }
                <button
                  type="submit"
                  className="bg-custum-pri w-full rounded-md text-white font-bold p-3 mt-4"
                >
                  {language === "Arabic" ? header?.sendButton?.aterm : header?.sendButton?.eterm}
                </button>
              </div>
            </form>
          )}
        </Formik>
        {/* {modal && <ThanksModal modal={modal} setModal={setModal} />} */}
      </div>
    </>
  );
}

export default FormSection;
