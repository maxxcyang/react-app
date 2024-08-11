import React from "react"
import emailjs from "emailjs-com"
import SentEmail from "./SentEmail"

export default function EmailBox(props) {
    const [showNext, setShowNext] = React.useState(false)

    const [formData, setFormData] = React.useState({
        name: "",
        email: ""
    })
    function handleChange(event) { 
        const {name, value} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_b2gd98q', 'template_6ge0vtb', e.target, 'WHafxWz46qO83aGM1')
            .then((result) => {

            }, (error) => {
                console.log(error.text);
            });
        setShowNext(true)
    }
    return (
        <div className="EmailBox">
            {showNext ? <SentEmail /> :  
            <form onSubmit={sendEmail}>
                <h2>Want to connect? Enter your email and I will send one back!</h2>
                <input 
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    name="name"
                    value={formData.name}
                />
                <input 
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <input type="submit"/>
            </form>
            }
        </div>
    )
}