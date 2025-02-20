export class Auth {
    constructor() {
      // Simplified constructor with a demo user
      this.currentUser = {
        id: 'demo_user',
        name: 'JavaScript Learner',
        email: 'learner@example.com',
        avatar: '/assets/default-avatar.png',
        bio: 'Passionate about learning JavaScript and web development'
      };
    }
  
    getCurrentUser() {
      return this.currentUser;
    }
  }