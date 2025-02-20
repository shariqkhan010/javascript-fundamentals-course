export class UserProfile {
    constructor() {
      this.userData = null;
    }
  
    async updateProfile(profileData) {
      try {
        const formData = new FormData();
        
        // Add profile fields
        Object.keys(profileData).forEach(key => {
          if (key === 'avatar' && profileData[key] instanceof File) {
            formData.append('avatar', profileData[key]);
          } else {
            formData.append(key, profileData[key]);
          }
        });
  
        const response = await fetch('/api/profile/update', {
          method: 'POST',
          body: formData
        });
  
        if (!response.ok) {
          throw new Error('Profile update failed');
        }
  
        const updatedProfile = await response.json();
        this.userData = updatedProfile;
        return updatedProfile;
      } catch (error) {
        console.error('Profile update error:', error);
        throw error;
      }
    }
  
    async submitFeedback(feedback) {
      try {
        const response = await fetch('/api/feedback/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(feedback)
        });
  
        if (!response.ok) {
          throw new Error('Feedback submission failed');
        }
  
        return await response.json();
      } catch (error) {
        console.error('Feedback submission error:', error);
        throw error;
      }
    }
  }