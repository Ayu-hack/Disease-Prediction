import React, { useState } from 'react';
import { Malaria, Pneumonia, Diabetes } from './Diseases';
import { useParams } from 'react-router-dom';
import './Predict.css';
import { Header, Footer } from "../../../import.manage";
import data from './../../../dieases.json';

function Predict() {
    const { id } = useParams();
    const [formData, setFormData] = useState({});

    const handleFormDataChange = (newData) => {
        setFormData(newData);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5172/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            console.log('Form Data :', formData);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log('Response from backend:', data);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <section className='main'>
            <Header />
            <div className="cards">
                <Disease id={id} onFormDataChange={handleFormDataChange} handleSubmit={handleSubmit} />
            </div>
            <Footer />
        </section>
    );
}

function Disease({ id, onFormDataChange, handleSubmit }) {
    let diseaseData = data.find(disease => disease.name === id);

    const handleDataChange = (newData) => {
        onFormDataChange(newData);
    };

    return (
        <>
            <div>
                <h1 className="heading">{id.toUpperCase()}</h1>
                <p className='description'>
                    {diseaseData.description}<br />
                    <b>Symptoms</b>: {diseaseData.symptoms}
                </p>
            </div>

            <section className='disease'>
                <form onSubmit={handleSubmit} className='formData'>
                    {id === 'Diabetes' && <Diabetes onDataChange={handleDataChange} />}
                    {id === 'Malaria' && <Malaria onDataChange={handleDataChange} />}
                    {id === 'Pneumonia' && <Pneumonia onDataChange={handleDataChange} />}
                    <button type="submit">Submit</button>
                </form>
            </section>
        </>
    );
}

export default Predict;
