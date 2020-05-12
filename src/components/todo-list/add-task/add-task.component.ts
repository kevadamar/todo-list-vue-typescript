import Vue from "vue";
import Component from "vue-class-component";
import { Task } from "@/models/Task";

@Component({})
export default class AddTaskComponent extends Vue {
  description: string = "";

  rules: any = {
    required: (value: string) => !!value || 'Field is Required.',
    counter: (value: string) => value.length <= 20 || 'Max 20 characters',
  }

  addNewTask() {
    if (this.description.length > 3) {
      this.$store.dispatch("addTask", {
        description: this.description,
      });
      this.description = "";
    }
  }

  mounted() {}
}
