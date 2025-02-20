export class CodeEditor {
    constructor() {
      this.editor = null;
      this.currentExercise = null;
      this.exercises = {
        // Module 0: Introduction
        '0-0': {
          instructions: 'Write a comment explaining what JavaScript is.',
          startingCode: '// Write your explanation here\n',
          solution: '// JavaScript is a high-level, interpreted programming language\n// that enables interactive web pages and applications.'
        },
        // Module 1: JavaScript Basics
        '1-0': {
          instructions: 'Declare a variable named "greeting" and assign it a string value.',
          startingCode: '// Declare your variable here\n',
          solution: 'const greeting = "Hello, World!";'
        },
        '1-1': {
          instructions: 'Create variables using different data types (string, number, boolean).',
          startingCode: '// Create your variables here\n',
          solution: `const name = "John";
  const age = 25;
  const isStudent = true;`
        },
        '1-2': {
          instructions: 'Use arithmetic operators to perform calculations.',
          startingCode: '// Write calculations here\n',
          solution: `const x = 10;
  const y = 5;
  const sum = x + y;
  const product = x * y;
  console.log(sum, product);`
        }
      };
    }
  
    initialize(containerId) {
      const container = document.getElementById(containerId);
      if (!container) {
        console.warn(`Container ${containerId} not found`);
        return;
      }
  
      try {
        this.editor = ace.edit(container);
        this.editor.setTheme("ace/theme/monokai");
        this.editor.session.setMode("ace/mode/javascript");
        this.editor.setOptions({
          fontSize: "14px",
          showPrintMargin: false,
          showGutter: true,
          highlightActiveLine: true,
          enableLiveAutocompletion: true
        });
      } catch (error) {
        console.error('Error initializing editor:', error);
      }
    }
  
    initializeMultipleEditors(containerId, type = 'javascript') {
      const container = document.getElementById(containerId);
      if (!container) {
        console.warn(`Container ${containerId} not found`);
        return;
      }
  
      try {
        this.editor = ace.edit(container);
        this.editor.setTheme("ace/theme/monokai");
        this.editor.session.setMode(`ace/mode/${type}`);
        this.editor.setOptions({
          fontSize: "14px",
          showPrintMargin: false,
          showGutter: true,
          highlightActiveLine: true,
          enableLiveAutocompletion: true,
          wrap: true
        });
  
        // Add custom keybindings for common actions
        this.editor.commands.addCommand({
          name: 'save',
          bindKey: {win: 'Ctrl-S', mac: 'Command-S'},
          exec: () => {
            // Trigger save action
            this.saveCode();
          }
        });
  
        // Add undo/redo keyboard shortcuts
        this.editor.commands.addCommand({
          name: 'undo',
          bindKey: {win: 'Ctrl-Z', mac: 'Command-Z'},
          exec: () => this.editor.undo()
        });
  
        this.editor.commands.addCommand({
          name: 'redo',
          bindKey: {win: 'Ctrl-Shift-Z', mac: 'Command-Shift-Z'},
          exec: () => this.editor.redo()
        });
  
      } catch (error) {
        console.error('Error initializing editor:', error);
      }
    }
  
    getBoilerplateCode(type) {
      const boilerplate = {
        html: `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Learning Platform</title>
      <link rel="stylesheet" href="styles.css">
  </head>
  <body>
      <header>
          <nav>
              <div class="logo">Learning Platform</div>
              <ul class="nav-links">
                  <li><a href="#home">Home</a></li>
                  <li><a href="#lessons">Lessons</a></li>
                  <li><a href="#profile">Profile</a></li>
              </ul>
          </nav>
      </header>
  
      <main>
          <div id="content">
              <!-- Dynamic content will be loaded here -->
          </div>
      </main>
  
      <footer>
          <p>&copy; 2024 Learning Platform</p>
      </footer>
  
      <script src="app.js"></script>
  </body>
  </html>`,
        
        css: `/* Global styles */
  :root {
      --primary: #4a90e2;
      --secondary: #f5f5f5;
      --text: #333;
      --background: #ffffff;
  }
  
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  body {
      font-family: system-ui, -apple-system, sans-serif;
      line-height: 1.6;
      color: var(--text);
  }
  
  /* Navigation styles */
  nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
      background: var(--background);
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
  }
  
  .nav-links a {
      text-decoration: none;
      color: var(--text);
      font-weight: 500;
      transition: color 0.3s;
  }
  
  .nav-links a:hover {
      color: var(--primary);
  }
  
  /* Main content area */
  main {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
  }
  
  /* Responsive design */
  @media (max-width: 768px) {
      nav {
          flex-direction: column;
          gap: 1rem;
      }
      
      .nav-links {
          flex-direction: column;
          align-items: center;
      }
  }`,
        
        javascript: `// Main application class
  class LearningPlatform {
      constructor() {
          this.state = {
              currentUser: null,
              currentModule: 0,
              progress: {},
              modules: []
          };
          
          this.init();
      }
      
      init() {
          // Initialize the application
          this.loadState();
          this.setupEventListeners();
          this.renderContent();
      }
      
      loadState() {
          // Load saved state from localStorage
          const saved = localStorage.getItem('learningState');
          if (saved) {
              this.state = JSON.parse(saved);
          }
      }
      
      saveState() {
          // Save current state to localStorage
          localStorage.setItem('learningState', 
              JSON.stringify(this.state)
          );
      }
      
      setupEventListeners() {
          // Set up navigation and other event listeners
          document.addEventListener('click', (e) => {
              const link = e.target.closest('a[href^="#"]');
              if (link) {
                  e.preventDefault();
                  const route = link.getAttribute('href').slice(1);
                  this.navigate(route);
              }
          });
      }
      
      navigate(route) {
          // Handle route changes
          switch(route) {
              case 'home':
                  this.showHome();
                  break;
              case 'lessons':
                  this.showLessons();
                  break;
              case 'profile':
                  this.showProfile();
                  break;
              default:
                  this.showHome();
          }
      }
      
      renderContent() {
          // Initial content render
          this.showHome();
      }
      
      showHome() {
          const content = document.getElementById('content');
          content.innerHTML = '<h1>Welcome to Learning Platform</h1>';
      }
  }
  
  // Initialize the application
  window.addEventListener('DOMContentLoaded', () => {
      window.app = new LearningPlatform();
  });`
      };
  
      return boilerplate[type] || '';
    }
  
    saveCode() {
      // Implement save functionality
      console.log('Saving code...');
      // Could save to localStorage or trigger a save event
    }
  
    getValue() {
      if (!this.editor) {
        console.warn('Editor not initialized');
        return '';
      }
      return this.editor.getValue();
    }
  
    setValue(code) {
      if (!this.editor) {
        console.warn('Editor not initialized');
        return;
      }
      this.editor.setValue(code, -1);
    }
  
    createEditorContainer() {
      return `
        <div class="editor-container">
          <div class="editor-controls">
            <button onclick="window.app.editor.runCode()">Run Code</button>
            <button onclick="window.app.editor.resetCode()">Reset</button>
          </div>
          <div class="split-view">
            <div id="codeEditor" class="code-editor"></div>
            <div id="outputPanel" class="output-panel">Output will appear here</div>
          </div>
        </div>
      `;
    }
  
    runCode() {
      try {
        const currentOutputId = this.currentExercise ? 
          `output-${this.currentExercise}` : 
          'outputPanel';
          
        const outputPanel = document.getElementById(currentOutputId);
        
        if (!outputPanel) {
          console.warn('Output panel not found:', currentOutputId);
          return;
        }
  
        const code = this.getValue();
        let output = '';
        const consoleLog = console.log;  // Store the original console.log
        
        // Create a sandbox environment
        const sandbox = {
          console: {
            log: (...args) => {
              output += args.join(' ') + '\n';
            }
          },
          setTimeout,
          clearTimeout,
          setInterval,
          clearInterval,
          Math,
          Date,
          String,
          Number,
          Boolean,
          Array,
          Object,
          JSON,
          RegExp,
          Error
        };
  
        // Custom error analysis and feedback
        const analyzeSyntaxError = (error) => {
          if (error instanceof SyntaxError) {
            if (error.message.includes('unexpected token')) {
              return `Syntax Error: There appears to be a typo or incorrect symbol in your code. 
                      Common causes include:
                      - Missing or extra parentheses ()
                      - Missing or extra curly braces {}
                      - Missing semicolons ;
                      - Incorrect quotation marks
                      
                      Tip: Check your code carefully for any missing or extra symbols.`;
            }
            if (error.message.includes('undefined')) {
              return `Reference Error: You're trying to use a variable that hasn't been declared.
                      Make sure to:
                      - Declare your variables using let, const, or var before using them
                      - Check for typos in variable names
                      - Verify the variable is in the correct scope`;
            }
          }
          return `Error: ${error.message}
                  
                  Debugging Tips:
                  1. Check your syntax carefully
                  2. Verify all variables are properly declared
                  3. Make sure all parentheses and braces are properly matched
                  4. Test your code step by step`;
        };
  
        // Prepare the code to run in the sandbox
        const sandboxCode = `
          with (sandbox) {
            ${code}
          }
        `;
  
        // Run the code in the sandbox
        new Function('sandbox', sandboxCode)(sandbox);
  
        // Format and display output
        if (output.trim()) {
          outputPanel.innerHTML = `
            <div class="output-success">
              <h4>Output:</h4>
              <pre>${output}</pre>
            </div>`;
        } else {
          outputPanel.innerHTML = `
            <div class="output-info">
              <h4>No Output</h4>
              <p>Your code ran successfully but didn't produce any output. 
                 Try adding console.log() statements to see results.</p>
            </div>`;
        }
        
        // Restore the original console.log
        console.log = consoleLog;
      } catch (error) {
        const outputPanel = document.getElementById(this.currentExercise ? 
          `output-${this.currentExercise}` : 
          'outputPanel'
        );
        if (outputPanel) {
          const errorFeedback = analyzeSyntaxError(error);
          outputPanel.innerHTML = `
            <div class="output-error">
              <h4>Error Detected:</h4>
              <pre>${errorFeedback}</pre>
            </div>`;
        }
        console.error('Code execution error:', error);
      }
    }
  
    resetCode() {
      if (this.currentExercise && this.exercises[this.currentExercise]) {
        this.setValue(this.exercises[this.currentExercise].startingCode);
      } else {
        this.setValue('// Write your code here\n');
      }
    }
  
    showExercise(moduleId, sectionIndex) {
      const exerciseKey = `${moduleId}-${sectionIndex}`;
      const exercise = this.exercises[exerciseKey];
      
      if (!exercise) {
        console.warn(`No exercise found for module ${moduleId}, section ${sectionIndex}`);
        return;
      }
  
      const container = document.getElementById(`exercise-${moduleId}-${sectionIndex}`);
      if (!container) {
        console.warn(`Exercise container not found`);
        return;
      }
  
      this.currentExercise = exerciseKey;
      
      container.innerHTML = `
        <div class="exercise-content">
          <div class="exercise-instructions">
            <h4>Exercise Instructions:</h4>
            <p>${exercise.instructions}</p>
          </div>
          <div class="editor-container">
            <div class="editor-controls">
              <button onclick="window.app.editor.runCode()">Run Code</button>
              <button onclick="window.app.editor.resetCode()">Reset</button>
              <button onclick="window.app.editor.showSolution()">Show Solution</button>
            </div>
            <div id="editor-${exerciseKey}" class="code-editor"></div>
            <div id="output-${exerciseKey}" class="output-panel">Output will appear here</div>
          </div>
        </div>
      `;
  
      // Initialize editor for this exercise
      setTimeout(() => {
        const editorElement = document.getElementById(`editor-${exerciseKey}`);
        if (!editorElement) {
          console.warn('Editor element not found');
          return;
        }
  
        this.editor = ace.edit(editorElement);
        this.editor.setTheme("ace/theme/monokai");
        this.editor.session.setMode("ace/mode/javascript");
        this.editor.setOptions({
          fontSize: "14px",
          showPrintMargin: false,
          showGutter: true,
          highlightActiveLine: true,
          enableLiveAutocompletion: true
        });
        this.setValue(exercise.startingCode);
      }, 100);
    }
  
    showSolution() {
      if (this.currentExercise && this.exercises[this.currentExercise]) {
        this.setValue(this.exercises[this.currentExercise].solution);
      }
    }
  }