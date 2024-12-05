import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("to-do-list")
export class ToDoList extends LitElement {
  @property({ type: Array }) tasks: string[] = [];
  @property({ type: String }) newTask: string = "";

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

  

  addTask() {
    if (this.newTask.trim() !== "") {
      this.tasks = [...this.tasks, this.newTask.trim()];
      this.newTask = "";
    }
  }

  deleteTask(index: number) {
    this.tasks = [
      ...this.tasks.slice(0, index),
      ...this.tasks.slice(index + 1)
    ];
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.addTask();
    }
  }

  saveTasksToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  loadTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  render() {
    return html`
      <div class="container">
        <h2>To-Do List</h2>
        <div>
          <input
            type="text"
            placeholder="Add new task"
            .value="${this.newTask}"
            @input="${(e: any) => (this.newTask = e.target.value)}"
            @keydown="${this.handleKeyPress}"
          />
          <button @click="${this.addTask}">Add</button>
        </div>
        <ul>
          ${this.tasks.map(
            (task, index) => html`
              <li key="${index}">
                ${task}
                <button @click="${() => this.deleteTask(index)}">Delete</button>
              </li>
            `
          )}
        </ul>
      </div>
    `;
  }
}
