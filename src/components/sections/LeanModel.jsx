import image2 from '../../assets/lean_model.png';
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

                <div className="lean-subtitle">
                    <p>Agility and change management</p>
                    <p className="highlight-text">Make MIS a Company Deadline, not a Finance Problem</p>
                </div>

                <p className="lean-description">
                    All inputs flow into a central Management Reporting hub, enabling decision support
                    and analysis. Every line of business should shoulder the responsibility of sharing
                    critical / key analysis and information to give MIS actionable insights
                </p>

                <div className="infographic-placeholder-lean">
                    <img src={image2} alt="Lean Model Infographic" className="infographic-image-lean" />
                </div>

                <div className="lean-content">
                    <p className="content-intro">
                        All these inputs flow into a central <strong>Management Reporting Hub</strong> enabling
                    </p>
                    <ul className="features-list">
                        <li>KPI Dashboards</li>
                        <li>Variance Analysis</li>
                        <li>Scenario Forecasting</li>
                        <li>Decision Support for Leadership</li>
                    </ul>

                    <p className="content-description">
                        <strong>Time and data accuracy is key</strong> for the below model example. <strong>We Lean Finance
                            Transformation</strong>, we build nexus with multiple departments thorough process map,
                        re-wire, build / draw, align, validate and execute/run and enhance agility and
                        effectiveness contributing to insightful / decision support for CXOs
                    </p>
                </div>

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
