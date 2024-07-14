import React, { useState } from 'react'
import profilePhoto from '../assets/profile-photo.png'

const ProfilePageHeader = () => {
    const [name, setName] = useState("Debasish Panda");
    return (
        <>
            <div>
                <div className='h-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex max-sm:flex-col max-sm:items-center max-sm:justify-evenly '>
                    <img className='w-80 h-80 mt-40 rounded-full shadow-[0_20px_40px_5px_rgba(0,0,0,0.3)] max-sm:w-40 max-sm:h-40 max-sm:mt-0' src={profilePhoto} alt="#profile-photo" />
                    <div className='flex items-end'>
                        <p className='text-white px-5 font-bold text-6xl max-sm:text-center'>{name}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePageHeader;