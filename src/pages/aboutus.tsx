import React from "react";
import { Link } from "react-router-dom";
import '../styles/aboutus.css'


function AboutUs() {
    return (
        <div>
            <div className="Container">
                <h1 className="aboutus-text">Sobre Nós</h1>
              

                <div className="content">
                    <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            Lorem Ipsum is simply dummy text 
                    </p>
                    <img
                        width='450px'
                        src="/assets/feliz.png" alt="" />
                </div>
                   
                </div>


        </div>

    )
}

export default AboutUs