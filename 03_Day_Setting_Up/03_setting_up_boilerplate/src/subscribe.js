import React from 'react'
import './style.css'
function Subscribe() {
    
    return (
        <div id="subscribe">
            <h2>SUBSCRIBE</h2>
            <p>Sign up with your email address to receive news and updates</p>
            <div className="forms">
                <label htmlFor="first-name"></label>
                <input type="text" placeholder="First Name"/>

                <label htmlFor="last-name"></label>
                <input type="text" placeholder="Last Name"/>

                <label htmlFor="email"></label>
                <input type="text" placeholder="Email"/>
            </div>
            <div>
                <input type="button" className="btn" value="Subscribe"/>
            </div>
        </div>
    )
}

export default Subscribe
