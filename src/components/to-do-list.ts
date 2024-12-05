import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("to-do-list")
export class ToDoList extends LitElement {
  @property({ type: Array }) tasks: string[] = ["Brush teeth", "Wash dishes"];
  @property({ type: String }) newTask = "";

  static styles = css`
    .container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
    }

    input {
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      padding: 0.5rem 1rem;
      background-color: #334eff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    ul {
      list-style: none;
      padding: 0;
      border: 1px solid gainsboro;
      border-radius: 4px;
    }

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.5rem;
      border-bottom: 1px solid gainsboro;
    }

    ul li:last-child {
      border: none;
    }
  `;

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
