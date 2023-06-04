import '../css/contact.css'
import "../css/sarinagpt.css"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Parallax } from "react-scroll-parallax";
import Mode from '../Mode';
import { useLocation} from 'react-router-dom';

// function ContactMe() {
//     return (
//         <div className={Mode.curMode}>hi</div>
//     )
// }

// export default ContactMe;

function ContactMe() {
    const form = useRef();
    const [width, setWidth] = React.useState(window.innerWidth);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const location = useLocation();

    console.log(location.pathname)

    React.useEffect(() => {
        /* Inside of a "useEffect" hook add an event listener that updates
            the "width" state variable when the window size changes */
        window.addEventListener("resize", () => setWidth(window.innerWidth));
        return () => window.removeEventListener("resize", window.handleWindowResize);
    }, []);

    const sendEmail = (e) => {
        // console.log("running")
        e.preventDefault();
        if (name === "" || email === "" || message === "") {
            alert("Please don't leave a field empty!")
        } else{
            emailjs.sendForm('service_1uxlhsq', 'template_3np9n02', form.current, 'lBt5Ythj88u_mF8l3')
            .then(() => {
                alert("Message sent! Thanks, I will get back to you ASAP : )!")
                setName("")
                setEmail("")
                setMessage("")
            }, (error) => {
                alert(error.text)
            });
        }
    };
    return (
        <div className="contact-body">
            <div className='sarina-title'>Contact Me</div>
            <div className='message-prompt'>Hello! Please leave me a message here and I will get in touch with you shortly!</div>

            <Parallax speed={width > 760? -10 :0}>

                <form ref={form} onSubmit={sendEmail} className='contact-form'>
            
                    <div className='input-prompt'>Name</div>
                    <input id='boxone' type="text" name="user_name" className={`name-text-${Mode.curMode}`} 
                        value={name}
                        placeholder="Your name"
                        onInput={
                            e => {
                                setName(e.target.value)
                            }
                        }
                    />
                    <div className='input-prompt'>Email</div>
                    <input type="email" name="user_email" className={`email-text-${Mode.curMode}`} id='box2'
                        value={email}
                        placeholder="youremail@email.com"
                        onInput={
                            e => {
                                setEmail(e.target.value)
                            }
                        }
                    />
                    <div className='input-prompt'>Message</div>
                    <textarea name="message" className={`message-text-${Mode.curMode}`} id='box3'
                        value={message}
                        placeholder="Sarina, you are so hot and cool!"
                        onInput={
                            e => {
                                setMessage(e.target.value)
                            }
                        }
                    />
                    <input type="submit" value="Send" className='submit-btn'/>
                </form>
            </Parallax>
        </div>
    )
}

export default ContactMe;