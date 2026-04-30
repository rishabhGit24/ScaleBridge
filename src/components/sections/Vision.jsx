import illus1 from '../../assets/landing-page-illustration/illus1.png';
import illus2 from '../../assets/landing-page-illustration/illus2.png';
import illus3 from '../../assets/landing-page-illustration/illus3.png';
import illus4 from '../../assets/landing-page-illustration/illus4.png';
import logo from '../../assets/logo.png';
import './Vision.css';

const Vision = () => {
    const illustrations = [
        { img: illus1, label: "Faster book closure" },
        { img: illus2, label: "Insightful management reporting" },
        { img: illus3, label: "Process re-engineering for efficiency" },
        { img: illus4, label: "GCC" }
    ];

    return (
        <section className="vision-section">
            <div className="vision-container">
                <div className="vision-left">
                    <div className="vision-quote">
                        <p>"To empower enterprises with lean, intelligent finance operations that drive clarity, agility, scalability leveraging
                            Lean processes and technology"</p>
                    </div>
                    <div className="logo-container">
                        <img src={logo} alt="ScaleBridge Logo" className="logo-image" />
                        <h1 className="company-name">ScaleBridge</h1>
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
