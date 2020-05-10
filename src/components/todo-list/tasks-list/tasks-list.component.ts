import Vue from "vue";
import Component from "vue-class-component";
import { Task } from "@/models/Task";

@Component({})
export default class TasksListComponent extends Vue {
  tasks: Array<Task> = new Array<Task>();
  visible: boolean = false;
  visibleSave: boolean = true;
  description: string = "";

  mounted() {
    this.visible;
    this.visibleSave;
    this.tasks = this.$store.getters.tasks;
  }
  completeTask(completed: boolean, task: Task) {
    task.isCompleted = completed;
    this.$store.dispatch("editTask", task).then((res) => {
      this.tasks = this.$store.getters.tasks;
    });
  }

  editTask() {
    this.visible = true;
    this.visibleSave = false;
  }

  saveEditTask(id: string, description: string) {
    // this.$store.dispatch("saveEditTask");
    const response = fetch(`https://todo-list-vue-eb646.firebaseio.com/todo`, {
      method: "GET",
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    console.log(response);
  }

  removeTask(id: string) {
    this.$store.dispatch("removeTask", id);
  }
}
