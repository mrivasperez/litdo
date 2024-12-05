// message.ts
import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("message-component")
export class MessageComponent extends LitElement {
  @property({ type: String }) message = "";

  render() {
    return html`<p>${this.message}</p>`;
  }
}
