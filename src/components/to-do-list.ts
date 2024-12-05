import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("to-do-list")
export class ToDoList extends LitElement {
  @property({ type: Array }) tasks: string[] = ["Brush teeth", "Wash dishes"];
  @property({ type: String }) newTask = "";

  // TODO styles
  // TODO addTask
  // TODO deleteTask

  render() {
    return html`
      <div class="container">
        <h2>To-Do List</h2>
        <div>
          <input
            type="text"
            placeholder="Add new task"
            value="${this.newTask}"
            @input="${(e: any) => (this.newTask = e.target.value)}"
          />
          <button>Add</button>
        </div>
        <ul>
          ${this.tasks.map(
            (task, index) => html`
              <li key="${index}">
                ${task}
                <button>Delete</button>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
}
