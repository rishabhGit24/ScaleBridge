import React, { useState } from 'react';
import pfp1 from '../../assets/profiles/pfp1.png';
import pfp2 from '../../assets/profiles/pfp2.png';
import pfp3 from '../../assets/profiles/pfp3.png';
import pfp4 from '../../assets/profiles/pfp4.png';
import pfp5 from '../../assets/profiles/pfp5.png';
import './BoardCoFounders.css';

const members = [
    {
        id: 1,
        name: 'Manjunath S',
        position: 'Managing Director and CEO',
        about: '30 years of experience in Corporate Finance Leadership roles at Tata Advanced Materials, Siemens, Aricent (Formerly Hughes Software), Dell India Pvt Ltd and Axis Cades Technologies Ltd. He has Led successful teams in Operational finance, ERP implementation, treasury management, Consolidation, Audits, MIS, payroll & compliance of multi country world wide. He is a Commerce Graduate with Masters in Business Administration',
        image: pfp1
    },
    {
        id: 2,
        name: 'Sunil N P',
        position: 'Director and Chief Operating Officer',
        about: 'Senior finance and operations executive with 25+ years in technology companies SAP, Mercury Interactive, EASi Software, specializing in SAP ERP and Quote-to-Cash. Leads cross-functional teams to drive digital transformation, process automation, and DSO reduction. Proven track record in mitigating revenue risk and improving cash flow, forecasting accuracy, compliance, and operational efficiency. He is a Commerce Graduate with Masters in Business Administration',
        image: pfp2
    },
    {
        id: 3,
        name: 'D N Narasimhaprasad',
        position: 'Director and Vice President, Business Development',
        about: 'Transformational Finance Leader with 30 years of MNC experience in Oracle & Wipro, built Elite Business Finance teams and FP&A GCC, Led enterprise finance transformations, deployed systems that compressed close cycles, sharpened forecasts, and delivered measurable cost‑to‑income gains. A trusted partner to C‑suite to convert Cross functional data into strategic growth decision. He is a Qualified CMA with Masters in Business Administration (EPGP) from IIM, Bangalore.',
        image: pfp3
    },
    {
        id: 4,
        name: 'Srinath M Kulkarni',
        position: 'Director and Vice President, Business Development',
        about: 'Seasoned finance Leader with 28+ years in global finance in Top Companies Oracle, Thomson Reuters in areas of FP&A, business partnering, and reporting across Geographies. Expert in Revenue/OPEX forecasting, KPI design, finance transformation and centralization. He has Lead many transformation projects, process development, tools implementation and has built High performing teams driving accuracy and operational efficiency. He holds A Master Degree in Commerce with an additional MSc (Yoga)',
        image: pfp4
    },
    {
        id: 5,
        name: 'Ramakanth R',
        position: 'Director and Vice President, Business Development',
        about: 'A Senior Auditor and Tax Consultant with 30 years of exceptional experience and Leading edge expertise in the areas of Management Advisory, Audits and Assurance, Consultation in Direct Taxation, Indirect Taxes- Goods & Services Tax, Tax litigations, Appellate Tribunal, Company Secretarial Works and Transaction Advisory Services. He is a Commerce Graduate with CA (inter)',
        image: pfp5
    }
];

/* ── Mobile member card ─────────────────────────────────────── */
const MobileMemberCard = ({ member }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="board-mobile-card">
            <div className="board-mobile-photo">
                <img src={member.image} alt={member.name} />
            </div>
            <h3 className="board-mobile-name">{member.name}</h3>
            <p className="board-mobile-position">{member.position}</p>
            <div className="board-mobile-divider" />
            <button
                className="board-mobile-about-btn"
                onClick={() => setOpen((prev) => !prev)}
            >
                <span className="board-mobile-plus">{open ? '−' : '+'}</span> About
            </button>
            {/* Animated wrapper — always rendered, toggled via class */}
            <div className={`board-mobile-about-wrapper ${open ? 'open' : ''}`}>
                <p className="board-mobile-about-text">{member.about}</p>
            </div>
        </div>
    );
};

const BoardCoFounders = ({ isLaptop }) => {
    const [hoveredMember, setHoveredMember] = useState(null);
    const hoverTimeoutRef = React.useRef(null);

    const handleMouseEnter = (id) => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        setHoveredMember(id);
    };

    const handleMouseLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setHoveredMember(null);
        }, 120); // small delay so moving from button → content doesn't flicker
    };

    // ── MOBILE LAYOUT ────────────────────────────────────────────
    if (!isLaptop) {
        return (
            <section className="board-section board-section--mobile">
                <div className="board-mobile-container">
                    <h2 className="board-mobile-title">Board and<br />Co-founders</h2>
                    {members.map((member) => (
                        <MobileMemberCard key={member.id} member={member} />
                    ))}
                </div>
            </section>
        );
    }

    // ── DESKTOP LAYOUT ───────────────────────────────────────────
    return (
        <section className="board-section">
            <div className="board-container">
                <div className="board-header">
                    <h2 className="board-title">Board and<br />Co-founders</h2>

                    <div
                        className="member-card"
                        onMouseEnter={() => handleMouseEnter(members[0].id)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="member-photo">
                            <img src={members[0].image} alt={members[0].name} />
                        </div>
                        <h3 className="member-name">{members[0].name}</h3>
                        <p className="member-position">{members[0].position}</p>

                        <button className="about-button">
                            <span className="plus-icon">+</span> About
                        </button>

                        <div className={`about-content ${hoveredMember === members[0].id ? 'open' : ''}`}>
                            <p className="about-text">{members[0].about}</p>
                        </div>
                    </div>
                </div>

                <div className="members-grid">
                    {members.slice(1).map((member) => (
                        <div
                            key={member.id}
                            className="member-card"
                            onMouseEnter={() => handleMouseEnter(member.id)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="member-photo">
                                <img src={member.image} alt={member.name} />
                            </div>
                            <h3 className="member-name">{member.name}</h3>
                            <p className="member-position">{member.position}</p>

                            <button className="about-button">
                                <span className="plus-icon">+</span> About
                            </button>

                            <div className={`about-content ${hoveredMember === member.id ? 'open' : ''}`}>
                                <p className="about-text">{member.about}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BoardCoFounders;
