import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class HeaderComponent extends Vue {
  title: string = "todo-list";

  mounted() {
    console.log("hello from app");
  }
}
