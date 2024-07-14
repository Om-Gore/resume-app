import React, { useState } from 'react'
import DefaultLayout from '../../Layouts/DefaultLayout'

export const CandidateProfilePage = () => {
    const [name, setName] = useState("Debasish Panda");
    const [profession, setProfession] = useState("SDE");
    return (
        <>
            <DefaultLayout>

            </DefaultLayout>
        </>
    )
}
