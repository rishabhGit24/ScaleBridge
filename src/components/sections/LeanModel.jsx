import chart from '../../assets/Lean Model/chart.png';
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

    const services = [
        {
            title: "Turbo projects",
            subtitle: "",
            scope: ["Assessment", "Roadmap", "Process", "Build", "Execute", "Handhold", "Continuous Improvement"],
            deliverables: "Watertight process for - Weekly KPI dashboard, monthly financial close, cash-flow reporting, Executive/Board-ready monthly pack.",
            outcomes: "Significant reduction in reporting time & efforts for Insightful intelligence for overall business predictability"
        },
        {
            title: "Lean Transformation - Expedite",
            subtitle: "(For companies ready to upgrade processes, forecasting, and tooling)",
            scope: ["Diagnostics", "Standardization Plan", "Process", "Develop Systems", "Train", "Implement", "Support", "Continuous Improvement"],
            deliverables: "Current-state assessment, Swift Roadmap, Collaborate with developers, Automated KPI dashboard, Scenario-driven forecasting models (Sales intelligence, Sales forecast, production forecast, Margin Forecast, Cash forecast and empower team)",
            outcomes: "Substantial reduction in manual reporting effort, real-time KPIs, faster strategic planning cycles"
        },
        {
            title: "Strategic Partnership - Finance Transformation",
            subtitle: "(For Businesses seeking long-term transformation & Build Finance GCC competency)",
            scope: ["Re-Design FP&A – Budget/Forecast/Long Range Planning", "Data Architecture", "People & Processes", "CXO/ Executive Insights"],
            deliverables: "Enterprise-grade FP&A platform setup, Policy / Governance framework, Management Insights / analytics, Upskill finance team, Periodic strategic / business reviews",
            outcomes: "Execution strategy for GCC Delivery, CXO / Board level analytics, Scenario-ready strategy planning, Measurable Profitability uplift from pricing / margin work"
        },
        {
            title: "Accounting and Compliance Services",
            subtitle: "",
            scope: ["Book keeping, Accounting and HR Services", "Compliance & Advisory Services", "Direct and Indirect Taxes"],
            deliverables: "End to end services of Book keeping and Accounting ; Portfolio Management Services like financial advisory and planning ; End to end Payroll processing / management services ; Compliance and Advisory services of all Secretarial matters including Registrations and formation procedures under various applicable legislations ; Direct Taxation – Income Tax e-TDS Services; Indirect Taxation – GST (including compliances for all States); Appeals & Revisions for all tax matters; Corporate Taxation, ex-patriate taxation and likewise.",
            outcomes: "Time to Focus on Core business, substantial cost savings, better compliance, access to experts / specialized tools with scalable support"
        }
    ];

    return (
        <section className="lean-section">
            <div className="lean-container">
                <h2 className="lean-title">Lean Model</h2>

                <h3 className="lean-subtitle">Agility and change management</h3>

                <p className="lean-description">
                    Revolutionize your MSME finances! We streamline operations, provide management clarity, and drive better decisions. From mess to mastery. Book your consultation- one call changes everything!
                </p>

                <div className="chart-container">
                    <img src={chart} alt="Lean Model Chart" className="chart-image" />
                </div>

                {/* Services Sections */}
                <div className="services-section">
                    {services.map((service, index) => (
                        <div key={index} className="service-block">
                            <h3 className="service-title">{service.title}</h3>
                            {service.subtitle && <p className="service-subtitle">{service.subtitle}</p>}

                            <div className="scope-container">
                                <span className="scope-label">Scope:</span>
                                <div className="scope-arrows">
                                    {service.scope.map((step, stepIndex) => (
                                        <div key={stepIndex} className="arrow-step">
                                            {step}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="service-info">
                                <strong>Deliverables:</strong> {service.deliverables}
                            </p>

                            <p className="service-info">
                                <strong>Outcomes:</strong> {service.outcomes}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LeanModel;
