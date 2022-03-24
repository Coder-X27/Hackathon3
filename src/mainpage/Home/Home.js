import React, { Component } from "react";
import "./Home.css";

{/* <img src="https://thumbs.dreamstime.com/b/chemical-petrochemical-processing-plant-heavy-industry-stylized-vector-symbol-design-elements-emblem-127797723.jpg" alt="" /> */}
class Home extends Component {
  render() {
   
    return (
        <section id="Home" className="home container">
            <div className="animation">
                <div className="social-icons resp1">
                    <a href="#" target='_blank' class="home_social_icon"><i class="uil uil-facebook-f"></i></a>
                    <a href="#" target='_blank' class="home_social_icon"><i class="uil uil-github-alt"></i></a>
                    <a href="#" target='_blank' class="home_social_icon"><i class="uil uil-linkedin-alt"></i></a>
                </div>
                {/* <img src="https://thumbs.dreamstime.com/b/chemical-petrochemical-processing-plant-heavy-industry-stylized-vector-symbol-design-elements-emblem-127797723.jpg" alt="" />  */}
                {/* <img src="img.glb" alt="" /> */}
                <img src="./chemical.gif" alt="" />
                {/* <img src="./giphy.gif" alt="" /> */}
            </div>
            <div className="home-content">
                <h1 className="heading">Error <span>404</span></h1>
                <div className="home-description">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam vitae, earum amet odit laboriosam delectus tenetur culpa quidem doloremque provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusantium inventore at ullam dolorum enim sunt impedit! Sed, iure soluta?
                    </p>
                    </div>
                <div className="home-buttons">
                    <button className="btn-company" > <a href="/register">Register</a></button>
                    <button className="btn-admin" ><a href="/login">Login</a></button>
                </div>
            </div>
            <div className="social-icons resp2">
                <a href="#" target='_blank' class="home_social_icon"><i class="uil uil-facebook-f"></i></a>
                <a href="#" target='_blank' class="home_social_icon"><i class="uil uil-github"></i></a>
                <a href="#" target='_blank' class="home_social_icon"><i class="uil uil-linkedin-alt"></i></a>
            </div>
        </section>
    );
  }
}

export default Home;
