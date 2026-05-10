import './CompanyInfo.css';
import locales from '../config/locales.json';
import { COMPANY_INFO_STYLES } from '../config/constants';

const CompanyInfo = ({ isLaptop }) => {
    if (!isLaptop) {
        return (
            <section className="company-info-section company-info-section--mobile" style={{marginTop: isLaptop ? "" : COMPANY_INFO_STYLES.MOBILE.marginTop}}>
                <div className="company-mobile-card">
                    <h2 className="company-mobile-title">
                        {locales.company.titleMobile.split('\n').map((line, i) => (
                            <span key={i}>{line}<br /></span>
                        ))}
                    </h2>
                    <p className="company-mobile-body">
                        {locales.company.description}
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className="company-info-section">
            <div className="company-info-container">
                <div className="who-we-are-card" style={{ 
                    marginTop: COMPANY_INFO_STYLES.DESKTOP.marginTop, 
                    minHeight: COMPANY_INFO_STYLES.DESKTOP.minHeight, 
                    padding: COMPANY_INFO_STYLES.DESKTOP.padding 
                }}>
                    <h2 className="section-title-white" style={{ 
                        maxWidth: COMPANY_INFO_STYLES.DESKTOP.titleMaxWidth, 
                        fontSize: COMPANY_INFO_STYLES.DESKTOP.titleFontSize, 
                        fontWeight: COMPANY_INFO_STYLES.DESKTOP.titleFontWeight, 
                        paddingBottom: COMPANY_INFO_STYLES.DESKTOP.titlePaddingBottom 
                    }}>
                        {locales.company.title}
                    </h2>
                    <p className="description-text" style={{ 
                        fontSize: COMPANY_INFO_STYLES.DESKTOP.descriptionFontSize, 
                        fontWeight: COMPANY_INFO_STYLES.DESKTOP.descriptionFontWeight 
                    }}>
                        {locales.company.description}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CompanyInfo;
