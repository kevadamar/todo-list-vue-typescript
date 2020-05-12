import Vue from "vue";
import Component from "vue-class-component";
import { Task } from "@/models/Task";


@Component({})
export default class TasksListComponent extends Vue {
  
  tasks: Array<Task> = new Array<Task>();
  description: string = "";
  perPage: object = 
    {
      itemsPerPage: 5
    }
  
  headers: object[] = [
    {
      text: "#",
      value: "id",
    },
    {
      text: "Description",
      value: "description",
    },
    { 
      text: "Actions", 
      value: "actions", 
      sortable: false 
    }
  ];
  data: object[] = []
  dialog: boolean = false
  
  editedIndex: number = -1;
  editedItem: object =
    {
    description: "",
    
    }
  
  defaultItem: object =  
    {
    description: "",
    
    }
  

  get formTitle() {
    return this.editedIndex === -1 ? "Edit Item" : "Edit Item";
  }

  
  mounted() {
    this.initialize();
    
  }
  completeTask(completed: boolean, task: Task) {
    task.isCompleted = completed;
    this.$store.dispatch("editTask", task).then((res) => {
      this.tasks = this.$store.getters.tasks;
    });
  }

  removeTask(id: string) {
    this.$store.dispatch("removeTask", id);
  }

  //merhods table

    initialize() {
      (async () => {
         this.data = await this.$store.getters.tasks
      })();
    }

    editItem(item: object) {
      this.editedIndex = this.data.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    }

    deleteItem(item: object) {
      const index = this.data.indexOf(item);
      let check = confirm("Are you sure you want to delete this item?")
      if (check) {
        let val = ''
        this.data.forEach(function (object:any,key:number) {
          if (key === index) {
            val = object.id
          }
        })
        this.data.splice(index, 1); 
        this.removeTask(val)
      }
    }

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    }

    save() {
      if (this.editedIndex > -1) {
        let data = [this.editedItem]
        let id = '',description = ''
        Object.assign(this.data[this.editedIndex], this.editedItem);
        data.forEach(function (object: any, key:number) {
          id = object.id
          description = object.description
        })
        this.$store.dispatch("editTask",{
          id:id,
          description: description
        })
      } else {
        this.data.push(this.editedItem);
      }
      this.close();
    }
}
