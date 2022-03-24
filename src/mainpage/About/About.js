import React, { Component } from "react";
import './About.css'

class About extends Component {
    render() {
        return (
            <div id="About" className="about-container">
                <h1 className="heading">About <span>Us</span> </h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi assumenda doloribus nihil adipisci quis voluptatibus, iure, vitae qui porro eius fugiat unde perspiciatis, explicabo placeat necessitatibus. Corporis illo sit et fugiat dolorem libero atque quas culpa eum distinctio vel eius nulla, unde maxime modi veritatis. Ipsam vel quo illo aperiam blanditiis recusandae reiciendis libero mollitia, debitis eaque dolor suscipit! Eius impedit quasi error ullam eveniet! Maxime, aliquam debitis consequuntur ab repellat aut! Eos adipisci tenetur aliquid est praesentium debitis provident.</p>
                <div className="about-team">
                    <div className="team-members">
                        <img src="profile.png" alt="" />
                        <h1 className="profile-name title">Jay</h1>
                        <a href="#" className="contact-btn">Contact</a>
                    </div>
                    <div className="team-members">
                        <img src="profileg.png" alt="" />
                        <h1 className="profile-name title">Khushi Garg</h1>
                        <a href="#" className="contact-btn">Contact</a>
                    </div>
                    <div className="team-members">
                        <img src="profile.png" alt="" />
                        <h1 className="profile-name title">Karan</h1>
                        <a href="#" className="contact-btn">Contact</a>
                    </div>
                    <div className="team-members">
                        <img src="profile.png" alt="" />
                        <h1 className="profile-name title">Mayank</h1>
                        <a href="#" className="contact-btn">Contact</a>
                    </div>
                    <div className="team-members">
                        <img src="profileg.png" alt="" />
                        <h1 className="profile-name title">Khushi Soni</h1>
                        <a href="#" className="contact-btn">Contact</a>
                    </div>
                    <div className="team-members">
                        <img src="profile.png" alt="" />
                        <h1 className="profile-name title">Nishant</h1>
                        <a href="#" className="contact-btn">Contact</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;