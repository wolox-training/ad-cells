import { LitElement, html } from "lit-element";

class InputSearch extends LitElement {

  constructor() {
    super();
    this.filterBook = [];
    this.dataBook = [];

  }
  
  static get properties() {
    return {
      dataBook: { 
        type: Array
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('input', this.filterDataBook);
  }

  render() {
    return html`
      <link rel="stylesheet" href="/public/app.css" />
      <section class="container-search">
        <div class="wrapper-input-search">
          <input class="input-search" id="input-search" type="search" placeholder="Busca por título del libro...">
        </div>
      </section>
    `;
  }

  _convertToLowercase(strings) {
    return strings.toLowerCase();
  } 

  filterDataBook() {
    const inputSearch = this.shadowRoot.getElementById("input-search");
    if(inputSearch.value.length !== 0) {
      this.filterBook = this.dataBook.filter(book => this._convertToLowercase(book.book_title).includes(inputSearch.value));
    } else {
      this.filterBook = [];
    }

    this._sendFilterBook(this.filterBook);
  }

  _sendFilterBook(data) {
    this.dispatchEvent(new CustomEvent('send-data', {
      detail: { data },
      bubbles: true,
      composed: true,
    }))
  }

}

customElements.define('input-search', InputSearch);