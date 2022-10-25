import './components/header-layout/header-layout';
import './components/input-search/input-search';
import './components/item-book/item-book';
import './components/book-list/book-list';
import './components/login/login-element';
import './components/book-detail/book-detail';
import { html, LitElement } from "lit-element";
import { listOfBook } from "./services/get-book";

class AppComponent extends LitElement {
  constructor() {
    super();
    this.setAttribute('id', 'main-container');
  }

  render() {
    return html`
      <book-list .books=${listOfBook}></book-list>
    `;
  }
}

customElements.define('app-component', AppComponent);