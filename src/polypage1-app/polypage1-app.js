import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';






/**
 * @customElement
 * @polymer
 */


// handleSubmit Function that we need to write

// handleSubmit = (e) =>{
//   e.preventDefault();
//   const data = JSON.stringify({...this.state});
//   fetch("http://localhost:4000", {
//     method: "Post",
//     body: data,
//     headers: {
//         "Content-Type":"application/json"
//     }
//   })
// }


class Polypage1App extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
      <form onSubmit={this.handleSubmit}>
      <input type="text" name="name" value="recipe title">
      <input type="textarea" name="name" value="indredients">
      <input type="textarea" name="name" value="directions">
      <input type="text" name="name" value="category">
        <button type="submit" name="submit" onclick="myFunction()">Submit</button>
        </form>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'recipes'
      }
    };
  }
}

window.customElements.define('polypage1-app', Polypage1App);
