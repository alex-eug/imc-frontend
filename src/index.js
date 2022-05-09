import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App'
function Home() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
// one alternative to the previous callback method
root.render(<Home />);