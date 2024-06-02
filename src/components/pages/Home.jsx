import React from "react";
import { NavBar } from "../component/NavBar";
import { Footer } from "../component/Footer";




const Home = () => {
  return (
    <>
      <style>{
      `
      .home-container {
        font-family: Arial, sans-serif;
        padding: 20px;
        text-align: center;
      }
      
      .hero-section {
        background: #f8f9fa;
        padding: 70px 20px;
        margin-bottom: 20px;
      }
      
      h1,h2,h3,h4,h5,h6 {
        font-family: "Kanit", sans-serif;
        font-weight: 400;
        font-style: normal;
      }
      .disease-section {
        margin: 40px 0;
      }
      .disease-section h2 {
        font-size: 2em;
        margin-bottom: 20px;
      }
      .disease {
        display: flex;
        justify-content: left;
        gap: 20px;
      }
      .disease h3{
        font-size: 1em;
        margin-bottom: 10px;

      }
      .disease p{
        color: #666666;
      }
      .hero-section h1 {
        font-size: 2.3em;
        margin-bottom: 10px;
        }
      
      .hero-section p {
        font-size: 1em;
        margin-bottom: 20px;
        color : #666666;
      }
      
      .hero-section button {
        background-color: #007bff;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      
      .hero-section button:hover {
        background-color: #0056b3;
      }
      
      .features-section {
        margin: 40px 0;
      }
      
      .features-section h2 {
        font-size: 2em;
        margin-bottom: 20px;
      }
      
      .features {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      
      .feature {
        background: #ffffff;
        border: 1px solid #dddddd;
        padding: 20px;
        margin: 10px;
        border-radius: 5px;
        width: 30%;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      }
      
      .feature h3 {

        font-size: 1.5em;
        margin-bottom: 10px;
      }
      
      .feature p {
        font-size: 1em;
        color: #666666;
      }
      
      .cta-section {
        background: #f8f9fa;
        padding: 50px 20px;
        margin-top: 20px;
      }
      
      .cta-section h2 {
        font-size: 2em;
        margin-bottom: 10px;
      }
      
      .cta-section p {
        font-size: 1.2em;
        margin-bottom: 20px;
        color: #666666;
      }
      
      .cta-section button {
        background-color: #28a745;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      
      .cta-section button:hover {
        background-color: #218838;
      }
      

      table {
        width: 100%;
        border-collapse: collapse;
      }
      
      th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
      }
      
      th {
        background-color: #4CAF50;
        color: white;
      }
      
      tr:nth-child(even) {
        background-color: #f2f2f2;
      }
        
        `}</style>
      <NavBar />
      <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to DISEPREDI </h1>
        <p>Predict diseases early and take control of your health.</p>
        <button onSubmit="./predict"> Get Started</button>
      </div>
      
      <div className="features-section">
        <h2>Our Features</h2>
        <div className="features">
          <div className="feature">
            <h3>Advanced Algorithms</h3>
            <p>Using state-of-the-art machine learning algorithms to predict diseases.</p>
          </div>
          <div className="feature">
            <h3>User Friendly</h3>
            <p>Easy to use interface that guides you through the prediction process.</p>
          </div>
          <div className="feature">
            <h3>Privacy Focused</h3>
            <p>Your data is secure and private, protected with the highest standards.</p>
          </div>
        </div>
      </div>

      <div className="disease-section">
        <h2>Diseases We Predict</h2>
        <div className="diseases">
          <table>
            <tr>
              <th>Sr.no</th>
              <th> Disease </th>
              <th> Description</th>
              <th> Accuracy</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Diabetes</td>
              <td>Diabetes is a chronic disease that occurs when the body can't produce enough insulin or can't use it effectively.</td>
              <td>92%</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Heart</td>
              <td>Cardiovascular Disease (Heart Disease) pertains to a range of conditions affecting the heart and blood vessels, manifesting with various symptoms or remaining asymptomatic.</td>
              <td>98%</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Breast Cancer</td>
              <td>Breast Cancer initiates in breast tissue and is the second most prevalent cancer among women in the US. While it can occur in men, it predominantly affects women.</td>
              <td>97%</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Chronic Kidney Disease (CKD)</td>
              <td>Chronic Kidney Disease (CKD) denotes progressive kidney damage impairing blood filtration, leading to waste accumulation and various health complications.</td>
              <td>99</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Malaria</td>
              <td>Malaria is a severe disease transmitted through mosquito bites, caused by parasites. Left untreated, it can result in seizures, brain damage, respiratory issues, organ failure, and death.</td>
              <td>95%</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Pneumonia</td>
              <td>Pneumonia is a lung infection caused by bacteria, viruses, or fungi, characterized by inflammation of airways and fluid accumulation in air sacs.</td>
              <td>91%</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="cta-section">
        <h2>Ready to predict?</h2>
        <p>Sign up now and start predicting diseases to ensure a healthier future.</p>
        <button>Sign Up</button>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default Home;
