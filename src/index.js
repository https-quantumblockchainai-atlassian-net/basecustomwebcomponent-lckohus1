import { html, css, BaseCustomWebComponentLazyAppend } from "@node-projects/base-custom-webcomponent";

class MyCounter extends BaseCustomWebComponentLazyAppend {
  static style = css`
    * {
      font-size: 200%;
    }

    span {
      width: 4rem;
      display: inline-block;
      text-align: center;
    }

    button {
      width: 4rem;
      height: 4rem;
      border: none;
      border-radius: 10px;
      background-color: seagreen;
      color: white;
  }`;

  static template = html`
    <button @click="[[this.dec()]]">-</button>
    [[this.count]]
    <button @click="[[this.inc()]]">+</button>`;

  count = 0;
  
  constructor() {
    super();
    this._bindingsParse();
  }

  inc() {
    this.count++;
    this._bindingsRefresh();
  }

  dec() {
    this.count--;
    this._bindingsRefresh();
  }
}

customElements.define('my-counter', MyCounter);
