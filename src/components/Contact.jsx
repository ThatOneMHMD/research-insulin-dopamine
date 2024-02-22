import React, { useState} from 'react';
import emailjs from 'emailjs-com';
import '../assets/css/Home.css';
import SeparatorWide from './SeparatorWide.jsx';

const Contact = () => {

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        phone: '',
        preferredContact: '',
    });

    const [requiredFields, setRequiredFields] = useState({
        name: false,
        email: false,
        message: false,
        phone: false,
        preferredContact: false,
    });

    const [submissionStatus, setSubmissionStatus] = useState(null);
    const [loading, setLoading] = useState(false);
    const [preferredContactRequired, setPreferredContactRequired] = useState(false);
    const [phoneError, setPhoneError] = useState(false);


    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value.trim()) {
        setRequiredFields((prevFields) => ({
            ...prevFields,
            [name]: true,
        }));
        } else {
        setRequiredFields((prevFields) => ({
            ...prevFields,
            [name]: false,
        }));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    // validate phone number input; gives true or false
    const validatePhoneNumber = (input_str) => {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return re.test(input_str);
    };




    // SET a limit of 200 messages per month for the free plan.

    








    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the preferred contact method is selected
        if (!formData.preferredContact) {
            // setSubmissionStatus('Please select a preferred contact method.');
            setPreferredContactRequired(true);
            return;
        }
        
        // validate phone number input
        const { phone } = formData;
        if (!validatePhoneNumber(phone)) {
            setPhoneError(true);
            return;
        }

        // Set loading to true when the form is being submitted
        setLoading(true);

        emailjs
        .sendForm(
            serviceId,
            templateId, 
            e.target, 
            publicKey)  
        .then(
            (result) => {
            console.log(result.text);
            setSubmissionStatus('Message successfully submitted!');
            setFormData({
                name: '',
                email: '',
                message: '',
                phone: '',
                preferredContact: '',
            });
            },
            (error) => {
            console.log(error.text);
            setSubmissionStatus('Message submission failed.');
            }
        )
        .finally(() => {
            // Reset loading state whether it's successful or failed
            setLoading(false);
            setPreferredContactRequired(false);
            setPhoneError(false);
        });

        setTimeout(() => {
            setSubmissionStatus(null);
        }, 5000);
    };

  
    return (
        <div id='contact' className='containerMinHeight'>

            <SeparatorWide rotation={-5} />

            <h1 className='title'>Contact</h1>

            <div className='twoColumns'>

                <div className='contact-content'>

                    <div className='contact-intro'>
                        Help us improve! Send us your feedback, questions, or any other inquiries. We will get back to you as soon as possible.

                        <br />
                        <br />
                        {/* <strong> Supervisor: Dr. Rodrigo Mansur </strong> */}
                        

                    </div>
                
                    
                    {/* ORRR maybe remove phone and email and simply keep hte contact form as means of comunication? Ask prof... */}

                    <div className='contact-info'> 
                        <p><strong>Supervisor: Dr. Rodrigo Mansur</strong></p>

                        <p> <strong>Phone:</strong> 416-603-5106</p>
                        <p><strong>Email:</strong> rodrigo.mansur@uhn.ca</p>
                        <p><strong>Website:</strong> <a href='https://neuroscience.utoronto.ca/rodrigo-mansur' target='blank'> Dr. Rodrigo Mansur, utoronto PhD. </a> </p>
                    </div>


                    <div className='contact-info'>
                        <p><strong>Research Author: Muhammad Atrach</strong></p>
                        <p> <strong>Phone:</strong> 647-638-3875</p>
                        <p style={{ wordBreak: 'break-all' }}><strong>Email:</strong> muhammad.atrach@mail.utoronto.ca</p>
                        <p><strong>Website:</strong> <a href='https://thatonemhmd.github.io/20-ReactPortfolio/' target='blank'> Muhammad Atrach, utoronto M.Sc. </a> </p>
                    </div>
                    

                </div>



                <div className='contact-form-content'>

                    <div className='contact-intro margin-bottom'>
                        For quicker responses, use the contact form below to send us your message.
                    </div>

                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className='contact-form-element'>
                            <label htmlFor="name" className="contact-label">
                            Name:
                            </label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="contact-input"
                            />
                            {requiredFields.name && (
                            <p className="required-field-notification">Name is required</p>
                            )}
                        </div>
                        <div className='contact-form-element'>
                            <label htmlFor="email" className="contact-label">
                            Email:
                            </label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            title="Please enter a valid email address"
                            className="contact-input"
                            />
                            {requiredFields.email && (
                            <p className="required-field-notification">Email is required</p>
                            )}
                        </div>
                        <div className='contact-form-element'>
                            <label htmlFor="phone" className="contact-label">
                                Phone:
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                title="Please enter a valid phone number"
                                className="contact-input"
                            />
                            {requiredFields.phone && (
                                <p className="required-field-notification">Phone number is required</p>
                            )}
                            {phoneError && (
                                <p className="required-field-notification">Please enter a valid phone number</p>
                            )}
                        </div>
                        <div className='contact-form-element margin-bottom borders-bottom-top'>
                            <label className="contact-label">
                                Preferred Contact Method:
                            </label>
                            <div className='flex-column'>
                                <label className='space-between'>
                                    <input
                                        type="radio"
                                        name="preferredContact"
                                        value="email"
                                        checked={formData.preferredContact === "email"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="radio-input"
                                    /> Email
                                </label>
                                <label className='space-between'>
                                    <input
                                        type="radio"
                                        name="preferredContact"
                                        value="phone"
                                        checked={formData.preferredContact === "phone"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="radio-input"
                                    /> Phone
                                </label>
                                <label className='space-between'>
                                    <input
                                        type="radio"
                                        name="preferredContact"
                                        value="both"
                                        checked={formData.preferredContact === "both"}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className="radio-input"
                                    /> Both
                                </label>
                            </div>
                            {/* {requiredFields.preferredContact && (
                                <p className="required-field-notification">Preferred contact method is required</p>
                            )} */}

                            {/* The method above does not work for this one... */}
                            {preferredContactRequired && (
                                <p className="required-field-notification">Preferred contact method is required</p>
                            )}
                        </div>
                        <div className='contact-form-element'>
                            <label htmlFor="message" className="contact-label">
                            Message:
                            </label>
                            <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                            className="contact-textarea"
                            />
                            {requiredFields.message && (
                            <p className="required-field-notification">Message is required</p>
                            )}
                        </div>
                        <button type="submit" className={loading ? 'contact-loading' : 'contact-submit'} disabled={loading}>
                            {loading ? 'Sending Message...' : 'Submit'}
                        </button>

                    </form>
                    {submissionStatus && (
                    <p className="submission-success">{submissionStatus}</p>
                    )}

                </div>

                

            </div>




        </div>
    );
};

export default Contact;
