import React, { useState } from 'react'
import { firestore } from '../../config/firebase'
import { doc, serverTimestamp, setDoc } from "firebase/firestore";


const initialState = {
    fullName: '',
    email: '',
    message: ''
}

export default function Contact() {
    const [isAdding, setIsAdding] = useState(false);
    const [formData, setFormData] = useState(initialState)
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        let { fullName, email, message } = formData

        fullName = fullName.trim();
        email = email.trim();
        message = message.trim();


        if (fullName.length < 3) {
            window.toastify("Please Type Your Name Correctly", "error");
            return;
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            window.toastify("Invalid email address", "error");
            return;
        }

        if (message.length < 10) {
            window.toastify("Please Type Your Message Correctly", "error");
            return;
        }

        let data = { fullName, email, message }


        const id = Math.random().toString(36).slice(2)

        data.id = id
        data.dateCreated = serverTimestamp()


        createDocument(data);
    }
    const createDocument = async (data) => {
        setIsAdding(true)
        try {
            await setDoc(doc(firestore, "messages", data.id), data);
            window.toastify("Message is sent", "success");
        } catch (err) {
            console.error(err)
            window.toastify("Something went went wrong, Please try again", "error")
        }
        setIsAdding(false)
    }

    return (
        <section className="section" id="contact">
            <div className="container text-center">
                <p className="section-subtitle">How can you communicate?</p>
                <h6 className="section-title mb-5">Contact Me</h6>
                <form onSubmit={handleSubmit} className="contact-form col-md-10 col-lg-8 m-auto">
                    <div className="form-row row">
                        <div className="form-group col-6">
                            <input type="text" size="50" className="form-control" placeholder="Your Name" name='fullName' onChange={handleChange} />
                        </div>
                        <div className="form-group col-6">
                            <input type="email" className="form-control" placeholder="Enter Email" name='email' onChange={handleChange} />
                        </div>
                        <div className="form-group col-sm-12 mt-3">
                            <textarea name="message" id="comment" rows="6" className="form-control"
                                placeholder="Write Something" onChange={handleChange} />
                        </div>
                        <div className="form-group col-sm-12 mt-3">
                            <input type="submit" disabled={setIsAdding} value={
                                isAdding ? "Sending..." : "Send"
                            } className="btn btn-outline-primary rounded" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}
