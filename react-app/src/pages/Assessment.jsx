import { useParams, useNavigate } from 'react-router-dom';
import templates from '../data/templates';

export default function Assessment() {
  const { templateId } = useParams();
  const navigate = useNavigate();
  
  const template = templates.find(t => t.id === templateId);
  
  if (!template) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Template not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <button 
          onClick={() => navigate('/')}
          className="mb-8 text-blue-500 hover:text-blue-600 flex items-center gap-2"
        >
          ← Back to Templates
        </button>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
          <div className="text-6xl mb-4">{template.icon}</div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            {template.name} - Assessment
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{template.desc}</p>
          
          {template.aiSuggestions.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">AI Suggestions:</h3>
              <div className="flex flex-wrap gap-2">
                {template.aiSuggestions.map((suggestion) => (
                  <span key={suggestion} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium">
                    {suggestion}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {template.complexity && (
            <div className="mb-6">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Complexity: </span>
              <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                template.complexity === 'Low' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                template.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
              }`}>
                {template.complexity}
              </span>
            </div>
          )}
          
          <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Assessment form coming soon...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
