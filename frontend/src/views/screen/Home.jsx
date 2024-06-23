import React from "react";
import "./Home.css";
import { Header, Footer } from "./../../import.manage";
import { Link } from "react-router-dom";


function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to DISEPREDI </h1>
        <p>Predict diseases early and take control of your health.</p>
        <Link to='./diseases'><button> Get Started</button></Link>
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
        <Link to='./Signup'><button>Signup</button></Link>
      </div>
    </div>
      <Footer />
    </>
  );
};  

export default Home ;
