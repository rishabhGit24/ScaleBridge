import './LeanModel.css';

const LeanModel = () => {
    const departments = [
        {
            title: "Book Closure",
            items: [
                "Finalise financial statements",
                "Reconcile ledgers and trial balances",
                "Validate accruals and provisions",
                "Sales Office Coordination",
                "Consolidate revenue by region/product",
                "Track pipeline vs actuals",
                "Feed forecast inputs for scenario modelling"
            ]
        },
        {
            title: "HR Department Coordination",
            items: [
                "Headcount and cost centre mapping",
                "Attrition and hiring trends",
                "Productivity metrics by team"
            ]
        },
        {
            title: "Manufacturing/Development Team Coordination",
            items: [
                "Production volumes and cost per unit",
                "Inventory and WIP status",
                "Capex and resource utilisation"
            ]
        }
    ];

    return (
        <section className="lean-section">
            <div className="lean-container">
                <h2 className="lean-title">Lean Model</h2>

                <div className="departments-section">
                    {departments.map((dept, index) => (
                        <div key={index} className="department-block">
                            <h3 className="department-title">{dept.title}</h3>
                            <ul className="department-list">
                                {dept.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeanModel;
