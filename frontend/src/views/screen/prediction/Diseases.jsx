import React, { useState, useEffect } from 'react';

// Diseases form Section --->
// #1 Malaria
const Malaria = ({ onDataChange }) => {
    const [Image, setImage] = useState(null);

    useEffect(() => {
        onDataChange({ Image });
    }, [Image]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <div className='disease-input-box'>
            <h4>Please upload the cell image</h4>
            <input className="image-input" name="image" type="file" accept="image/*" onChange={handleImageChange} />  
            {Image && <img src={URL.createObjectURL(Image)} className="image-preview" alt="Cell Image" />}
        </div>
    );
}

// #2 Pneumonia
const Pneumonia = ({ onDataChange }) => {
    const [Image, setImage] = useState(null);

    useEffect(() => {
        onDataChange({ Image });
    }, [Image]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    return (
        <div className='disease-input-box'>
            <h4>Please upload the X-Ray of Person</h4>
            <input className="image-input" type="file" accept="image/*" onChange={handleImageChange} />  
            {Image && <img src={URL.createObjectURL(Image)} className="image-preview" alt="X-Ray" />}
        </div>
    );
}

// #3 Diabetes
const Diabetes = ({ onDataChange }) => {
    const [formData, setFormData] = useState({
        gender: "",
        age: "",
        BMI: "",
        insulin: "",
        skinThickness: "",
        bloodPressure: "",
        glucose: "",
        diabetesPedigree: "",
        pregnancy: "",
        familyHistory: [
            { relation: "Father", hasDiabetes: false, ageOfDiagnosis: "" },
            { relation: "Mother", hasDiabetes: false, ageOfDiagnosis: "" },
            { relation: "Sibling", hasDiabetes: false, ageOfDiagnosis: "" },
        ]
    });

    useEffect(() => {
        onDataChange(formData);
    }, [formData]);

    const [useManualInput, setUseManualInput] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith("familyHistory-")) {
            const [field, index] = name.split("-").slice(1);
            const updatedFamilyHistory = formData.familyHistory.map((relative, i) => (
                i === parseInt(index) ? { ...relative, [field]: field === "hasDiabetes" ? value === "true" : value } : relative
            ));
            setFormData({
                ...formData,
                familyHistory: updatedFamilyHistory
            }, calculateDiabetesPedigree(updatedFamilyHistory));
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const calculateDiabetesPedigree = (familyHistory) => {
        let pedigreeValue = 0;
        familyHistory.forEach(relative => {
            if (relative.hasDiabetes && relative.ageOfDiagnosis) {
                const age = parseInt(relative.ageOfDiagnosis);
                if (age < 50) {
                    pedigreeValue += 0.5;
                } else {
                    pedigreeValue += 0.2;
                }
            }
        });
        setFormData((prevFormData) => ({
            ...prevFormData,
            diabetesPedigree: pedigreeValue.toFixed(2)
        }));
    };

    const toggleManualInput = () => {
        setUseManualInput(!useManualInput);
    };

    return (
        <div className="disease-input-box">
            <select name="gender" id="gender" onChange={handleInputChange} value={formData.gender} >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Prefer not to Say">Others</option>
            </select>
            {Object.keys(formData).map((key) => {
                if (key === "gender" || key === "familyHistory" || key === "diabetesPedigree") return null; // Skip the gender select input and familyHistory
                return (
                    <input
                        key={key}
                        type="text"
                        placeholder={key.toUpperCase().replace(/_/g, " ")}
                        name={key}
                        value={formData[key]}
                        required
                        onChange={handleInputChange}
                    />
                );
            })}

            <div className='diabetesPedigree'>
                <input
                    type="checkbox"
                    name="useManualInput"
                    id="useManualInput"
                    checked={useManualInput}
                    onChange={toggleManualInput}
                /> Have a Diabetes Pedigree Function?<br />
                {useManualInput ? (
                    <input
                        type="text"
                        placeholder="DIABETES PEDIGREE FUNCTION"
                        name="diabetesPedigree"
                        value={formData.diabetesPedigree}
                        required
                        onChange={handleInputChange}
                    />
                ) : (
                    <div>
                        {formData.familyHistory.map((relative, index) => (
                            <div key={index}>
                                <h3>{relative.relation}</h3>
                                <label>
                                    Has Diabetes:
                                    <select
                                        name={`familyHistory-hasDiabetes-${index}`}
                                        onChange={handleInputChange}
                                        value={relative.hasDiabetes}
                                    >
                                        <option value={false}>No</option>
                                        <option value={true}>Yes</option>
                                    </select>
                                </label>
                                {relative.hasDiabetes && (
                                    <input
                                        type="text"
                                        placeholder="Age of Diagnosis"
                                        name={`familyHistory-ageOfDiagnosis-${index}`}
                                        value={relative.ageOfDiagnosis}
                                        required
                                        onChange={handleInputChange}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export { Malaria, Pneumonia, Diabetes };
