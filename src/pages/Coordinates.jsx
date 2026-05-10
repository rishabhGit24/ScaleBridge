import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import instaQR from '../assets/co-ordinates/insta.png';
import API_URL from '../config';
import './Coordinates.css';
import locales from '../config/locales.json';
import { COORDINATES_STYLES, FORM_INITIAL_STATE } from '../config/constants';

const Coordinates = ({ isLaptop }) => {
    const [formData, setFormData] = useState({
        ...FORM_INITIAL_STATE,
        honeypot: ''
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

        if (formData.honeypot) {
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch(`${API_URL}/contacts`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus({
                    type: 'success',
                    message: locales.coordinates.messages.success
                });
                setFormData({ ...FORM_INITIAL_STATE, honeypot: '' });
            } else {
                const errorMessage = data.message || locales.coordinates.messages.error;
                setSubmitStatus({
                    type: 'error',
                    message: errorMessage
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                type: 'error',
                message: locales.coordinates.messages.networkError
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isLaptop) {
        return (
            <section className="coordinates-section coordinates-section--mobile">
                <div className="coord-mobile-container">
                    <h2 className="coord-mobile-title">{locales.coordinates.title}</h2>

                    {submitStatus.message && (
                        <div className={`status-message ${submitStatus.type}`}>
                            {submitStatus.message}
                        </div>
                    )}

                    <form className="coord-mobile-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="honeypot"
                            value={formData.honeypot}
                            onChange={handleChange}
                            style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                            tabIndex="-1"
                            autoComplete="off"
                            aria-hidden="true"
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder={locales.coordinates.form.namePlaceholder}
                            value={formData.name}
                            onChange={handleChange}
                            className="coord-mobile-input"
                            required
                            maxLength="100"
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder={locales.coordinates.form.companyPlaceholder}
                            value={formData.company}
                            onChange={handleChange}
                            className="coord-mobile-input"
                            maxLength="200"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder={locales.coordinates.form.emailPlaceholder}
                            value={formData.email}
                            onChange={handleChange}
                            className="coord-mobile-input"
                            required
                            maxLength="255"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder={locales.coordinates.form.phonePlaceholder}
                            value={formData.phone}
                            onChange={handleChange}
                            className="coord-mobile-input"
                            required
                            maxLength="20"
                        />

                        <div className="coord-mobile-send-row">
                            <button
                                type="submit"
                                className="coord-mobile-send-btn"
                                disabled={isSubmitting}
                            >
                                <FontAwesomeIcon icon={faPaperPlane} className="btn-icon" />
                                {isSubmitting ? locales.coordinates.form.sendingButton : locales.coordinates.form.sendButton}
                            </button>
                        </div>
                    </form>

                    <div className="coord-mobile-reach" style={{marginBottom: isLaptop ? "" : COORDINATES_STYLES.MOBILE.marginBottom}}>
                        <p className="coord-mobile-reach-text">{locales.coordinates.reachOut}</p>
                        <div className="coord-mobile-socials">
                            <div className="coord-mobile-icon-wrapper">
                                <a href={`tel:${locales.coordinates.phone}`} className="coord-mobile-icon-btn" aria-label={locales.coordinates.ariaLabels.phone}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                                        <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                    </svg>
                                </a>
                                <span className="phone-tooltip">{locales.coordinates.phone}</span>
                            </div>
                            <a href={`mailto:${locales.coordinates.email}`} className="coord-mobile-icon-btn" aria-label={locales.coordinates.ariaLabels.email}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                </svg>
                            </a>
                            <div className="coord-mobile-qr">
                                <img src={instaQR} alt="Instagram QR Code" />
                                <p>{locales.coordinates.instagram}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="coordinates-section">
            <div className="coordinates-container">
                <h2 className="coordinates-title" style={{ 
                    fontSize: COORDINATES_STYLES.DESKTOP.titleFontSize, 
                    fontWeight: COORDINATES_STYLES.DESKTOP.titleFontWeight 
                }}>
                    {locales.coordinates.title}
                </h2>

                {submitStatus.message && (
                    <div className={`status-message ${submitStatus.type}`}>
                        {submitStatus.message}
                    </div>
                )}

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="honeypot"
                        value={formData.honeypot}
                        onChange={handleChange}
                        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
                        tabIndex="-1"
                        autoComplete="off"
                        aria-hidden="true"
                    />
                    <div className="form-row">
                        <input
                            type="text"
                            name="name"
                            placeholder={locales.coordinates.form.namePlaceholder}
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                            required
                            maxLength="100"
                        />
                        <input
                            type="text"
                            name="company"
                            placeholder={locales.coordinates.form.companyPlaceholder}
                            value={formData.company}
                            onChange={handleChange}
                            className="form-input"
                            maxLength="200"
                        />
                    </div>

                    <div className="form-row">
                        <input
                            type="email"
                            name="email"
                            placeholder={locales.coordinates.form.emailPlaceholder}
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            required
                            maxLength="255"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder={locales.coordinates.form.phonePlaceholder}
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-input"
                            required
                            maxLength="20"
                        />
                    </div>
                    <button type="submit" className="send-btn" disabled={isSubmitting}>
                        <FontAwesomeIcon icon={faPaperPlane} className="btn-icon" />
                        {isSubmitting ? locales.coordinates.form.sendingButton : locales.coordinates.form.sendButton}
                    </button>
                </form>

                <div className="reach-out-section">
                    <p className="reach-out-text">{locales.coordinates.reachOut}</p>
                    <div className="social-icons">
                        <div className="social-icon-wrapper">
                            <a href={`tel:${locales.coordinates.phone}`} className="social-icon phone-icon" aria-label={locales.coordinates.ariaLabels.phone}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                                </svg>
                            </a>
                            <span className="phone-tooltip">{locales.coordinates.phone}</span>
                        </div>
                        <div className="social-icon-wrapper email-wrapper">
                            <a href={`mailto:${locales.coordinates.email}`} className="social-icon email-icon" aria-label={locales.coordinates.ariaLabels.email}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor">
                                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                </svg>
                            </a>
                            <span className="phone-tooltip">{locales.coordinates.email}</span>
                        </div>
                        <div className="qr-code-container">
                            <img src={instaQR} alt="Instagram QR Code" className="qr-code" />
                            <p className="qr-label">{locales.coordinates.instagram}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Coordinates;
