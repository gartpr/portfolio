import React, { useState } from 'react';

const Contact = () => {

    const initialFormData = {
        name: '',
        subject: '',
        email: '',
        message: '',
    };
    
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted with data:', formData);
        setFormData(initialFormData);
    };

    return (
    <section className="s2" id = "contact-section">
        <div className="main-container">
            <h3 style={{ textAlign: "center" }}>Get In Touch</h3>

            <form id="contact-form" onSubmit={handleSubmit}>
                <label>Name</label>
                <input className="input-field" type="text" name="name" value={formData.name} onChange={handleInputChange} />

                <label>Subject</label>
                <input className="input-field" type="text" name="subject" value={formData.subject} onChange={handleInputChange} />

                <label>Email</label>
                <input className="input-field" type="text" name="email" value={formData.email} onChange={handleInputChange} />

                <label>Message</label>
                <textarea className="input-field" name="message" value={formData.message} onChange={handleInputChange}></textarea>

                <input id="submit-btn" type="submit" value="Send" />
            </form>
        </div>
    </section>
    );
}

export default Contact;
