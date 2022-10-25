import { LitElement, html } from 'lit-element';

class BookDetail extends LitElement {
  static get properties() {
    return {
      book: {
        type: Object
      }
    }
  }

  constructor() {
    super();
    this.book = {};
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <link rel="stylesheet" href="/public/app.css" />
      <section class="wrapper">
        <div class="redirect-content">
          <a class="redirect" href="/">Atrás</a>
        </div>
        <article class="card-container">
          <figure class="image-container">
            <img
              class="img-book"
              src=${this.book.img}
              alt=${'Imágen del libro ' + this.book.book_title} />
          </figure>
          <h1 class="title">${this.book.book_title}</h1>
          <h2 class="subtitle">(género)</h2>
          <div class="detail">
            <p class="information-paragraph">
              Autor del libro:
              <span class="hightlighted-paragraph"
                >${this.book.author}</span
              >
            </p>
            <p class="information-paragraph">
              Editorial:
              <span class="hightlighted-paragraph">Nombre de la editorial</span>
            </p>
            <p class="information-paragraph">
              Año de publicación:
              <span class="hightlighted-paragraph">${this.book.book_year}</span>
            </p>
          </div>
        </article>
      </section>
    `;
  }

  getBookId() {
    this.addEventListener('book-id', (e) => {
      console.log(e.detail)
    })
  }

}

customElements.define('book-detail', BookDetail);
