import React, {useState} from "react"
import Layout from '../../components/Layout'

export default () => {
    const useInputHook = initialValue => {
        const [value, setValue] = useState(initialValue);
        const onChange = e => setValue(e.target.value);
        return {
            value,
            onChange
        };
    };
    const name = useInputHook('');
    const email = useInputHook('');
    const message = useInputHook('');

    const FORM_NAME = 'https://docs.google.com/forms/d/e/1FAIpQLSdAVfq4LuWS2ElmZbYsI2LNdrMtbg-sjUtvOCb704ESZ4k8NQ/formResponse';
    const GOOGLE_FORM_EMAIL_ID = 'entry.1887565007';
    const GOOGLE_FORM_MESSAGE_ID = 'entry.1949571276';

    const [submitError, setSubmitError] = useState('')
    const [submitting, setSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setSubmitError('');

        const formData = new FormData()
        formData.append(GOOGLE_FORM_MESSAGE_ID, message.value);
        formData.append(GOOGLE_FORM_EMAIL_ID, email.value);

        try {
            let response = await fetch(FORM_NAME, {
                method: "POST",
                body: formData
            });
            setSubmitting(false);
            setSubmitSuccess(true);
        } catch(err) {
            console.error(err);
            setSubmitError('There was an error processing the request');
            setSubmitting(false);
        }
    }

    return <Layout>
        <section className="hero is-dark">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Contact Us</h1>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container">
                <p>Tel: 0202020</p>
            </div>
        </section>
        <section className="section">
            <div className="container">
                {submitSuccess ? (
                    <p>Thank you for your message. We will be in touch shortly.</p>
                ):(<>
                    <form onSubmit={handleSubmit}>
                    <h2 className="is-size-4">Send us a message</h2>
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="text" {...name} placeholder="Enter your name" required />
                        </div>
                    </div>
                    <div class="field">
                        <label class="label">Email:</label>
                        <div class="control">
                            <input class="input" type="email" {...email} placeholder="Enter your email address" required />
                        </div>
                    </div>
                    <div class="field">
                    <label class="label">Message:</label>
                        <div class="control">
                            <textarea class="textarea" {...message} placeholder="Your Message ..." required></textarea>
                        </div>
                    </div>
                    <div class="control">
                        <button className={"button is-primary " + (submitting ? 'is-loading' : '')}>Submit</button>
                    </div>
                    <p className="help is-danger">{submitError}</p>
                </form></>)}
            </div>
        </section>
    </Layout>
}