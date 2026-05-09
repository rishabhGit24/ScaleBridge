import './CompanyInfo.css';

const CompanyInfo = ({ isLaptop }) => {
    // ── MOBILE LAYOUT ────────────────────────────────────────────
    if (!isLaptop) {
        return (
            <section className="company-info-section company-info-section--mobile" style={{marginTop: isLaptop?"":"-14em"}}>
                <div className="company-mobile-card">
                    <h2 className="company-mobile-title">
                        Who we are?<br />What do we<br />do?
                    </h2>
                    <p className="company-mobile-body">
                        We are finance transformation architects for micro and small enterprises.
                        Specialists in finance operations redesign, from book closure to forecasting.
                        We help build lean frameworks processes that simplify complexity, engaging
                        with enterprises existing resources, people and deliver board room ready
                        insights in weeks, not months.
                    </p>
                </div>
            </section>
        );
    }

    // ── DESKTOP LAYOUT (unchanged) ───────────────────────────────
    return (
        <section className="company-info-section">
            <div className="company-info-container">
                <div className="who-we-are-card" style={{ marginTop: "5em", minHeight: "35sem", padding: "3em 4em 2em 4em" }}>
                    <h2 className="section-title-white" style={{ maxWidth: "4.5em", fontSize: "4em", fontWeight: "850", paddingBottom: "30px" }}>Who are we? What do we do?</h2>
                    <p className="description-text" style={{ fontSize: "1.4em", fontWeight: "400", padding: "" }}>
                        We are finance transformation architects for micro and small enterprises.
                        Specialists in finance operations redesign, from book closure to forecasting.
                        We help build lean frameworks processes that simplify complexity, engaging
                        with enterprises existing resources, people and deliver board room ready
                        insights in weeks, not months.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CompanyInfo;
