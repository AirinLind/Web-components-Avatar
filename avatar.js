class AvatarConstructor extends HTMLElement {
    constructor() {
      super();
  
      this.attachShadow({mode: 'open'});
  
      const template = document.createElement('template');
      template.innerHTML = `
        <style>
          .avatar {
            display:flex;
            flex-direction: column;
            align-items: center;
            margin: 15px;
          }
          
          .avatar-img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
          }
          
          .avatar-name {
            margin-top: 10px;
            font-weight: bold;
            
          }
        </style>
        
        <div class="avatar">
          <img class="avatar-img" src="" alt="Avatar Image">
          <span class="avatar-name"></span>
        </div>
      `;
  
      const shadowRoot = this.shadowRoot;
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    static get observedAttributes() {
      return ['name', 'image'];
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      this.render();
    }
  
    render() {
      const shadowRoot = this.shadowRoot;
      
      const name = this.getAttribute('name');
      const image = this.getAttribute('image');
  
      shadowRoot.querySelector('.avatar-img').src = image;
      shadowRoot.querySelector('.avatar-name').textContent = name;
    }
  }
  
  customElements.define('avatar-constructor', AvatarConstructor);
  
