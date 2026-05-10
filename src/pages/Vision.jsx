import { useState } from 'react';
import illus1 from '../assets/landing-page-illustration/illus1.png';
import illus2 from '../assets/landing-page-illustration/illus2.png';
import illus3 from '../assets/landing-page-illustration/illus3.png';
import illus4 from '../assets/landing-page-illustration/illus4.png';
import logo from '../assets/logo.png';
import './Vision.css';
import locales from '../config/locales.json';

const Vision = ({ isLaptop, sections, activeSection, onNavigate }) => {
    const illustrations = [
        { img: illus1, label: locales.vision.illustrations[0] },
        { img: illus2, label: locales.vision.illustrations[1] },
        { img: illus3, label: locales.vision.illustrations[2] },
        { img: illus4, label: locales.vision.illustrations[3] },
    ];

    const [activeIllus, setActiveIllus] = useState(null);

    if (!isLaptop) {
        const illustrationSlots = sections
            ? sections.map((section, index) => ({
                  id: section.id,
                  img: illustrations[index] ? illustrations[index].img : null,
                  label: illustrations[index] ? illustrations[index].label : null,
              }))
            : illustrations.map((item) => ({ img: item.img, label: item.label }));

        return (
            <section className="vision-section vision-section--mobile">
                <div className="vision-mobile-container">

                    <div className="vision-mobile-brand">
                        <img src={logo} alt={`${locales.vision.companyName} Logo`} className="vision-mobile-logo" />
                        <h1 className="vision-mobile-name">{locales.vision.companyName}</h1>
                    </div>

                    <p className="vision-mobile-quote">
                        "{locales.vision.quote}"
                    </p>

                    <div className="vision-mobile-nav-illus">

                        <div className="vision-mobile-nav">
                            {sections && sections.map((section) => (
                                <button
                                    key={section.id}
                                    className={`vision-mobile-nav-btn ${activeSection === section.id ? 'active' : ''}`}
                                    onClick={() => onNavigate && onNavigate(section.id)}
                                >
                                    {section.label}
                                </button>
                            ))}
                        </div>

                        <div className="vision-mobile-illus">
                            {illustrationSlots.map((slot, index) => (
                                <div
                                    key={index}
                                    className={`vision-mobile-illus-item${!slot.img ? ' empty' : ''}`}
                                    onClick={() => slot.img && setActiveIllus(activeIllus === index ? null : index)}
                                >
                                    {slot.img && (
                                        <>
                                            <span className={`vision-mobile-illus-label${activeIllus === index ? ' visible' : ''}`}>
                                                {slot.label}
                                            </span>
                                            <img
                                                src={slot.img}
                                                alt={slot.label}
                                                className="vision-mobile-illus-img"
                                            />
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        );
    }

    return (
        <section className="vision-section">
            <div className="vision-container">
                <div className="vision-left">
                    <div className="vision-quote">
                        <p>"{locales.vision.quote}"</p>
                    </div>
                    <div className="logo-container">
                        <img src={logo} alt={`${locales.vision.companyName} Logo`} className="logo-image" />
                        <h1 className="company-name">{locales.vision.companyName}</h1>
                    </div>
                </div>
                <div className="illustration-container">
                    <div className="illustrations-stack">
                        {illustrations.map((item, index) => (
                            <div key={index} className="illustration-item">
                                <div className="illustration-wrapper">
                                    <img
                                        src={item.img}
                                        alt={item.label}
                                        className="illustration-image"
                                    />
                                </div>
                                <div className="illustration-label">
                                    {item.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
