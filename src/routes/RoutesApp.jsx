import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../themes/ThemeContext.jsx';
import { Home } from '../pages/Home.jsx';
import { Profile } from '../pages/Profile.jsx';
import { MyJob } from '../pages/MyJob.jsx';
import Header from '../components/Header.jsx';

const RoutesApp = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <Router>
            <section className={`App ${theme}`}>
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/myjob" element={<MyJob />} />
                    </Routes>
                </div>
            </section>
        </Router>
    );
};

export default RoutesApp;