import React, { useState } from 'react';
import pfp1 from '../assets/profiles/pfp1.png';
import pfp2 from '../assets/profiles/pfp2.png';
import pfp3 from '../assets/profiles/pfp3.png';
import pfp4 from '../assets/profiles/pfp4.png';
import pfp5 from '../assets/profiles/pfp5.png';
import './BoardCoFounders.css';
import locales from '../config/locales.json';
import { HOVER_TIMEOUT } from '../config/constants';

const profileImages = [pfp1, pfp2, pfp3, pfp4, pfp5];

const members = locales.board.members.map((member, index) => ({
    ...member,
    image: profileImages[index]
}));

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
                <span className="board-mobile-plus">{open ? '−' : '+'}</span> {locales.board.aboutButton}
            </button>
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
        }, HOVER_TIMEOUT);
    };

    if (!isLaptop) {
        return (
            <section className="board-section board-section--mobile">
                <div className="board-mobile-container">
                    <h2 className="board-mobile-title">
                        {locales.board.title.split('\n').map((line, i) => (
                            <span key={i}>{line}<br /></span>
                        ))}
                    </h2>
                    {members.map((member) => (
                        <MobileMemberCard key={member.id} member={member} />
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section className="board-section">
            <div className="board-container">
                <div className="board-header">
                    <h2 className="board-title">
                        {locales.board.title.split('\n').map((line, i) => (
                            <span key={i}>{line}<br /></span>
                        ))}
                    </h2>

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
                            <span className="plus-icon">+</span> {locales.board.aboutButton}
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
                                <span className="plus-icon">+</span> {locales.board.aboutButton}
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
