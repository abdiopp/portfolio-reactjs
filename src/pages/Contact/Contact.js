import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


const initialState = {
    user_name: '',
    user_email: '',
    message: ''
}

export default function Contact() {
    const [isAdding, setIsAdding] = useState(false);
    const form = useRef();
    const [formData, setFormData] = useState(initialState)
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const sendEmail = (event) => {
        event.preventDefault()


        let { user_name, user_email, message } = formData

        user_name = user_name.trim();
        user_email = user_email.trim();
        message = message.trim();


        if (user_name.length < 3) {
            window.toastify("Please Type Your Name Correctly", "error");
            return;
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(user_email)) {
            window.toastify("Invalid user_email address", "error");
            return;
        }

        if (message.length < 10) {
            window.toastify("Please Type Your Message Correctly", "error");
            return;
        }

        handleSubmit()

    }


    const handleSubmit = () => {
        setIsAdding(true);

        emailjs.sendForm('default_service', 'template_w0g7lva', form.current, '6T4gP67ZgJ0_4f7bu')
            .then((result) => {
                window.toastify("Thank You! Your message is sent.", "success");
                setIsAdding(false);
                form.current.reset();
            }, (error) => {
                window.toastify("Something went wrong", "error");
                setIsAdding(false);
            });
    };
    return (
        <section className="section" id="contact">
            <div className="container text-center">
                <p className="section-subtitle">How can you communicate?</p>
                <h6 className="section-title mb-5">Contact Me</h6>
                <form ref={form} onSubmit={sendEmail} className="contact-form col-md-10 col-lg-8 m-auto">
                    <div className="form-row row">
                        <div className="form-group col-6">
                            <input type="text" size="50" className="form-control" placeholder="Your Name" name='user_name' onChange={handleChange} />
                        </div>
                        <div className="form-group col-6">
                            <input type="email" className="form-control" placeholder="Enter Email" name='user_email' onChange={handleChange} />
                        </div>
                        <div className="form-group col-sm-12 mt-3">
                            <textarea name="message" id="comment" rows="6" className="form-control"
                                placeholder="Write Something" onChange={handleChange} />
                        </div>
                        <div className="form-group col-sm-12 mt-3">
                            <input type="submit" disabled={isAdding} value={isAdding ? "Sending..."
                                : "Send Message"}
                                className="btn w-25 btn-primary rounded" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}