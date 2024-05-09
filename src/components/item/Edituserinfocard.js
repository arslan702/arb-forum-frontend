import React from 'react'

export default function Edituserinfocard() {
    return (
        <div className='hidden p-4  lg:flex flex-col w-[30%] '>
            <div className='flex flex-col justify-center items-center  p-4 pt-[30px]  bg-[#A87D2E]  rounded-lg'>
                <div>
                    <img src="/usercard.svg" alt="" className='h-[132px] w-[132px]' />
                </div>
                <div className='mt-4 flex flex-col gap-y-3 justify-center items-center text-white'>
                    <p className='text-[24px] font-bold'>مرح محمد</p>
                    <p className='text-[16px]'>marah@gamil.com</p>
                </div>

                {/* btn logout */}
                <button className='active:opacity-70 bg-white text-[#A87D2E] w-[267px] h-[50px] rounded-md mt-8'>
                    Log Out
                </button>
            </div>

        </div>
    )
}
