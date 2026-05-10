import vp1 from '../assets/value-proposition/vp1.png';
import vp2 from '../assets/value-proposition/vp2.png';
import vp3 from '../assets/value-proposition/vp3.png';
import vp4 from '../assets/value-proposition/vp4.png';
import vp5 from '../assets/value-proposition/vp5.png';
import vp6 from '../assets/value-proposition/vp6.png';
import './ValueProposition.css';
import locales from '../config/locales.json';

const valueIcons = [vp1, vp2, vp3, vp4, vp5, vp6];

const valueProps = locales.value.propositions.map((prop, index) => ({
    ...prop,
    icon: valueIcons[index]
}));

const ValueProposition = ({ isLaptop }) => {
    if (!isLaptop) {
        return (
            <section className="value-section value-section--mobile">
                <div className="value-mobile-container">
                    <h2 className="value-mobile-title">
                        {locales.value.title.split('\n').map((line, i) => (
                            <span key={i}>{line}<br /></span>
                        ))}
                    </h2>
                    <div className="value-mobile-list">
                        {valueProps.map((prop, index) => (
                            <div key={index} className="value-mobile-card">
                                <div className="value-mobile-icon">
                                    <img src={prop.icon} alt={prop.title} />
                                </div>
                                <h3 className="value-mobile-card-title">{prop.title}</h3>
                                <p className="value-mobile-card-desc">{prop.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="value-section">
            <div className="value-container">
                <h2 className="value-title">
                    {locales.value.title.split('\n').map((line, i) => (
                        <span key={i}>{line}<br /></span>
                    ))}
                </h2>
                <div className="value-grid">
                    {valueProps.map((prop, index) => (
                        <div key={index} className="value-card">
                            <div className="value-icon">
                                <img src={prop.icon} alt={prop.title} />
                            </div>
                            <h3 className="value-card-title">{prop.title}</h3>
                            <p className="value-card-description">{prop.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;
