import { Link } from "react-router-dom";
import { Tombolbtn, NavBar } from "../Components";
import "./Home.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios'

function Home() { 
    const [data, setData] = useState([]);
    // useEffect untuk memanggil API setelah komponen dirender
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => setData(response.data))
          .catch(error => console.log(error));
      }, []);
    

    return (

        <div className="container">
            <NavBar />
  <div>
    {data.map(item => (
      <div key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    ))}
  </div>
            <div className="box">
                <p>Bayu Ramadhan</p>
                {/* Tampilkan data dari API */}




                <Link to={"/Profile"}>
                    <Tombolbtn teks="Klik!" />
                </Link>
            </div>
        </div>
    );
}

export default Home;