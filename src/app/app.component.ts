import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  todo: String = "";
  todolists = [];
  onAddTodo() {
    this.todolists = [
      ...this.todolists,
      { id: Math.random(), name: this.todo },
    ];
    this.todo = "";
  }
  onRemoveToDo(id, i) {
    this.todolists = this.todolists.filter((el, index) => index !== i);
  }
  save(event: Event) {
    this.todolists = [
      ...this.todolists,
      { id: Math.random(), name: (<HTMLInputElement>event.target).value },
    ];
    this.todo = "";
    console.log(this.todolists);
  }
  getColor(id) {
    return id % 2 ? "red" : "blue";
  }
}
