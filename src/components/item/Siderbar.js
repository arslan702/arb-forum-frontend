import React from 'react'

export default function Siderbar() {
    return (
        <div className='hidden p-4 lg:flex gap-y-3 font-Almarai flex-col  items-end bg-white w-[243px]'>
            <div className='w-full justify-end hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-[#777777] flex gap-x-3'>
                <p className='text-[14px]'> لوحة المعلومات</p>
                <img src="/dash.svg" alt="" />
            </div>
            {/* 2nd */}
            <div className='w-full justify-end hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-[#777777] flex gap-x-3'>
                <p className='text-[14px]'>خدمات</p>
                <img src="/cus.svg" alt="" />
            </div>
            {/* 3rd */}
            <div className='w-full justify-end hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-[#777777] flex gap-x-3'>
                <p className='text-[14px]'>العرض أو الطلب</p>
                <img src="/discount.svg" alt="" />
            </div>
            {/* 4th */}
            <div className='w-full justify-end hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-[#777777] flex gap-x-3'>
                <p className='text-[14px]'>طلب الخدمة</p>
                <img src="/request.svg" alt="" />
            </div>
            {/* 5th */}
            <div className='w-full justify-end hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-[#777777] flex gap-x-3'>
                <p className='text-[14px]'> تعديل العرض أو الطلب</p>
                <img src="/editing.svg" alt="" />
            </div>
            {/* 6th */}
            <div className='w-full justify-end hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-[#777777] flex gap-x-3'>
                <p className='text-[14px]'>طلب الرد</p>
                <img src="/reply.svg" alt="" />
            </div>
            {/* 7th */}
            <div className='w-full justify-end hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-[#777777] flex gap-x-3'>
                <p className='text-[14px]'> المعاملات</p>
                <img src="/currency.svg" alt="" />
            </div>
            {/* 8th */}
            <div className='w-full justify-end hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-[#777777] flex gap-x-3'>
                <p className='text-[14px]'> محادثة</p>
                <img src="/comment.svg" alt="" />
            </div>
            {/* last user */}
            <div className='w-full bg-[#A87D2E] justify-end hover:bg-[#777777]/30 p-2 rounded-md cursor-pointer  text-white flex gap-x-3'>
                <p className='text-[14px]'> تعديل الملف الشخصي</p>
                <img src="/userside.svg" alt="" />
            </div>

        </div>
    )
}
