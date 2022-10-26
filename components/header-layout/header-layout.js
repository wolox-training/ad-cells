import { LitElement, html } from 'lit-element';

class HeaderLayout extends LitElement {
  constructor() {
    super();
    this.urlImageLogo = 'logo de la página';
  }
  static get properties() {
      return {
        urlImageLogo: {
          type: String,
          attribute: 'url-image-logo'
        }
      }
  }
  render() {
    return html`
      <link rel="stylesheet" href="/public/app.css" />
      <header class="header-container">
        <nav class="navbar-navigation">
          <figure class="logo-container">
            <img
              class="logo-image"
              src=${this.urlImageLogo}
              alt="Original logo of Wolox" />
          </figure>
          <ul class="list-option">
            <li class="item-option">
              <a class="option-navigator" href="/component/login">Logout</a>
            </li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-layout', HeaderLayout);
