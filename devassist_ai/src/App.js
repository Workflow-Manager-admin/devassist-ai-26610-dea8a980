import React, { useState } from 'react';
import './index.css'; // Tailwind CSS import

/**
 * DevAssist AI - Main Container (Tailwind Version)
 * Application layout:
 *   - Sidebar for AI feature input
 *   - Tabbed Main Workspace with stubbed panels:
 *      [Structure, Code, Component Tree, Suggestions, Tests]
 *   - Kavia color scheme and dark mode toggle (Tailwind)
 */

// PUBLIC_INTERFACE
function App() {
  // UI state
  const [activeTab, setActiveTab] = useState('structure');
  const [featureInput, setFeatureInput] = useState('');
  const [submittedFeature, setSubmittedFeature] = useState('');
  const [darkMode, setDarkMode] = useState(true);

  // Set 'dark' class on <html/> for Tailwind dark mode
  React.useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  // Tab metadata
  const TABS = [
    { id: 'structure', label: 'Structure' },
    { id: 'code', label: 'Code' },
    { id: 'tree', label: 'Component Tree' },
    { id: 'suggestions', label: 'Suggestions' },
    { id: 'tests', label: 'Tests' }
  ];

  // Panel stub content
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

  // Kavia colors for quick access
  const kaviaOrange = 'text-kavia-orange dark:text-kavia-orange';
  const sideBg = 'bg-kavia-dark-2 dark:bg-kavia-dark-2';
  const workBg = 'bg-primary dark:bg-primary';

  return (
    <div className="min-h-screen flex flex-col bg-primary dark:bg-primary transition-colors duration-200 font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between h-14 px-6 bg-secondary dark:bg-secondary border-b border-white/10 shadow-kavia transition-colors duration-200 z-20 sticky top-0 w-full">
        <div className="text-xl font-bold flex items-center gap-2 text-white select-none">
          <span className="text-kavia-orange text-2xl font-extrabold">⚡</span>
          <span>DevAssist AI</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline text-white/70 text-sm tracking-wide">AI-Powered DevTool Copilot</span>
          <button
            className={
              "ml-3 rounded-full border border-white/10 px-4 py-1.5 flex items-center gap-2 text-sm " +
              (darkMode
                ? 'bg-kavia-orange text-white hover:bg-orange-500'
                : 'bg-white text-primary font-medium hover:bg-kavia-orange hover:text-white transition')
            }
            onClick={() => setDarkMode(d => !d)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            type="button"
          >
            {darkMode ? (
              <span className="inline-flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m8.485-8.485l-.707.707M4.222 19.778l-.707-.707m0-14.142l.707.707m14.142.707l.707-.707M4 12H3m18 0h-1M6.343 17.657l-.707.707M17.657 6.343l.707-.707" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Dark
              </span>
            ) : (
              <span className="inline-flex items-center">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Light
              </span>
            )}
          </button>
        </div>
      </nav>
      {/* Main Layout */}
      <div className="flex flex-1 min-h-0 h-[calc(100vh-56px)] bg-primary dark:bg-primary transition-colors duration-200">
        {/* Sidebar */}
        <aside className={
          "w-64 min-w-[205px] flex-shrink-0 flex flex-col px-5 py-6 border-r border-white/10 " +
          sideBg + " " + "text-white"
        }>
          <form className="flex flex-col gap-3 mb-6" onSubmit={handleFeatureSubmit}>
            <label htmlFor="feature-input" className="font-medium flex items-center text-accent mb-1">
              <span role="img" aria-label="idea" className="mr-2 text-lg">💡</span>
              Describe a feature
            </label>
            <textarea
              id="feature-input"
              className="rounded-md bg-kavia-dark-3 border border-white/10 py-2.5 px-3 text-base resize-none outline-none text-white placeholder-white/40 focus:border-accent"
              rows={3}
              value={featureInput}
              onChange={e => setFeatureInput(e.target.value)}
              placeholder="e.g. Login form with email+password"
              autoFocus
            />
            <button
              type="submit"
              className="bg-kavia-orange disabled:opacity-40 rounded-md px-4 py-2 font-medium text-white shadow-sm hover:bg-orange-500 transition"
              disabled={!featureInput.trim()}
            >
              Generate
            </button>
          </form>
          {submittedFeature && (
            <div className="mb-5 rounded bg-kavia-dark-4 border border-white/10 py-2 px-3">
              <div className="font-semibold text-accent mb-0.5">Current Feature:</div>
              <div className="text-white/70 text-sm">{submittedFeature}</div>
            </div>
          )}
          <div className="border-t border-white/10 my-3" />
          <nav>
            <div className="uppercase text-xs font-semibold text-white/50 mb-2 ml-1 tracking-wide">Workspace Tabs</div>
            <ul className="p-0 m-0 space-y-1">
              {TABS.map(tab => (
                <li key={tab.id}>
                  <button
                    className={
                      "w-full text-left py-2 px-0 rounded font-medium transition-all duration-150 " +
                      (activeTab === tab.id
                        ? "text-kavia-orange bg-kavia-dark-3"
                        : "text-white hover:text-kavia-orange hover:bg-kavia-dark-3/70")
                    }
                    onClick={() => setActiveTab(tab.id)}
                    type="button"
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        {/* Main Workspace */}
        <section className={"flex-1 flex flex-col min-w-0 " + workBg + " transition"}>
          <div className="flex items-end h-11 px-4 bg-kavia-dark-3 border-b border-white/10 gap-2">
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={
                  "h-9 px-4 rounded-t-md font-medium border-b-2 transition " +
                  (activeTab === tab.id
                    ? "text-kavia-orange border-kavia-orange bg-primary"
                    : "text-white/50 border-transparent hover:text-kavia-orange hover:bg-kavia-dark-4")
                }
                onClick={() => setActiveTab(tab.id)}
                type="button"
                tabIndex={0}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex-1 p-10 pt-8 bg-primary dark:bg-primary overflow-auto">
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
 * Simple placeholder for tab panels
 */
// PUBLIC_INTERFACE
function PanelPlaceholder({ title, description, icon }) {
  return (
    <div className="flex flex-col items-center mt-8 text-center text-white/70">
      <div className="mb-3">
        <span className="text-kavia-orange text-5xl">{icon}</span>
      </div>
      <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
      <p className="max-w-lg text-base text-white/70">{description}</p>
    </div>
  );
}

export default App;
