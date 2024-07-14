import React, { useState } from 'react'
import profilePhoto from '../assets/profile-photo.png'

const ProfilePageHeader = () => {
    const [name, setName] = useState("Debasish Panda");
    const [profession, setProfession] = useState("SDE");
    return (
        <>
            <div>
                <div className='h-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex'>
                    <img className='w-80 h-80 mt-40 rounded-full shadow-[0_20px_40px_5px_rgba(0,0,0,0.3)]' src={profilePhoto} alt="#profile-photo" />
                    <div className='flex items-end'>
                        <p className='text-white px-5 font-bold text-6xl'>{name}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePageHeader;