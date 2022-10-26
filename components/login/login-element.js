import { LitElement, html } from 'lit-element';

class LoginElement extends LitElement {
  render() {
    return html`
      <link rel="stylesheet" href="/public/app.css" />
      <main class="login-container">
        <form class="form-container" action="#" method="post">
          <figure class="image-container-login">
            <img
              class="image-login"
              src="/assets/img/logo-wolox.png"
              alt="This is an image of Wolox" />
          </figure>
          <label class="label-control" for="email">Email</label>
          <input class="input-control" id="email" type="email" />
          <label class="label-control" for="password">Password</label>
          <input class="input-control" id="password" type="password" />
          <div class="btn-login-container">
            <a class="btn btn-login" href="/pages/book-list/book-list.html"
              >Login</a
            >
          </div>
          <a class="btn btn-signup" href="#">Sign Up</a>
        </form>
      </main>
    `;
  }
}

customElements.define('login-element', LoginElement);