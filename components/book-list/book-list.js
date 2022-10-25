import { LitElement, html } from 'lit-element';
import { listOfBook } from '../../services/get-book';

class BookList extends LitElement {
  static get properties() {
    return {
      books: {
        type: Object,
      },
    };
  }

  constructor() {
    super();
    this.books = [];
    this.filterBook = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this._getFilterListDataBook();
  }

  render() {
    return html`
      <link rel="stylesheet" href="/public/app.css" />
      <header-layout
        url-image-logo="/assets/img/logo-wolox.png"></header-layout>
      <input-search .dataBook=${this.books}></input-search>
      <section class="book-list-container">
        ${this.books.map(
          (book) => html`
            <item-book
              .idBook=${book.id}
              .titleBook=${book.book_title}
              .imageBook=${book.img}
              .authorBook=${book.author}></item-book>
          `
        )}
      </section>
    `;
  }

  _getFilterListDataBook() {
    this.addEventListener('send-data', (e) => {
      this.books = e.detail.data;
      if (this.books.length === 0) {
        this.books = listOfBook;
      }
    });
  }
}

customElements.define('book-list', BookList);
