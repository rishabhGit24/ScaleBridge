import image2 from '../../assets/image2.png'; // adjust path if needed
import './ValueProposition.css';

const ValueProposition = () => {
    return (
        <section className="value-section">
            <div className="value-container">
                <h2 className="value-title" style={{ fontSize: "4em", fontWeight: "850", maxWidth: "40%" }}>Value Proposition</h2>
                <div className="infographic-placeholder">
                    <img
                        src={image2}
                        alt="Value Proposition Infographic"
                        className="infographic-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default ValueProposition;