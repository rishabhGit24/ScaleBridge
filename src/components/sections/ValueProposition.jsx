import vp1 from '../../assets/value-proposition/vp1.png';
import vp2 from '../../assets/value-proposition/vp2.png';
import vp3 from '../../assets/value-proposition/vp3.png';
import vp4 from '../../assets/value-proposition/vp4.png';
import vp5 from '../../assets/value-proposition/vp5.png';
import vp6 from '../../assets/value-proposition/vp6.png';
import './ValueProposition.css';

const ValueProposition = () => {
    const valueProps = [
        {
            icon: vp1,
            title: "Efficiency First",
            description: "Remove wasteful steps in finance operations, focus on essentials"
        },
        {
            icon: vp2,
            title: "Smart Reporting",
            description: "Automated dashboards and KPI frameworks for real-time visibility"
        },
        {
            icon: vp3,
            title: "Clarity for Leaders",
            description: "Visual storytelling that makes numbers easy to understand"
        },
        {
            icon: vp4,
            title: "Outcome Driven",
            description: "Faster closes, better cash management, and improved profitability"
        },
        {
            icon: vp5,
            title: "Differentiator",
            description: "Unlike others, we focus on minimum viable model in weeks not months"
        },
        {
            icon: vp6,
            title: "Scalability",
            description: "Framework adaptable across your company and diversified businesses"
        }
    ];

    return (
        <section className="value-section">
            <div className="value-container">
                <h2 className="value-title">Value<br />Proposition</h2>
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