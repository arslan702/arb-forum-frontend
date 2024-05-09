import React from 'react'
import Editform from './Editform'
import Edituserinfocard from './Edituserinfocard'
import Siderbar from './Siderbar'

export default function Editbody() {
    return (
        <div className='bg-[#FDFAF4] flex justify-between '>
            <Editform />
            <Edituserinfocard />
            <Siderbar />

        </div>
    )
}
