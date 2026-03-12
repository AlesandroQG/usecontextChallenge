import RoutesApp from './routes/RoutesApp.jsx';
import { ThemeProvider } from './themes/ThemeContext.jsx';
import './App.css'; // Archivo de estilos CSS

const App = () => {
    return (
        <>
            <ThemeProvider>
                <RoutesApp />
            </ThemeProvider>
        </>
    );
};

export default App;