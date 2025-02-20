export class UI {
    constructor(app) {
      this.app = app;
    }
  
    showHome() {
      const content = document.getElementById('content');
      if (!content) return;
  
      // Scroll to top when showing home
      window.scrollTo({ top: 0 });
  
      content.innerHTML = `
        <div class="welcome-section">
          <h1>Welcome to JavaScript Fundamentals</h1>
          <p>Master JavaScript through interactive lessons, hands-on exercises, and real-world projects</p>
          
          <div class="author-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
            Course by Shariq Khan
          </div>
          
          <div class="course-info">
            <div class="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              <span>20+ Hours of Content</span>
            </div>
            <div class="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
              <span>1000+ Active Learners</span>
            </div>
            <div class="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>Project-Based Learning</span>
            </div>
          </div>
  
          <div class="course-journey">
            <div class="journey-header">
              <h2>Your Learning Journey</h2>
              <p>Follow this structured path to master JavaScript fundamentals</p>
            </div>
  
            <div class="journey-path">
              ${this.app.state.modules.map((module, index) => `
                <div class="journey-step ${module.completed ? 'completed' : ''} ${this.app.state.currentModule === index ? 'current' : ''}">
                  <div class="step-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      ${this.getModuleIcon(index)}
                    </svg>
                  </div>
                  <div class="step-content">
                    <h3>${module.title}</h3>
                    <p>${this.getModuleDescription(index)}</p>
                    
                    <div class="step-meta">
                      <span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <circle cx="12" cy="12" r="10"/>
                          <polyline points="12 6 12 12 16 14"/>
                        </svg>
                        ${module.duration}
                      </span>
                      <span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                        </svg>
                        ${module.sections.length} Sections
                      </span>
                    </div>
  
                    <button onclick="window.app.state.currentModule = ${index}; window.app.router.navigate('lessons')" class="start-step-btn">
                      ${module.completed ? 'Review Module' : this.app.state.currentModule === index ? 'Continue Module' : 'Start Module'}
                    </button>
  
                    ${module.completed ? `
                      <div class="progress-indicator completed">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                          <polyline points="22 4 12 14.01 9 11.01"/>
                        </svg>
                        Completed
                      </div>
                    ` : `
                      <div class="progress-indicator">
                        <span>Progress:</span>
                        <div class="progress-bar">
                          <div class="progress" style="width: ${this.calculateModuleProgress(index)}%"></div>
                        </div>
                        ${this.calculateModuleProgress(index)}%
                      </div>
                    `}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
  
          <div class="quick-actions">
            <h3>Quick Actions</h3>
            <div class="actions-grid">
              <button class="action-card" onclick="window.app.router.navigate('syllabus')">
                <div class="action-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                  </svg>
                </div>
                <h4>View Syllabus</h4>
                <p>See the complete course outline</p>
              </button>
  
              <button class="action-card" onclick="window.app.router.navigate('quizzes')">
                <div class="action-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/>
                    <line x1="12" y1="17" x2="12" y2="17"/>
                  </svg>
                </div>
                <h4>Take a Quiz</h4>
                <p>Test your knowledge</p>
              </button>
  
              <button class="action-card" onclick="window.app.router.navigate('project')">
                <div class="action-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                    <polyline points="13 2 13 9 20 9"/>
                    <polyline points="13 12 13 17 20 17"/>
                  </svg>
                </div>
                <h4>Start Project</h4>
                <p>Apply your skills in practice</p>
              </button>
            </div>
          </div>
        </div>
      `;
  
      // Update active navigation state
      this.app.router.updateActiveLinks();
    }
  
    showDocs() {
      const content = document.getElementById('content');
      if (!content) return;
  
      window.scrollTo({ top: 0 });
  
      content.innerHTML = `
        <div class="documentation-container">
          <div class="docs-header">
            <h1>JavaScript Course Platform Documentation</h1>
            <p>Complete technical documentation and implementation details</p>
            <div class="author-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              Documentation by Shariq Khan
            </div>
          </div>
  
          <nav class="docs-navigation">
            <div class="docs-nav-item">
              <a href="#overview">Overview</a>
              <a href="#architecture">Architecture</a>
              <a href="#components">Components</a>
              <a href="#features">Features</a>
              <a href="#api">API Reference</a>
              <a href="#deployment">Deployment</a>
            </div>
          </nav>
  
          <section id="overview" class="docs-section">
            <h2>Project Overview</h2>
            <p>An interactive JavaScript learning platform featuring:</p>
            <div class="tech-stack">
              <h3>Technology Stack</h3>
              <ul>
                <li>Vanilla JavaScript (ES6+)</li>
                <li>CSS3 with Modern Layout Features</li>
                <li>HTML5 Semantic Elements</li>
                <li>ACE Code Editor Integration</li>
                <li>Client-side Routing</li>
                <li>Local Storage for Progress Tracking</li>
              </ul>
            </div>
          </section>
  
          <section id="architecture" class="docs-section">
            <h2>Architecture</h2>
            <p>The application follows a modular architecture with clear separation of concerns:</p>
            <div class="component-item">
              <h4>Core Modules</h4>
              <ul>
                <li>App.js - Main application orchestrator</li>
                <li>Router.js - Client-side routing implementation</li>
                <li>UI.js - User interface and view management</li>
                <li>State.js - Course state and progress management</li>
                <li>Editor.js - Code editor implementation</li>
                <li>Chatbot.js - AI learning assistant</li>
              </ul>
            </div>
          </section>
  
          <section id="components" class="docs-section">
            <h2>Key Components</h2>
            
            <div class="component-item">
              <h4>CodeEditor Class</h4>
              <p>Provides an interactive coding environment with:</p>
              <ul>
                <li>Syntax highlighting</li>
                <li>Code execution sandbox</li>
                <li>Error handling and feedback</li>
                <li>Exercise management</li>
              </ul>
              <code>
  // Example usage:
  const editor = new CodeEditor();
  editor.initialize('editor-container');
  editor.setValue(code);
  editor.runCode();
              </code>
            </div>
  
            <div class="component-item">
              <h4>CourseState Class</h4>
              <p>Manages course progress and user state:</p>
              <ul>
                <li>Module completion tracking</li>
                <li>Quiz progress and scoring</li>
                <li>Learning analytics</li>
                <li>Time tracking</li>
              </ul>
              <code>
  // Example usage:
  const state = new CourseState();
  state.completeModule(moduleId);
  state.startQuiz(quizId);
  state.updateProgress();
              </code>
            </div>
          </section>
  
          <section id="features" class="docs-section">
            <h2>Feature Documentation</h2>
            
            <div class="feature-list">
              <h3>Learning Features</h3>
              <ul>
                <li>Interactive Code Exercises</li>
                <li>Real-time Code Execution</li>
                <li>Progress Tracking</li>
                <li>AI Learning Assistant</li>
                <li>Module-based Learning Path</li>
                <li>Assessment System</li>
              </ul>
            </div>
  
            <div class="component-item">
              <h4>Progress Tracking</h4>
              <p>Implementation details for course progress tracking:</p>
              <code>
  // Progress tracking implementation
  this.progress = {
    completed: 0,
    total: totalModules,
    moduleScores: {},
    timeSpent: {}
  };
  
  // Save progress
  localStorage.setItem('courseProgress', JSON.stringify(this.progress));
              </code>
            </div>
          </section>
  
          <section id="api" class="docs-section">
            <h2>API Reference</h2>
            
            <div class="api-docs">
              <h3>Course State API</h3>
              <code>
  // Course State Management
  completeModule(moduleId: string): void
  startQuiz(quizId: string): boolean
  submitQuizAnswer(questionIndex: number, answerIndex: number): Result
  updateProgress(): void
  calculateCompetency(score: number): string
              </code>
  
              <h3>Router API</h3>
              <code>
  // Routing System
  addRoute(path: string, handler: Function): void
  navigate(path: string): void
  handleRoute(path: string): void
  updateActiveLinks(): void
              </code>
            </div>
          </section>
  
          <section id="deployment" class="docs-section">
            <h2>Deployment Guide</h2>
            
            <div class="data-flow">
              <h3>Project Structure</h3>
              <ol>
                <li>index.html - Main entry point</li>
                <li>js/ - JavaScript modules</li>
                <li>css/ - Stylesheets</li>
                <li>assets/ - Static assets</li>
              </ol>
  
              <h3>Development Setup</h3>
              <code>
  // Local development server required
  // Example using Python:
  python -m http.server 8000
  
  // Or using Node.js:
  npx serve
              </code>
            </div>
          </section>
        </div>
      `;
  
      // Setup smooth scrolling and active section highlighting
      const setupDocsNavigation = () => {
        const sections = document.querySelectorAll('.docs-section');
        const navLinks = document.querySelectorAll('.docs-nav-item a');
  
        // Add click handlers to nav links
        navLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Get target section
            const targetId = link.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
              // Account for fixed header height (adjust 80 to match your header height)
              const headerOffset = 80;
              const elementPosition = targetSection.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          });
        });
  
        // Update active section on scroll
        const updateActiveSection = () => {
          let currentSection = '';
          
          sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= (sectionTop - 100)) {
              currentSection = section.getAttribute('id');
            }
          });
  
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === currentSection) {
              link.classList.add('active');
            }
          });
        };
  
        window.addEventListener('scroll', updateActiveSection);
      };
  
      // Call setup after a short delay to ensure DOM is ready
      setTimeout(setupDocsNavigation, 100);
  
      // Update active navigation state
      this.app.router.updateActiveLinks();
    }
  
    showProfile() {
      const content = document.getElementById('content');
      if (!content) return;
  
      window.scrollTo({ top: 0 });
  
      // Get user data
      const user = this.app.auth.getCurrentUser();
      const userProgress = this.app.state.userProgress;
      const competencyFeedback = this.app.state.getCompetencyFeedback();
  
      content.innerHTML = `
        <div class="profile-container">
          <div class="profile-header">
            <div class="profile-info">
              <img 
                src="${user.avatar}" 
                alt="${user.name}'s avatar" 
                class="profile-avatar"
              >
              <div class="profile-details">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
              </div>
            </div>
  
            <div class="profile-stats">
              <div class="stat">
                <strong>${userProgress.quizzesTaken}</strong>
                <span>Quizzes Completed</span>
              </div>
              <div class="stat">
                <strong>${Math.round(userProgress.averageScore)}%</strong>
                <span>Average Score</span>
              </div>
              <div class="stat">
                <strong>${userProgress.currentCompetency}</strong>
                <span>Competency Level</span>
              </div>
            </div>
          </div>
  
          <div class="learning-analytics">
            <div class="overall-progress">
              <div class="progress-circle" style="--progress: ${userProgress.averageScore}">
                <span>${Math.round(userProgress.averageScore)}%</span>
              </div>
              <div class="progress-details">
                <h4>Overall Progress</h4>
                <p>Target Competency: ${userProgress.desiredCompetency}</p>
                <p>Current Level: ${userProgress.currentCompetency}</p>
                <p>Passing Score: ${userProgress.passingScore}%</p>
              </div>
            </div>
  
            <div class="analytics-section">
              <h3>Learning Strengths</h3>
              <div class="module-performance-grid">
                ${competencyFeedback.strengths.map(strength => `
                  <div class="module-performance-card">
                    <div class="module-icon">✓</div>
                    <div class="module-details">
                      <h4>${strength.text}</h4>
                      <p>${strength.detail}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
  
            <div class="analytics-section">
              <h3>Areas for Improvement</h3>
              <div class="module-performance-grid">
                ${competencyFeedback.improvements.map(improvement => `
                  <div class="module-performance-card">
                    <div class="module-icon">↑</div>
                    <div class="module-details">
                      <h4>${improvement.text}</h4>
                      <p>${improvement.detail}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
  
            <div class="analytics-section">
              <h3>Study Time by Module</h3>
              <div class="module-performance-grid">
                ${this.app.state.modules.map(module => `
                  <div class="module-performance-card">
                    <div class="module-icon">${module.id + 1}</div>
                    <div class="module-details">
                      <h4>${module.title}</h4>
                      <div class="performance-metrics">
                        <div class="metric">
                          <span class="label">Time Spent</span>
                          <span class="value">${this.app.state.formatTimeSpent(this.app.state.getModuleTimeSpent(module.id))}</span>
                        </div>
                        <div class="metric">
                          <span class="label">Progress</span>
                          <span class="value">${this.calculateModuleProgress(module.id)}%</span>
                        </div>
                      </div>
                      <div class="progress-bar">
                        <div class="progress" style="width: ${this.calculateModuleProgress(module.id)}%"></div>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
  
            <div class="analytics-section">
              <h3>Recommendations</h3>
              <div class="module-performance-grid">
                ${competencyFeedback.nextSteps.map(step => `
                  <div class="module-performance-card">
                    <div class="module-icon">→</div>
                    <div class="module-details">
                      <h4>${step.text}</h4>
                      <p>${step.detail}</p>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
  
          <div class="profile-actions">
            <button class="action-btn primary" onclick="window.app.router.navigate('lessons')">
              Continue Learning
            </button>
            <button class="action-btn" onclick="window.app.router.navigate('quizzes')">
              Practice Quizzes
            </button>
          </div>
  
          <div class="newsletter-container">
            <h3>Weekly JavaScript Learning Resources</h3>
            <p>Get personalized learning recommendations, new tutorials, and coding challenges delivered to your inbox every week.</p>
            <form class="newsletter-form" onsubmit="return window.app.ui.subscribeNewsletter(event)">
              <input type="email" placeholder="Enter your email address" required>
              <button type="submit">Subscribe to Newsletter</button>
            </form>
            <div class="newsletter-success">Thanks for subscribing! Check your email to confirm.</div>
            <div class="newsletter-error">Oops! Something went wrong. Please try again.</div>
          </div>
        </div>
      `;
  
      // Update active navigation state
      this.app.router.updateActiveLinks();
    }
  
    subscribeNewsletter(event) {
      event.preventDefault();
      const form = event.target;
      const email = form.querySelector('input[type="email"]').value;
      const successMsg = form.parentElement.querySelector('.newsletter-success');
      const errorMsg = form.parentElement.querySelector('.newsletter-error');
  
      // Reset messages
      successMsg.style.display = 'none';
      errorMsg.style.display = 'none';
  
      // Simulate API call to subscribe
      fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      })
      .then(response => {
        if (response.ok) {
          form.reset();
          successMsg.style.display = 'block';
          setTimeout(() => {
            successMsg.style.display = 'none';
          }, 5000);
        } else {
          throw new Error('Subscription failed');
        }
      })
      .catch(error => {
        console.error('Newsletter subscription error:', error);
        errorMsg.style.display = 'block';
        setTimeout(() => {
          errorMsg.style.display = 'none';
        }, 5000);
      });
  
      return false;
    }
  
    showProject() {
      const content = document.getElementById('content');
      if (!content) return;
  
      window.scrollTo({ top: 0 });
  
      content.innerHTML = `
        <div class="project-content">
          <div class="project-header">
            <h2>Course Project: Build a JavaScript Learning Platform</h2>
            <p>Apply your JavaScript knowledge by creating an interactive learning platform similar to this one.</p>
          </div>
  
          <div class="project-goals">
            <h3>Project Goals</h3>
            <ul>
              <li>
                <div class="goal-icon">🎯</div>
                <div>
                  <strong>Create an Interactive Learning Experience</strong>
                  <p>Build a platform that helps others learn JavaScript through hands-on coding exercises and quizzes.</p>
                </div>
              </li>
              <li>
                <div class="goal-icon">⚡</div>
                <div>
                  <strong>Apply Modern JavaScript Concepts</strong>
                  <p>Implement ES6+ features, modular architecture, and best practices in your code.</p>
                </div>
              </li>
              <li>
                <div class="goal-icon">🔄</div>
                <div>
                  <strong>State Management</strong>
                  <p>Create a robust state management system for tracking user progress and course content.</p>
                </div>
              </li>
            </ul>
          </div>
  
          <div class="project-description">
            <div class="key-features">
              <h4>Key Features to Implement</h4>
              <ul>
                <li>
                  <strong>Course Content Management</strong>
                  <p>Create a system to organize and display learning materials, including:</p>
                  <ul>
                    <li>Module organization</li>
                    <li>Progress tracking</li>
                    <li>Content navigation</li>
                  </ul>
                </li>
                <li>
                  <strong>Interactive Code Editor</strong>
                  <p>Implement a code editor with:</p>
                  <ul>
                    <li>Syntax highlighting</li>
                    <li>Code execution</li>
                    <li>Real-time feedback</li>
                  </ul>
                </li>
                <li>
                  <strong>Progress Tracking System</strong>
                  <p>Develop a comprehensive progress tracking system:</p>
                  <ul>
                    <li>Module completion status</li>
                    <li>Quiz scores</li>
                    <li>Learning analytics</li>
                  </ul>
                </li>
              </ul>
            </div>
  
            <div class="technical-requirements">
              <h4>Technical Requirements</h4>
              <ul>
                <li>
                  <strong>Modular Architecture</strong>
                  <p>Organize code using ES6 modules:</p>
                  <div class="code-snippet">
                    <pre><code>
  // Example module structure
  - app.js       // Main application
  - router.js    // Client-side routing
  - state.js     // State management
  - ui.js        // UI components
  - editor.js    // Code editor
  - chatbot.js   // AI assistant
                    </code></pre>
                  </div>
                </li>
                <li>
                  <strong>State Management</strong>
                  <p>Implement a robust state management system:</p>
                  <div class="code-snippet">
                    <pre><code>
  class CourseState {
    constructor() {
      this.modules = [];
      this.progress = {};
      this.currentModule = 0;
    }
  
    updateProgress(moduleId, status) {
      // Update progress
    }
  
    saveState() {
      // Persist to localStorage
    }
  }
                    </code></pre>
                  </div>
                </li>
              </ul>
            </div>
          </div>
  
          <div class="project-workspace">
            <div class="workspace-tabs">
              <button class="workspace-tab active" data-editor="html">HTML</button>
              <button class="workspace-tab" data-editor="css">CSS</button>
              <button class="workspace-tab" data-editor="javascript">JavaScript</button>
            </div>
  
            <div class="split-view">
              <div class="editors-container">
                <div id="htmlEditor" class="editor-pane"></div>
                <div id="cssEditor" class="editor-pane" style="display: none;"></div>
                <div id="jsEditor" class="editor-pane" style="display: none;"></div>
              </div>
              <div class="preview-pane">
                <iframe id="previewFrame"></iframe>
              </div>
            </div>
  
            <div class="workspace-toolbar">
              <div class="toolbar-actions">
                <button class="action-btn primary" onclick="window.app.ui.runPreview()">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                  Run Preview
                </button>
                <button class="action-btn secondary" onclick="window.app.ui.resetEditors()">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M2.5 2v6h6M21.5 22v-6h-6"/>
                    <path d="M22 11.5A10 10 0 0 0 3.2 7.2M2 12.5a10 10 0 0 0 18.8 4.2"/>
                  </svg>
                  Reset
                </button>
              </div>
            </div>
          </div>
  
          <div class="evaluation-matrix">
            <div class="evaluation-category">
              <h4>Functionality (40%)</h4>
              <ul class="criteria-list">
                <li>All core features working correctly</li>
                <li>Proper error handling</li>
                <li>Smooth user experience</li>
                <li>Performance optimization</li>
              </ul>
            </div>
  
            <div class="evaluation-category">
              <h4>Code Quality (30%)</h4>
              <ul class="criteria-list">
                <li>Clean, readable code</li>
                <li>Proper documentation</li>
                <li>Modern JavaScript practices</li>
                <li>Modular architecture</li>
              </ul>
            </div>
  
            <div class="evaluation-category">
              <h4>Innovation (30%)</h4>
              <ul class="criteria-list">
                <li>Creative solutions</li>
                <li>Additional features</li>
                <li>User experience enhancements</li>
                <li>Visual design improvements</li>
              </ul>
            </div>
          </div>
  
          <div class="submission-guidelines">
            <h4>Submission Requirements</h4>
            <div class="guidelines-list">
              <div class="guideline-item">
                <h4>Code Repository</h4>
                <p>Submit your project through a GitHub repository with:</p>
                <ul>
                  <li>Complete source code</li>
                  <li>README documentation</li>
                  <li>Setup instructions</li>
                </ul>
              </div>
  
              <div class="guideline-item">
                <h4>Documentation</h4>
                <p>Include detailed documentation covering:</p>
                <ul>
                  <li>Project structure</li>
                  <li>Features implementation</li>
                  <li>Technical decisions</li>
                </ul>
              </div>
  
              <div class="guideline-item">
                <h4>Presentation</h4>
                <p>Prepare a presentation showcasing:</p>
                <ul>
                  <li>Key features demo</li>
                  <li>Technical highlights</li>
                  <li>Learning outcomes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `;
  
      // Initialize the editors
      setTimeout(() => {
        // Initialize HTML editor
        const htmlEditor = ace.edit('htmlEditor');
        htmlEditor.setTheme('ace/theme/monokai');
        htmlEditor.session.setMode('ace/mode/html');
        htmlEditor.setValue(this.app.editor.getBoilerplateCode('html'));
        htmlEditor.setOptions({
          fontSize: '14px',
          showPrintMargin: false,
          showGutter: true,
          highlightActiveLine: true,
          enableLiveAutocompletion: true
        });
  
        // Initialize CSS editor
        const cssEditor = ace.edit('cssEditor');
        cssEditor.setTheme('ace/theme/monokai');
        cssEditor.session.setMode('ace/mode/css');
        cssEditor.setValue(this.app.editor.getBoilerplateCode('css'));
        cssEditor.setOptions({
          fontSize: '14px',
          showPrintMargin: false,
          showGutter: true,
          highlightActiveLine: true,
          enableLiveAutocompletion: true
        });
  
        // Initialize JavaScript editor
        const jsEditor = ace.edit('jsEditor');
        jsEditor.setTheme('ace/theme/monokai');
        jsEditor.session.setMode('ace/mode/javascript');
        jsEditor.setValue(this.app.editor.getBoilerplateCode('javascript'));
        jsEditor.setOptions({
          fontSize: '14px',
          showPrintMargin: false,
          showGutter: true,
          highlightActiveLine: true,
          enableLiveAutocompletion: true
        });
  
        // Store editors for later use
        this.editors = {
          html: htmlEditor,
          css: cssEditor,
          js: jsEditor
        };
  
        // Set up tab switching
        const editorContainers = {
          html: document.getElementById('htmlEditor'),
          css: document.getElementById('cssEditor'),
          javascript: document.getElementById('jsEditor')
        };
  
        // Show HTML editor by default
        Object.values(editorContainers).forEach(container => {
          if (container) container.style.display = 'none';
        });
        editorContainers.html.style.display = 'block';
  
        // Add tab switching functionality
        document.querySelectorAll('.workspace-tab').forEach(tab => {
          tab.addEventListener('click', () => {
            const editorType = tab.dataset.editor;
            
            // Update active tab
            document.querySelectorAll('.workspace-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
  
            // Show selected editor
            Object.entries(editorContainers).forEach(([type, container]) => {
              if (container) {
                container.style.display = type === editorType ? 'block' : 'none';
              }
            });
          });
        });
  
        // Handle "Run Preview" button
        document.querySelector('.action-btn.primary').addEventListener('click', () => {
          const previewFrame = document.getElementById('previewFrame');
          const preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
          
          preview.open();
          preview.write(`
            ${htmlEditor.getValue()}
            <style>${cssEditor.getValue()}</style>
            <script>${jsEditor.getValue()}</script>
          `);
          preview.close();
        });
      }, 100);
  
      // Update active navigation state
      this.app.router.updateActiveLinks();
    }
  
    runPreview() {
      const html = this.editors.html.getValue();
      const css = this.editors.css.getValue();
      const js = this.editors.js.getValue();
  
      const previewFrame = document.getElementById('previewFrame');
      const preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
  
      // Write the combined code to the iframe
      preview.open();
      preview.write(`
        ${html}
        <style>${css}</style>
        <script>${js}</script>
      `);
      preview.close();
    }
  
    resetEditors() {
      if (confirm('Are you sure you want to reset all editors to their default state?')) {
        this.editors.html.setValue(this.app.editor.getBoilerplateCode('html'));
        this.editors.css.setValue(this.app.editor.getBoilerplateCode('css'));
        this.editors.js.setValue(this.app.editor.getBoilerplateCode('javascript'));
      }
    }
  
    showQuizzes() {
      const content = document.getElementById('content');
      if (!content) return;
  
      window.scrollTo({ top: 0 });
  
      // Get user progress and quiz data
      const userProgress = this.app.state.userProgress;
      const quizzes = this.app.state.quizzes;
  
      content.innerHTML = `
        <div class="quiz-content">
          <div class="quiz-header">
            <h2>Module Quizzes</h2>
            <p>Test your understanding of each module's content. Complete quizzes to track your progress.</p>
          </div>
  
          <div class="quiz-list">
            ${Object.entries(quizzes).map(([moduleId, quiz]) => {
              const moduleScore = userProgress.moduleScores[moduleId] || 0;
              const hasAttempted = moduleScore > 0;
              const hasPassed = moduleScore >= userProgress.passingScore;
              
              return `
                <div class="quiz-card">
                  <div class="quiz-card-header">
                    <h3>${quiz.title}</h3>
                    ${hasAttempted ? `
                      <span class="quiz-grade-badge ${hasPassed ? 'passed' : 'failed'}">
                        ${moduleScore}%
                      </span>
                    ` : ''}
                  </div>
  
                  <div class="quiz-info">
                    <div class="quiz-stat">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      ${quiz.questions.length} Questions
                    </div>
                    <div class="quiz-stat">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                        <polyline points="22 4 12 14.01 9 11.01"/>
                      </svg>
                      ${hasPassed ? 'Passed' : hasAttempted ? 'Attempted' : 'Not Started'}
                    </div>
                  </div>
  
                  <p>Test your knowledge of ${this.app.state.modules[moduleId]?.title || 'this module'}.</p>
  
                  <button 
                    onclick="window.app.state.startQuiz(${moduleId}); window.app.ui.showQuizQuestion();"
                    class="start-quiz-btn"
                  >
                    ${hasAttempted ? 'Retake Quiz' : 'Start Quiz'}
                  </button>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }
  
    showQuizQuestion() {
      const content = document.getElementById('content');
      if (!content) return;
  
      const quiz = this.app.state.quizzes[this.app.state.currentQuiz];
      if (!quiz) {
        console.warn('No quiz selected');
        return;
      }
  
      // Find first unanswered question
      const currentQuestionIndex = quiz.questions.findIndex(q => !q.answered);
      if (currentQuestionIndex === -1) {
        // All questions answered, show results
        this.showQuizResults();
        return;
      }
  
      const question = quiz.questions[currentQuestionIndex];
      const questionNumber = currentQuestionIndex + 1;
      const attemptsLeft = question.maxAttempts - question.attempts;
  
      content.innerHTML = `
        <div class="quiz-content">
          <div class="quiz-question">
            <div class="quiz-header">
              <h3>Question ${questionNumber} of ${quiz.questions.length}</h3>
              <div class="quiz-meta">
                <div class="attempts-left">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  Attempts left: ${attemptsLeft}
                </div>
                <div class="points-available">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                  Points available: ${question.attempts === 0 ? 2 : 1}
                </div>
              </div>
            </div>
            
            <p>${question.question}</p>
  
            <div class="quiz-options">
              ${question.options.map((option, index) => `
                <div class="quiz-option" onclick="window.app.ui.submitAnswer(${currentQuestionIndex}, ${index})">
                  <input 
                    type="radio" 
                    name="q${questionNumber}" 
                    id="q${questionNumber}o${index}"
                    ${question.answered || question.attempts >= question.maxAttempts ? 'disabled' : ''}
                  >
                  <label for="q${questionNumber}o${index}">${option}</label>
                </div>
              `).join('')}
            </div>
  
            <div id="feedback-${currentQuestionIndex}" class="quiz-feedback" style="display: none;"></div>
            
            ${attemptsLeft === 0 && !question.answered ? `
              <div class="review-material">
                <p>Out of attempts. Review the related material before moving on:</p>
                <button onclick="window.app.ui.showRelevantContent(${this.app.state.currentQuiz}, ${currentQuestionIndex})" class="review-btn">
                  Review Material
                </button>
              </div>
            ` : ''}
  
            <div class="quiz-progress">
              <div class="progress-bar">
                <div class="progress" style="width: ${(questionNumber / quiz.questions.length) * 100}%"></div>
              </div>
              <span class="progress-text">Question ${questionNumber} of ${quiz.questions.length}</span>
            </div>
          </div>
  
          <div class="quiz-navigation">
            <button 
              onclick="window.app.ui.showQuizzes()"
              class="back-to-quizzes-btn"
            >
              Back to Quizzes
            </button>
          </div>
        </div>
      `;
    }
  
    submitAnswer(questionIndex, answerIndex) {
      const result = this.app.state.submitQuizAnswer(questionIndex, answerIndex);
      const feedbackElement = document.getElementById(`feedback-${questionIndex}`);
      
      if (feedbackElement) {
        feedbackElement.innerHTML = `
          <h4>${result.isCorrect ? 'Correct!' : 'Incorrect'}</h4>
          <p>${result.explanation}</p>
          ${result.points ? `<div class="points">+${result.points} points</div>` : ''}
          ${!result.isCorrect && result.canRetry ? `
            <p class="retry-info">You have ${result.attemptsLeft} attempt${result.attemptsLeft === 1 ? '' : 's'} left.</p>
          ` : ''}
        `;
        feedbackElement.className = `quiz-feedback ${result.isCorrect ? 'correct' : 'incorrect'}`;
        feedbackElement.style.display = 'block';
      }
  
      // Update option styling
      const options = document.querySelectorAll('.quiz-option');
      options.forEach((option, index) => {
        option.classList.remove('selected-correct', 'selected-incorrect', 'correct-answer');
        
        if (index === answerIndex) {
          option.classList.add(result.isCorrect ? 'selected-correct' : 'selected-incorrect');
        }
        
        if (!result.isCorrect && !result.canRetry && index === this.app.state.quizzes[this.app.state.currentQuiz].questions[questionIndex].correct) {
          option.classList.add('correct-answer');
        }
      });
  
      // Disable options if no more attempts or correct answer
      if (!result.canRetry || result.isCorrect) {
        const inputs = document.querySelectorAll('input[type="radio"]');
        inputs.forEach(input => input.disabled = true);
      }
  
      // Show next question after delay if answer is correct or no more attempts
      if (result.isCorrect || !result.canRetry) {
        setTimeout(() => {
          this.showQuizQuestion();
        }, 2000);
      }
    }
  
    showQuizResults() {
      const content = document.getElementById('content');
      if (!content) return;
  
      const quiz = this.app.state.quizzes[this.app.state.currentQuiz];
      const competencyLevel = this.app.state.calculateCompetency(quiz.grade);
      const passingScore = this.app.state.userProgress.passingScore;
      const passed = quiz.grade >= passingScore;
  
      content.innerHTML = `
        <div class="quiz-content">
          <div class="quiz-completion">
            <h2>Quiz Complete!</h2>
            
            <div class="quiz-grade">
              <h4>Your Score</h4>
              <div class="grade-circle ${passed ? 'passed' : 'failed'}" style="--progress: ${quiz.grade}">
                <span>${quiz.grade}%</span>
              </div>
              <p class="competency-level">Competency Level: ${competencyLevel}</p>
              <p class="pass-status ${passed ? 'passed' : 'failed'}">
                ${passed ? 'Congratulations! You passed!' : `You need ${passingScore}% to pass.`}
              </p>
            </div>
  
            <div class="question-breakdown">
              <h4>Question Breakdown</h4>
              ${quiz.questions.map((q, i) => `
                <div class="question-result">
                  <span>Question ${i + 1}:</span>
                  <span class="points">${q.points || 0} points</span>
                  <span class="attempts">Attempts: ${q.attempts}</span>
                </div>
              `).join('')}
            </div>
  
            <div class="completion-actions">
              ${!passed ? `
                <button onclick="window.app.state.resetQuiz(${this.app.state.currentQuiz}); window.app.ui.showQuizQuestion();" class="retry-quiz-btn">
                  Try Again
                </button>
              ` : ''}
              <button onclick="window.app.ui.showQuizzes()" class="back-to-quizzes-btn">
                Back to Quizzes
              </button>
            </div>
          </div>
        </div>
      `;
    }
  
    showLessons() {
      const content = document.getElementById('content');
      if (!content) return;
  
      window.scrollTo({ top: 0 });
  
      const currentModule = this.app.state.modules[this.app.state.currentModule];
      if (!currentModule) {
        console.warn('No current module found');
        return;
      }
  
      content.innerHTML = `
        <div class="lessons-section">
          <div class="lesson-navigation">
            <button class="prev-module-btn" onclick="window.app.state.previousModule()" ${this.app.state.currentModule === 0 ? 'disabled' : ''}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Previous Module
            </button>
            <button class="next-module-btn" onclick="window.app.state.nextModule()" ${this.app.state.currentModule === this.app.state.modules.length - 1 ? 'disabled' : ''}>
              Next Module
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
  
          <div class="lesson-overview">
            <div class="lesson-duration">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              ${currentModule.duration}
            </div>
            <div class="lesson-sections-count">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="8" y1="6" x2="21" y2="6"/>
                <line x1="8" y1="12" x2="21" y2="12"/>
                <line x1="8" y1="18" x2="21" y2="18"/>
                <line x1="3" y1="6" x2="3.01" y2="6"/>
                <line x1="3" y1="12" x2="3.01" y2="12"/>
                <line x1="3" y1="18" x2="3.01" y2="18"/>
              </svg>
              ${currentModule.sections.length} Sections
            </div>
          </div>
  
          ${currentModule.sections.map((section, index) => `
            <div class="lesson-material">
              <h3>${section.title}</h3>
              <div class="lesson-content">
                ${section.content}
              </div>
              
              ${this.app.state.codingChallenges[this.app.state.currentModule]?.[index] ? `
                <div class="coding-challenge">
                  <div class="challenge-header">
                    <h3>${this.app.state.codingChallenges[this.app.state.currentModule][index].title}</h3>
                    <p>${this.app.state.codingChallenges[this.app.state.currentModule][index].description}</p>
                  </div>
                  <div id="exercise-${this.app.state.currentModule}-${index}"></div>
                </div>
              ` : ''}
              
              <button 
                onclick="window.app.state.completeSection(${this.app.state.currentModule}, ${index})"
                class="complete-btn ${currentModule.sectionsCompleted?.includes(index) ? 'completed' : ''}"
                ${currentModule.sectionsCompleted?.includes(index) ? 'disabled' : ''}
              >
                ${currentModule.sectionsCompleted?.includes(index) ? 'Completed' : 'Mark as Complete'}
              </button>
            </div>
          `).join('')}
  
          ${this.app.state.quizzes[this.app.state.currentModule] ? `
            <div class="lesson-material">
              <h3>Module Quiz</h3>
              <p>Test your knowledge of ${currentModule.title}</p>
              <button 
                onclick="window.app.state.startQuiz(${this.app.state.currentModule}); window.app.ui.showQuizQuestion();"
                class="quiz-btn"
              >
                Start Quiz
              </button>
            </div>
          ` : ''}
        </div>
      `;
  
      // Initialize code editor for any coding challenges
      currentModule.sections.forEach((_, index) => {
        if (this.app.state.codingChallenges[this.app.state.currentModule]?.[index]) {
          this.app.editor.showExercise(this.app.state.currentModule, index);
        }
      });
  
      // Start tracking time for this module
      this.app.state.startModuleTimer(this.app.state.currentModule);
  
      // Update active navigation state
      this.app.router.updateActiveLinks();
    }
  
    showSyllabus() {
      const content = document.getElementById('content');
      if (!content) return;
  
      window.scrollTo({ top: 0 });
  
      content.innerHTML = `
        <div class="syllabus-section">
          <h2>Course Syllabus</h2>
          
          <div class="module-list">
            ${this.app.state.modules.map((module, index) => `
              <div class="module-card ${this.app.state.currentModule === index ? 'active' : ''}">
                <h3>${module.title}</h3>
                <ul>
                  ${module.sections.map(section => `
                    <li>
                      <strong>${section.title}</strong>
                      <p>${this.getSectionDescription(section.title)}</p>
                    </li>
                  `).join('')}
                </ul>
                
                <div class="module-status">
                  ${module.completed ? 
                    `<span class="status completed">Completed</span>` : 
                    `<span class="status pending">In Progress</span>`
                  }
                </div>
                
                <button 
                  onclick="window.app.state.currentModule = ${index}; window.app.router.navigate('lessons')" 
                  class="start-module-btn"
                >
                  ${module.completed ? 'Review Module' : this.app.state.currentModule === index ? 'Continue Module' : 'Start Module'}
                </button>
              </div>
            `).join('')}
          </div>
        </div>
      `;
  
      // Update active navigation state
      this.app.router.updateActiveLinks();
    }
  
    getSectionDescription(title) {
      const descriptions = {
        'What is JavaScript?': 'Introduction to JavaScript and its role in web development',
        'Course Structure': 'Overview of the course modules and learning path',
        'Variables and Scope': 'Understanding variable declaration and scope in JavaScript',
        'Data Types': 'Exploring JavaScript\'s primitive and complex data types',
        'Conditional Statements': 'Learning about if/else statements and logical operators',
        'Loops': 'Working with different types of loops in JavaScript',
        'Function Declarations': 'Understanding function syntax and types',
        'Modern Array Methods': 'Working with map, filter, reduce, and other array methods',
        'Introduction to DOM': 'Understanding the Document Object Model',
        'Modifying DOM Elements': 'Learning to manipulate DOM elements dynamically',
        'Event Handling': 'Working with events and event listeners',
        'Promises': 'Understanding asynchronous programming with Promises',
        'Async/Await': 'Using modern async/await syntax',
        'ES6 Fundamentals': 'Learning modern JavaScript features',
        'Destructuring and Spread': 'Working with modern JavaScript syntax',
        'Classes and Modules': 'Understanding object-oriented JavaScript'
      };
      
      return descriptions[title] || 'Master essential JavaScript concepts';
    }
  
    getModuleIcon(index) {
      const icons = {
        0: '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>',
        1: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
        2: '<path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>',
        3: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12" y2="16"/>',
        4: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="12" y1="8" x2="12" y2="16"/>',
        5: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>',
        6: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>',
        7: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'
      };
      return icons[index] || icons[0];
    }
  
    getModuleDescription(index) {
      const descriptions = {
        0: 'Get started with JavaScript basics and understand core concepts',
        1: 'Learn about variables, data types, and basic operations',
        2: 'Master control structures and program flow',
        3: 'Understand functions and scope in JavaScript',
        4: 'Work with objects and arrays effectively',
        5: 'Learn DOM manipulation and event handling',
        6: 'Master asynchronous programming concepts',
        7: 'Explore modern JavaScript features and best practices'
      };
      return descriptions[index] || 'Learn essential JavaScript concepts';
    }
  
    calculateModuleProgress(moduleIndex) {
      const module = this.app.state.modules[moduleIndex];
      if (!module) return 0;
      
      const completedSections = module.sectionsCompleted?.length || 0;
      const totalSections = module.sections.length;
      return Math.round((completedSections / totalSections) * 100);
    }
  
    showRelevantContent(moduleId, questionIndex) {
      // Get the relevant section to review
      const location = this.app.state.getRelevantContent(moduleId, questionIndex);
      
      // Set the current module
      this.app.state.currentModule = location.moduleId;
      
      // Navigate to lessons page
      this.app.router.navigate('lessons');
  
      // After a short delay to allow the lessons page to render
      setTimeout(() => {
        // Get section element
        const section = document.querySelector(`.lesson-material:nth-child(${location.sectionIndex + 1})`);
        
        if (section) {
          // Add highlight animation class
          section.classList.add('highlight-section');
          
          // Scroll section into view
          section.scrollIntoView({ behavior: 'smooth', block: 'center' });
          
          // Remove highlight class after animation
          setTimeout(() => {
            section.classList.remove('highlight-section');
          }, 2000);
        }
      }, 100);
    }
  }