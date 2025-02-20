export class Router {
  constructor() {
    this.routes = new Map();
    this.currentRoute = null;
    
    window.addEventListener('hashchange', () => {
      this.handleRoute(window.location.hash.slice(1));
    });
    
    // Initialize routes right away in constructor
    this.initRoutes();
  }

  addRoute(path, handler) {
    this.routes.set(path, handler);
  }

  navigate(path) {
    // Default to 'home' if no path is provided
    const routePath = path || 'home';
    window.location.hash = routePath;
    this.handleRoute(routePath);
  }

  handleRoute(path) {
    // Default to 'home' if path is empty
    const routePath = path || 'home';
    const handler = this.routes.get(routePath);
    
    if (handler) {
      this.currentRoute = routePath;
      handler();
      this.updateActiveLinks();
    } else {
      // If route not found, redirect to home
      console.warn(`Route "${path}" not found, redirecting to home`);
      this.navigate('home');
    }
  }

  updateActiveLinks() {
    document.querySelectorAll('.nav-links a').forEach(link => {
      const linkPath = link.getAttribute('href').slice(1);
      link.classList.toggle('active', linkPath === this.currentRoute);
    });
  }

  initRoutes() {
    this.addRoute('docs', () => {
      // Notice we access the ui through the window.app object
      window.app.ui.showDocs();
      window.app.chatbot.hide();
    });

    // Add routes specific to profile and other pages
    this.addRoute('profile', () => {
      // Use the ui method to show profile
      window.app.ui.showProfile();
    });
  }
}