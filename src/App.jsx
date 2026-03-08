import { useEffect, useRef, useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import BoardCoFounders from './components/sections/BoardCoFounders';
import CompanyInfo from './components/sections/CompanyInfo';
import Coordinates from './components/sections/Coordinates';
import LeanModel from './components/sections/LeanModel';
import ValueProposition from './components/sections/ValueProposition';
import Vision from './components/sections/Vision';

function App() {
    const [activeSection, setActiveSection] = useState('vision');
    const [bgOpacity, setBgOpacity] = useState(0);
    const sectionRefs = useRef({});

    const sections = [
        { id: 'vision', label: 'Vision', component: Vision },
        { id: 'company', label: 'Who we are', component: CompanyInfo },
        { id: 'board', label: 'Board', component: BoardCoFounders },
        { id: 'value', label: 'Value proposition', component: ValueProposition },
        { id: 'lean', label: 'Lean models', component: LeanModel },
        { id: 'contact', label: 'Co-ordinates', component: Coordinates }
    ];

    useEffect(() => {
        // Set initial background color
        document.body.style.backgroundColor = '#ffffff';

        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            // Switch background color after scrolling 100px
            if (scrollPosition > 100) {
                setBgOpacity(1);
                document.body.style.backgroundColor = '#f6fcffb8';
            } else {
                setBgOpacity(0);
                document.body.style.backgroundColor = '#ffffff';
            }
        };

        // Call once on mount to set initial state
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            // Reset on unmount
            document.body.style.backgroundColor = '';
        };
    }, []);

    const handleNavigation = (sectionId) => {
        const element = sectionRefs.current[sectionId];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(sectionId);
        }
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px -50% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.dataset.section);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        Object.values(sectionRefs.current).forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const animationObserverOptions = {
            root: null,
            rootMargin: '-100px 0px -100px 0px',
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5]
        };

        const animationObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                    entry.target.classList.add('visible');
                }
            });
        };

        const animationObserver = new IntersectionObserver(
            animationObserverCallback,
            animationObserverOptions
        );

        Object.values(sectionRefs.current).forEach((ref) => {
            if (ref) animationObserver.observe(ref);
        });

        return () => animationObserver.disconnect();
    }, []);

    return (
        <div className="app" style={{
            backgroundColor: bgOpacity === 0 ? '#ffffff' : '#f6fcffb8',
            maxWidth: "70em",
            margin: "0 auto"
        }}>
            <Navigation
                sections={sections}
                activeSection={activeSection}
                onNavigate={handleNavigation}
            />
            <main className="main-content">
                {sections.map(({ id, component: Component }) => (
                    <section
                        key={id}
                        ref={(el) => (sectionRefs.current[id] = el)}
                        data-section={id}
                        className="section-wrapper"
                    >
                        <Component />
                    </section>
                ))}
            </main>
        </div>
    );
}

export default App;
