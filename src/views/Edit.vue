<template>
  <v-content>
    <v-container>
      <v-card>
        <v-card-text>
          <div class="about">
            <h1>This is an about page</h1>
            <br>
            <h1>id : {{wa.id}}</h1>
            <h1>description : {{wa.description}}</h1>
            <v-card-actions>
              <v-btn
                small
                color="primary"
                class="mt-4"
                @click="back"
              >
                back
              </v-btn>

            </v-card-actions>
          </div>
        </v-card-text>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
import { db } from "../../firebase.config";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      wa: "",
      id: this.$route.params.id
    };
  },
  beforeMount() {
    this.wa = "";
    this.kadal();
    this.getTask(this.id);
    // console.log(this.getTask("ZxVpCxCVG2386LIJ8WT6"), "sss");
  },
  methods: {
    back() {
      this.$router.push({
        name: "Home"
      });
    },
    getTask(id) {
      let collection = "tasks";
      db.collection(collection)
        .doc(id)
        .get()
        .then(res => {
          // contex.commit("editTask", task);
          let data = { id: "", description: "" };
          let task = data;

          task.id = res.id;
          task.description = res.data().description;

          // console.log(task);
          this.wa = task;
        })
        .catch(err => console.log(err));
    },
    kadal() {
      let respon = db.collection("tasks");
      let s = respon.get().then(res => {
        res.docs.map(task => {
          // console.log(task.data());
        });
      });

      // console.log(s);
    }
  }
};
</script>
