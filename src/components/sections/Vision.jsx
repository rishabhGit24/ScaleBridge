import illus1 from '../../assets/landing-page-illustration/illus1.png';
import illus2 from '../../assets/landing-page-illustration/illus2.png';
import illus3 from '../../assets/landing-page-illustration/illus3.png';
import illus4 from '../../assets/landing-page-illustration/illus4.png';
import logo from '../../assets/logo.png';
import './Vision.css';

const Vision = ({ isLaptop, sections, activeSection, onNavigate }) => {
    const illustrations = [
        { img: illus1 },
        { img: illus2 },
        { img: illus3 },
        { img: illus4 },
    ];

    // ── MOBILE LAYOUT ────────────────────────────────────────────
    if (!isLaptop) {
        // Build illustration slots — 4 images for first 4 nav items, empty for last 2
        const illustrationSlots = sections
            ? sections.map((section, index) => ({
                  id: section.id,
                  img: illustrations[index] ? illustrations[index].img : null
              }))
            : illustrations.map((item) => ({ img: item.img }));

        return (
            <section className="vision-section vision-section--mobile" style={{marginTop: isLaptop?"":"2em"}}>
                <div className="vision-mobile-container">

                    {/* Logo + Brand name */}
                    <div className="vision-mobile-brand">
                        <img src={logo} alt="ScaleBridge Logo" className="vision-mobile-logo" />
                        <h1 className="vision-mobile-name">ScaleBridge</h1>
                    </div>

                    {/* Quote */}
                    <p className="vision-mobile-quote"style={{paddingTop: isLaptop?"":"2em"}}>
                        "To empower enterprises with lean, intelligent finance operations that drive clarity, agility, scalability leveraging Lean processes and technology"
                    </p>

                    {/* Nav pills + illustrations side by side */}
                    <div className="vision-mobile-nav-illus">
                        {/* Left: nav pills */}
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

                        {/* Right: illustration slots aligned to each nav row */}
                        <div className="vision-mobile-illus">
                            {illustrationSlots.map((slot, index) => (
                                <div
    key={index}
    className={`vision-mobile-illus-item${!slot.img ? ' empty' : ''}`}
    style={{
        width: isLaptop ? '' : '15em',
        marginBottom: isLaptop ? '' : '3em'
    }}
>
    {slot.img && (
        <img
            src={slot.img}
            alt=""
            className="vision-mobile-illus-img"
            style={{
                width: isLaptop ? '' : '10em'
            }}
        />
    )}
</div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        );
    }

    // ── DESKTOP LAYOUT (unchanged) ───────────────────────────────
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
                                        alt=""
                                        className="illustration-image"
                                    />
                                </div>
                                <div className="illustration-label">
                                    {['Faster book closure', 'Insightful management reporting', 'Process re-engineering for efficiency', 'GCC'][index]}
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
