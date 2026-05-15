import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import templates from '../data/templates';

export default function TemplateSelection() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  const handleSelect = (id) => {
    setSelected(id);
    setTimeout(() => navigate(`/assessment/${id}`), 300);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          AI Transformation Blueprint
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Discover the most effective and cost-efficient path for your AI transformation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((t) => (
          <div
            key={t.id}
            onClick={() => handleSelect(t.id)}
            className={`p-6 rounded-xl border-2 cursor-pointer transition-all hover:shadow-lg ${
              selected === t.id
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
            }`}
          >
            <div className="text-4xl mb-4">{t.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {t.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{t.desc}</p>
            {t.suggestedUseCases.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {t.suggestedUseCases.slice(0, 3).map((useCase) => (
                  <span key={useCase} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-600 dark:text-gray-300">
                    {useCase}
                  </span>
                ))}
              </div>
            )}
            {t.aiSuggestions.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 mr-1">AI Suggestions:</span>
                {t.aiSuggestions.map((suggestion) => (
                  <span key={suggestion} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                    {suggestion}
                  </span>
                ))}
              </div>
            )}
            {t.complexity && (
              <div className="mt-2">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">Complexity: </span>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  t.complexity === 'Low' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                  t.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                  'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                }`}>
                  {t.complexity}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">
        Your data is not stored. Secure processing.
      </p>
    </div>
  );
}
