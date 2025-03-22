export class Chatbot {
  constructor() {
    this.messages = [];
    this.isTyping = false;
    this.init();
  }

  init() {
    // Insert chat widget HTML
    document.body.insertAdjacentHTML('beforeend', `
      <div class="chat-widget">
        <div class="chat-header">
          <h3>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 16v-4M12 8h.01"/>
            </svg>
            JavaScript Learning Assistant
          </h3>
          <button class="chat-close" aria-label="Close chat">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div class="chat-messages"></div>
        <div class="chat-input">
          <form class="chat-form">
            <input type="text" placeholder="Ask me anything about JavaScript..." required>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      
      <button class="chat-toggle" aria-label="Toggle chat assistant">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      </button>
    `);

    // Event listeners
    const toggleBtn = document.querySelector('.chat-toggle');
    const closeBtn = document.querySelector('.chat-close');
    const chatWidget = document.querySelector('.chat-widget');
    const chatForm = document.querySelector('.chat-form');

    toggleBtn?.addEventListener('click', () => {
      chatWidget?.classList.toggle('active');
      toggleBtn.classList.toggle('active');

      if (!this.messages.length) {
        this.addMessage({
          type: 'assistant',
          content: 'Hi! I\'m your JavaScript learning assistant. How can I help you today?'
        });
      }
    });

    closeBtn?.addEventListener('click', () => {
      chatWidget?.classList.remove('active');
      toggleBtn?.classList.remove('active');
    });

    chatForm?.addEventListener('submit', async (e) => {
      e.preventDefault();
      const input = chatForm.querySelector('input');
      const button = chatForm.querySelector('button');

      if (input && button) {
        const message = input.value.trim();
        if (message) {
          button.disabled = true;
          input.disabled = true;

          // Add user message to chat
          this.addMessage({
            type: 'user',
            content: message
          });

          // Clear input field
          input.value = '';

          // Show typing indicator
          this.showTypingIndicator();

          try {
            // Get AI response via Netlify function
            const response = await fetch('/.netlify/functions/chat', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                messages: [
                  { role: 'system', content: 'You are a JavaScript assistant' },
                  { role: 'user', content: message }
                ]
              })
            });

            if (!response.ok) {
              throw new Error(`Server error: ${response.status}`);
            }

            const data = await response.json();

            // Remove typing indicator and display AI response
            this.hideTypingIndicator();
            this.addMessage({
              type: 'assistant',
              content: data.content
            });
          } catch (error) {
            console.error('Error getting AI response:', error);
            this.hideTypingIndicator();
            this.addMessage({
              type: 'assistant',
              content: 'Sorry, I encountered an error. Please try again.'
            });
          }

          button.disabled = false;
          input.disabled = false;
          input.focus();
        }
      }
    });
  }

  addMessage({ type, content }) {
    const messagesContainer = document.querySelector('.chat-messages');
    if (!messagesContainer) return;

    const messageElement = document.createElement('div');
    messageElement.className = `chat-message ${type}`;

    // Escape HTML and process code blocks
    content = this.escapeHtml(content);
    
    messageElement.innerHTML = content;
    messagesContainer.appendChild(messageElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    this.messages.push({ type, content });
  }

  showTypingIndicator() {
    const messagesContainer = document.querySelector('.chat-messages');
    if (!messagesContainer || this.isTyping) return;

    this.isTyping = true;
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    typingIndicator.innerHTML = `
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
      <div class="typing-dot"></div>
    `;
    messagesContainer.appendChild(typingIndicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  hideTypingIndicator() {
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
    this.isTyping = false;
  }

  // A simplified escapeHtml that first escapes the content,
  // then applies syntax highlighting to code blocks.
  escapeHtml(text) {
    // Escape HTML using a temporary element
    const div = document.createElement('div');
    div.textContent = text;
    let escapedText = div.innerHTML;

    // Process markdown code blocks
    escapedText = escapedText.replace(/```([\s\S]*?)```/g, (_, code) => {
      // Basic syntax highlighting (adjust regexes as needed)
      code = code
        .replace(/\b(const|let|var|function|return|if|else|for|while)\b/g, '<span class="keyword">$1</span>')
        .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
        .replace(/'([^']*)'/g, '<span class="string">\'$1\'</span>')
        .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
        .replace(/(\/\/[^\n]*)/g, '<span class="comment">$1</span>')
        .replace(/\b([a-zA-Z]+)\(/g, '<span class="function">$1</span>(');
      return `<pre><code>${code}</code></pre>`;
    });

    // Process inline code
    escapedText = escapedText.replace(/`([^`]+)`/g, (_, code) => {
      return `<code>${code}</code>`;
    });

    return escapedText;
  }

  show() {
    const toggle = document.querySelector('.chat-toggle');
    const widget = document.querySelector('.chat-widget');
    if (toggle && widget) {
      toggle.style.display = 'flex';
      widget.style.display = 'flex';
    }
  }

  hide() {
    const toggle = document.querySelector('.chat-toggle');
    const widget = document.querySelector('.chat-widget');
    if (toggle && widget) {
      toggle.style.display = 'none';
      widget.style.display = 'none';
      widget.classList.remove('active');
      toggle.classList.remove('active');
    }
  }
}
