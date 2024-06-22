import React from "react";
import './choose_diseases.css';
import { Link } from "react-router-dom";
import { Header, Footer } from "../../../import.manage";
import diseases from '../../../dieases.json';

function cards(ID, name) {
  return (

    <div className="card" key={ID}>
      <h3>{(name.toUpperCase())}</h3>
    </div>
  )
}

function Choose() {
  return (
    <>
      <Header />
      <div>
        <h2 className="heading">DISEASES</h2>
        <div className="diseases-box">
          {diseases.map((disease) => (
            <Link to={disease.name} key={disease.id}>
              {cards(disease.id, disease.name)}
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
    }
export default Choose ;
