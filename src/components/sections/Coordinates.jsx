import { useState } from 'react';
import API_URL from '../../config';
import './Coordinates.css';

const Coordinates = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: '', message: '' });

        try {
            const response = await fetch(`${API_URL}/contacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Thank you! Your message has been sent successfully.'
                });
                // Reset form
                setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: data.message || 'Failed to send message. Please try again.'
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Network error. Please check your connection and try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="coordinates-section">
            <div className="coordinates-container">
                <h2 className="coordinates-title" style={{ fontSize: "4em", fontWeight: "850" }}>Co-ordinates</h2>

                {submitStatus.message && (
                    <div className={`status-message ${submitStatus.type}`}>
                        {submitStatus.message}
                    </div>
                )}

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            value={formData.company}
                            onChange={handleChange}
                            className="form-input"
                        />
                    </div>

                    <div className="form-row">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-input"
                            required
                        />
                    </div>

                    <div className="form-message">
                        <p className="message-label">Want to know more? Drop us a line!</p>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="form-textarea"
                            rows="6"
                        />
                    </div>

                    <button type="submit" className="send-btn" disabled={isSubmitting}>
                        <span className="btn-icon">○</span>
                        {isSubmitting ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Coordinates;
