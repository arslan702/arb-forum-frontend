const ThanksModal = ({ modal, setModal }) => {
  return (
    <>
      {modal && (
        <div className="modal z-50">
          <div onClick={() => setModal(false)} className="overlay"></div>
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlnx="http://www.w.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg mt-2 leading-6 font-medium text-gray-900">
                Your response has been successfully submitted
              </h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  We will get in touch soon
                </p>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  type="submit"
                  className="bg-custum-pri w-full rounded-md text-white font-bold p-3 mt-4"
                  onClick={() => setModal(false)}
                >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThanksModal;
