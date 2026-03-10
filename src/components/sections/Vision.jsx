import logo from '../../assets/logo.png';
import './Vision.css';

const Vision = () => {
    return (
        <section className="vision-section">
            <div className="vision-container">
                <div className="vision-left">
                    <div className="vision-quote" style={{ marginRight: "-8em" }}>
                        <p>"To empower enterprises with lean, intelligent finance operations that drive clarity, agility, scalability leveraging Lean processes and technology"</p>
                    </div>
                    <div className="logo-container">
                        <img src={logo} alt="ScaleBridge Logo" className="logo-image" />
                        <h1 className="company-name">ScaleBridge</h1>
                    </div>
                </div>
                <div className="illustration-container">
                    <div className="illustration-placeholder">
                        <span>Illustration</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
