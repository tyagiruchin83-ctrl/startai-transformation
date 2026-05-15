const templates = [
  {
    id: 'customer-support',
    name: 'Customer Support AI',
    icon: '🎧',
    desc: 'Automate ticket routing, responses, and escalation',
    suggestedUseCases: ['Ticket routing', 'Auto-responses', 'Sentiment analysis', 'Escalation prediction'],
    aiSuggestions: ['Likely RPA candidate', 'Potential Agentic workflow'],
    complexity: 'Low'
  },
  {
    id: 'invoice',
    name: 'Invoice Automation',
    icon: '📄',
    desc: 'OCR + LLM for invoice processing',
    suggestedUseCases: ['Data extraction', 'Validation', 'Approval workflow', 'Fraud detection'],
    aiSuggestions: ['Requires OCR + LLM', 'Likely RPA candidate'],
    complexity: 'Medium'
  },
  {
    id: 'hr',
    name: 'HR Copilot',
    icon: '👥',
    desc: 'Employee self-service, policy Q&A',
    suggestedUseCases: ['Policy Q&A', 'Leave requests', 'Onboarding', 'Performance reviews'],
    aiSuggestions: ['Potential Agentic workflow', 'Likely RPA candidate'],
    complexity: 'Low'
  },
  {
    id: 'sales',
    name: 'Sales AI Agent',
    icon: '📈',
    desc: 'Lead qualification, follow-ups',
    suggestedUseCases: ['Lead scoring', 'Email follow-ups', 'Meeting scheduling', 'CRM updates'],
    aiSuggestions: ['Potential Agentic workflow', 'Likely RPA candidate'],
    complexity: 'Medium'
  },
  {
    id: 'knowledge',
    name: 'Knowledge Assistant',
    icon: '📚',
    desc: 'Company wiki Q&A, document search',
    suggestedUseCases: ['Document search', 'Q&A system', 'Knowledge base', 'Training materials'],
    aiSuggestions: ['Requires LLM integration', 'Potential Agentic workflow'],
    complexity: 'Medium'
  },
  {
    id: 'compliance',
    name: 'Compliance AI',
    icon: '⚖️',
    desc: 'Regulatory monitoring, risk assessment',
    suggestedUseCases: ['Risk detection', 'Policy monitoring', 'Audit trails', 'Reporting'],
    aiSuggestions: ['Requires OCR + LLM', 'Potential Agentic workflow'],
    complexity: 'High'
  },
  {
    id: 'custom',
    name: 'Custom Assessment',
    icon: '⚙️',
    desc: 'Build a tailored assessment for your unique use case',
    suggestedUseCases: [],
    aiSuggestions: [],
    complexity: 'Medium'
  }
];

export default templates;
