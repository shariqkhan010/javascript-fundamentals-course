import { Router } from './router.js';
import { CourseState } from './state.js';
import { UI } from './ui.js';
import { CodeEditor } from './editor.js';
import { Chatbot } from './chatbot.js';
import { Auth } from './auth.js';
import { UserProfile } from './profile.js';

class App {
  constructor() {
    this.initializeDependencies();
    this.setupRoutes();
    
    // Add visibility change detection for accurate timing
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.state.pauseModuleTimer();
      } else {
        // Resume timer if we're on the lessons page
        if (this.router.currentRoute === 'lessons') {
          this.state.resumeModuleTimer(this.state.currentModule);
        }
      }
    });
  }

  initializeDependencies() {
    // Initialize state first since UI depends on it
    this.state = new CourseState();
    
    // Ensure currentModule is set to a valid value
    if (this.state.currentModule === null || 
        this.state.currentModule === undefined || 
        !this.state.modules[this.state.currentModule]) {
      this.state.currentModule = 0;
    }
    
    // Initialize other dependencies
    this.router = new Router();
    this.editor = new CodeEditor();
    this.chatbot = new Chatbot();
    this.auth = new Auth();
    this.userProfile = new UserProfile();
    
    // Initialize UI last since it depends on state and other services
    this.ui = new UI(this); // Pass app instance to UI
  }

  setupRoutes() {
    this.router.addRoute('home', () => {
      this.ui.showHome();
      this.chatbot.hide();
    });
    
    this.router.addRoute('syllabus', () => {
      this.ui.showSyllabus();
      this.chatbot.hide();
    });
    
    this.router.addRoute('lessons', () => {
      this.ui.showLessons();
      this.chatbot.show();
    });
    
    this.router.addRoute('quizzes', () => {
      this.ui.showQuizzes();
      this.chatbot.hide();
    });
    
    this.router.addRoute('project', () => {
      this.ui.showProject();
      this.chatbot.hide();
    });
    
    this.router.addRoute('profile', () => {
      this.ui.showProfile();
      this.chatbot.hide();
    });
    
    // Initialize mobile menu
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    menuBtn?.addEventListener('click', () => {
      navLinks?.classList.toggle('active');
    });

    // Handle navigation
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (link) {
        e.preventDefault();
        const route = link.getAttribute('href').slice(1);
        this.router.navigate(route);
        navLinks?.classList.remove('active');
      }
    });

    // Load initial route
    const initialRoute = window.location.hash.slice(1) || 'home';
    this.router.navigate(initialRoute);
  }
}

// Initialize app after DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});