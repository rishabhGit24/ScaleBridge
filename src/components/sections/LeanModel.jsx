import './LeanModel.css';

const LeanModel = () => {
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
                    <span>Infographics</span>
                </div>

                <div className="lean-content">
                    <p className="content-intro">
                        All these inputs flow into a central Management Reporting Hub, enabling:
                    </p>
                    <ul className="features-list">
                        <li>◆◆ KPI Dashboards</li>
                        <li>◆◆ Variance Analysis</li>
                        <li>◆◆ Scenario Forecasting</li>
                        <li>◆◆ Decision Support for Leadership</li>
                    </ul>

                    <p className="content-description">
                        Time and data accuracy is KEY for the below model example. We Lean Finance
                        Transformation, we build nexus with multiple departments thorough process map,
                        re-wire, build / draw, align, validate and execute/run and enhance agility and
                        effectiveness contributing to insightful / decision support for CXOs
                    </p>

                    <div className="departments-section">
                        <h3 className="department-title">◆◆ Book Closure</h3>
                        <ul className="department-list">
                            <li>o Finalize financial statements</li>
                            <li>o Reconcile ledgers and trial balances</li>
                            <li>o Validate accruals and provisions</li>
                        </ul>

                        <h3 className="department-title">◆◆ Sales Office Coordination</h3>
                        <ul className="department-list">
                            <li>o Consolidate revenue by region/product</li>
                            <li>o Track pipeline vs actuals</li>
                            <li>o Feed forecast inputs for scenario modeling</li>
                        </ul>

                        <h3 className="department-title">◆◆ HR Department Coordination</h3>
                        <ul className="department-list">
                            <li>o Headcount and cost center mapping</li>
                            <li>o Attrition and hiring trends</li>
                            <li>o Productivity metrics by team</li>
                        </ul>

                        <h3 className="department-title">◆◆ Manufacturing/Development Team Coordination</h3>
                        <ul className="department-list">
                            <li>o Production volumes and cost per unit</li>
                            <li>o Inventory and WIP status</li>
                            <li>o Capex and resource utilization</li>
                        </ul>
                    </div>
                </div>

                <div className="infographic-placeholder-lean bottom">
                    <span>Infographics</span>
                </div>
            </div>
        </section>
    );
};

export default LeanModel;
