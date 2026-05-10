import chart from '../assets/Lean Model/chart.png';
import './LeanModel.css';
import locales from '../config/locales.json';

const LeanModel = ({ isLaptop }) => {
    if (!isLaptop) {
        return (
            <section className="lean-section lean-section--mobile">
                <div className="lean-mobile-container">
                    <h2 className="lean-mobile-title">{locales.lean.title}</h2>
                    <p className="lean-mobile-subtitle">{locales.lean.subtitle}</p>
                    <p className="lean-mobile-description">
                        {locales.lean.description}
                    </p>

                    <div className="lean-mobile-chart">
                        <img src={chart} alt={`${locales.lean.title} Chart`} />
                    </div>

                    <div className="lean-mobile-services">
                        {locales.lean.services.map((service, index) => (
                            <div key={index} className="lean-mobile-service-block">
                                <h3 className="lean-mobile-service-title">{service.title}</h3>
                                {service.subtitle && (
                                    <p className="lean-mobile-service-subtitle">{service.subtitle}</p>
                                )}

                                <div className="lean-mobile-scope">
                                    <span className="lean-mobile-scope-label">{locales.lean.scopeLabel}</span>
                                    <div className="lean-mobile-scope-arrows">
                                        {service.scope.map((step, stepIndex) => (
                                            <div key={stepIndex} className="lean-mobile-arrow-step">
                                                {step}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <p className="lean-mobile-info">
                                    <strong>{locales.lean.deliverablesLabel}</strong> {service.deliverables}
                                </p>
                                <p className="lean-mobile-info">
                                    <strong>{locales.lean.outcomesLabel}</strong> {service.outcomes}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="lean-section">
            <div className="lean-container">
                <h2 className="lean-title">{locales.lean.title}</h2>
                <h3 className="lean-subtitle">{locales.lean.subtitle}</h3>
                <p className="lean-description">
                    {locales.lean.description}
                </p>

                <div className="chart-container">
                    <img src={chart} alt={`${locales.lean.title} Chart`} className="chart-image" />
                </div>

                <div className="services-section">
                    {locales.lean.services.map((service, index) => (
                        <div key={index} className="service-block">
                            <h3 className="service-title">{service.title}</h3>
                            {service.subtitle && <p className="service-subtitle">{service.subtitle}</p>}

                            <div className="scope-container">
                                <span className="scope-label">{locales.lean.scopeLabel}</span>
                                <div className="scope-arrows">
                                    {service.scope.map((step, stepIndex) => (
                                        <div key={stepIndex} className="arrow-step">
                                            {step}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="service-info">
                                <strong>{locales.lean.deliverablesLabel}</strong> {service.deliverables}
                            </p>
                            <p className="service-info">
                                <strong>{locales.lean.outcomesLabel}</strong> {service.outcomes}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeanModel;
