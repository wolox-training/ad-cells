import { LitElement, html } from 'lit-element';

class ItemBook extends LitElement {
  static get properties() {
    return {
      idBook: {
        type: Number,
      },
      titleBook: {
        type: String,
      },
      imageBook: {
        type: String,
      },
      authorBook: {
        type: String,
      },
    };
  }
  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('click', this._sendBookId);
  }

  _eventBookId(id) {
    this.dispatchEvent(
      new CustomEvent('book-id', {
        detail: id,
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      <link rel="stylesheet" href="/public/app.css" />
      <article class="card" id="card">
        <figure class="image-container-list">
          <img
            class="image-book-list"
            src=${this.imageBook}
            alt=${'Imagen del libro ' + this.titleBook} />
        </figure>
        <div class="book-description">
          <h3 class="title-description">${this.titleBook}</h3>
          <p class="paragraph-description">${this.authorBook}</p>
        </div>
      </article>
    `;
  }

  _sendBookId() {
    this._eventBookId(this.idBook);
  }
}

customElements.define('item-book', ItemBook);
