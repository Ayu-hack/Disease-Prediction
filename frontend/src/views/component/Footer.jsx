import React from 'react';
import {assets} from '../../assets/assets';
export const Footer = () => {
    return (
        
        <footer>
            <style>{
                `
                .footer-left {
                    width: 30%;
                }
               
                img {
                    width: 30px;
                    height: 30px;
                    margin: 5px; 
                }
                a{
                    color: white;
                    text-decoration: none;
                }
                p{
                    color: white;
                    font-size: .9rem;
                }
                footer-left{
                    display: flex;
                    flex-direction: row;
                }
                `

            }

                
            </style>
            <div className="top" style={{
              
                display: 'flex',
                flexDirection: 'row',
                background: '#003a73',
                color: 'white',     
                padding: '20px',
                gap: '20px',
            }}>
                <div className="footer-left">
                    <h3 style={{padding: '6px'}}>About</h3>
                    <p>Disepredi is disease predictionm application which is aim to boost health wareness and help in disease dection</p>
                </div>
                <div className="footer-center">
                    <h3>Contact</h3>
                    <p>Lucknow, Uttar Pradesh</p>
                    <p>India</p>
                    <p>Phone: +91 1234567890</p>
                    <p>Email:<a href="mailto:" > ayushtiwari2100@gmail.com</a></p>

                </div>
                <div  className='footer-left'>
                    <h5>Follow Us On</h5><br />
                    <img src={assets.facbooks} alt="facebook" />
                    <img src={assets.twitters} alt="twitter" />
                    <img src={assets.linkedin} alt="linkedin" />
                    <img src={assets.instagram} alt="instagram" />
                    
                </div>
            </div>
            <div className="bottom" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems  : 'center', 
                background: '#002b56',
                height: '60px',
                color: 'white',

            }}>
                <p>©2020 Copyright</p>
            </div>
        </footer>
      );
    };

