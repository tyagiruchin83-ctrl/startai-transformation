import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TemplateSelection from './pages/TemplateSelection';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Routes>
          <Route path="/" element={<TemplateSelection />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
