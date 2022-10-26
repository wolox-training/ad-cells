import './components/header-layout/header-layout';
import './components/input-search/input-search';
import './components/item-book/item-book';
import './components/book-list/book-list';
import './components/login/login-element';
import './components/book-detail/book-detail';
import { html, LitElement } from "lit-element";
import { listOfBook } from "./services/get-book";

class AppComponent extends LitElement {

  static get properties () {
    return {
      path: { attribute: false},
      book: {attribute: false}
    }
  }

  constructor() {
    super();
    this.path = window.location.pathname;
    this.book = {};
    this.setAttribute('id', 'main-container');

  }

  firstUpdated() {
    window.addEventListener('popstate', () => {
      this.path = window.location.pathname
    });
    this.showDetail();
  }

  showDetail() {
    if(this.path !== '/') {
      this.book = getBookById(this.path.replace('/', ''));
      if(!this.book) {
        window.location.pathname = '/';
      }
    }
  }

  bookClicked({detail}) {
    this.book = this.getBookById(detail);
    this.path = `/${detail}`;
    window.history.pushState({}, '', this.path);

  }

  getBookById(id) {
    return listOfBook.find((book) => book.id === id);
  }

  render() {
    return html`
      ${this.path === '/' ?
        html`<book-list @book-clicked=${this.bookClicked} .books=${listOfBook}></book-list>`: 
        html`<book-detail .book=${this.book}></book-detail>`
        }
    `;
  }
}

customElements.define('app-component', AppComponent);