import React, { useState } from 'react';
import bmi from '../assets/BMI.png';

export const BMI = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [bmiValue, setBmiValue] = useState();
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'height') {
            setHeight(e.target.value);
        } else if (e.target.name === 'weight') {
            setWeight(e.target.value);
        }
    };

    const handleClear = () => {
        setHeight(0);
        setWeight(0);
        setBmiValue(0);
        setStatus('');
    };

    const calculateBMI = () => {
        const hei = height / 100;
        const bmiValue = (weight / (hei * hei)).toFixed(2);
        let status_;
        if (bmiValue < 18.5) {
            status_ = 'Underweight';
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            status_ = 'Normal weight';
        } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
            status_ = 'Overweight';
        } else {
            status_ = 'Obese';
        }
        setBmiValue(bmiValue);
        setStatus(status_);
    };

    return (
        <div className="box-container">
            <div className="box">
                <img src={bmi} alt="BMI" width={400} />
            </div>
            <div className="data"><br />
                <h1 style={{ textAlign: "center" }}>BMI CALCULATOR</h1>
                <div className="input-container">
                    <label htmlFor="height">Height : (cm)</label>
                    <input type="text" name="height" id="height" placeholder='Enter the Height' value={height} onChange={handleChange} />
                </div>
                <div className="input-container">
                    <label htmlFor="weight">Weight : (kg)</label>
                    <input type="text" name="weight" id="weight" placeholder='Enter the Weight' value={weight} onChange={handleChange} />
                </div>
                <div className="button">
                    <button className='cal-btn' onClick={calculateBMI}>Calculate BMI</button>
                    <button className='clear-btn' onClick={handleClear}>Clear</button>
                </div>
                {bmiValue && status &&<div className="result">
                    <p>Your BMI : {bmiValue}</p>
                    <p>Your Status : {status}</p>
                </div>}
            </div>
        </div>
    );
};
