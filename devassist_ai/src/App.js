import React, { useState } from 'react';
import './App.css';

/**
 * DevAssist AI - Main Container
 * Application layout:
 *   - Sidebar for AI feature input
 *   - Tabbed Main Workspace with stubbed panels:
 *      [Structure, Code, Component Tree, Suggestions, Tests]
 *   - Dark theme and custom color scheme applied
 */

// PUBLIC_INTERFACE
function App() {
  const [activeTab, setActiveTab] = useState('structure');
  const [featureInput, setFeatureInput] = useState('');
  const [submittedFeature, setSubmittedFeature] = useState('');

  // Tab metadata
  const TABS = [
    { id: 'structure', label: 'Structure' },
    { id: 'code', label: 'Code' },
    { id: 'tree', label: 'Component Tree' },
    { id: 'suggestions', label: 'Suggestions' },
    { id: 'tests', label: 'Tests' }
  ];

  // Tab Placeholder Rendering
  function renderTabContent() {
    switch (activeTab) {
      case 'structure':
        return (
          <PanelPlaceholder
            title="File/Folder Structure"
            description="AI-generated suggested file and component structure will appear here."
            icon="📁"
          />
        );
      case 'code':
        return (
          <PanelPlaceholder
            title="React Code Templates"
            description="Generated React JSX and CSS/Styled Components will display here."
            icon="💻"
          />
        );
      case 'tree':
        return (
          <PanelPlaceholder
            title="Component Tree"
            description="A visual representation of the component hierarchy will be shown here."
            icon="🌳"
          />
        );
      case 'suggestions':
        return (
          <PanelPlaceholder
            title="Code Suggestions"
            description="AI improvement suggestions for best practices and maintainability will be listed here."
            icon="✨"
          />
        );
      case 'tests':
        return (
          <PanelPlaceholder
            title="Test Cases"
            description="Auto-generated Jest/RTL tests for your components will appear here."
            icon="🧪"
          />
        );
      default:
        return null;
    }
  }

  // Handle Feature Submission (stub)
  function handleFeatureSubmit(e) {
    e.preventDefault();
    setSubmittedFeature(featureInput.trim());
  }

  return (
    <div className="app devassist-root">
      {/* Navbar */}
      <nav className="navbar devassist-navbar">
        <div className="navbar-section logo" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span className="logo-symbol" role="img" aria-label="spark">⚡</span> <span>DevAssist AI</span>
        </div>
        <div className="navbar-section" style={{ color: 'var(--text-secondary)' }}>
          <span style={{ fontSize: '0.95rem', letterSpacing: '0.5px' }}>AI-Powered DevTool Copilot</span>
        </div>
      </nav>

      {/* Main Layout: Sidebar + Workspace */}
      <div className="devassist-layout">
        {/* Sidebar */}
        <aside className="devassist-sidebar">
          <form className="feature-form" onSubmit={handleFeatureSubmit}>
            <label htmlFor="feature-input" className="feature-label">
              <span role="img" aria-label="idea" style={{ marginRight: 5 }}>💡</span>
              Describe a feature
            </label>
            <textarea
              id="feature-input"
              className="feature-input"
              rows={3}
              value={featureInput}
              onChange={e => setFeatureInput(e.target.value)}
              placeholder="e.g. Login form with email+password"
              autoFocus
            />
            <button type="submit" className="btn devassist-btn" disabled={!featureInput.trim()}>
              Generate
            </button>
          </form>
          {submittedFeature && (
            <div className="sidebar-feature-summary">
              <div className="sidebar-feature-title">Current Feature:</div>
              <div className="sidebar-feature-desc">{submittedFeature}</div>
            </div>
          )}
          <div className="sidebar-divider" />
          <nav className="sidebar-nav">
            <div className="sidebar-nav-title">Workspace Tabs</div>
            <ul>
              {TABS.map(tab => (
                <li key={tab.id}>
                  <button
                    className={`sidebar-tab-btn${activeTab === tab.id ? ' active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Workspace */}
        <section className="devassist-workspace">
          <div className="workspace-tabs">
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={`workspace-tab-btn${activeTab === tab.id ? ' active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                tabIndex={0}
              >{tab.label}</button>
            ))}
          </div>
          <div className="workspace-panel">
            {renderTabContent()}
          </div>
        </section>
      </div>
    </div>
  );
}

/**
 * PanelPlaceholder
 * Props: title, description, icon
 * Simple styled placeholder for tab panels
 */
// PUBLIC_INTERFACE
function PanelPlaceholder({ title, description, icon }) {
  return (
    <div className="panel-placeholder">
      <div className="panel-icon" aria-hidden>
        {icon}
      </div>
      <h2 className="panel-title">{title}</h2>
      <p className="panel-desc">{description}</p>
    </div>
  );
}

export default App;
