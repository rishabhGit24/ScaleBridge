import './BoardCoFounders.css';

const BoardCoFounders = () => {
    const headerMember = { id: 1, name: 'Name', role: 'Role' };

    const members = [
        { id: 2, name: 'Name', role: 'Role' },
        { id: 3, name: 'Name', role: 'Role' },
        { id: 4, name: 'Name', role: 'Role' },
        { id: 5, name: 'Name', role: 'Role', highlighted: true }
    ];

    return (
        <section className="board-section">
            <div className="board-container">
                <div className="board-header">
                    <h2 className="board-title" style={{ maxWidth: "75%", fontSize: "4em", fontWeight: "850" }}>Board and Co-founders</h2>
                    <div className="member-card">
                        <div className="member-photo-placeholder">
                            <span>Picture</span>
                        </div>
                        <h3 className="member-name">{headerMember.name}</h3>
                        <p className="member-role">{headerMember.role}</p>
                    </div>
                </div>

                <div className="members-grid">
                    {members.map((member) => (
                        <div key={member.id} className={`member-card ${member.highlighted ? 'highlighted' : ''}`}>
                            <div className="member-photo-placeholder">
                                <span>Picture</span>
                            </div>
                            <h3 className="member-name">{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BoardCoFounders;
