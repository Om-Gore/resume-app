import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const BackButton = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <button className="back-button" onClick={handleBack}>
            <span className="back-icon">←</span>
            Back
        </button>
    );
};

export default BackButton;
