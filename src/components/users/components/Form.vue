<template>
    <div class="container">
<form @submit.prevent="validate">
  <label>Name:</label>
  <input type="text" v-model="form.name" class="form-control" />
  <div class="form-text text-danger" >{{ form.nameErrorText }}</div>

    <label>Family:</label>
  <input type="text" v-model="form.family" class="form-control" />
  <div class="form-text text-danger" >{{ form.familyErrorText }}</div>

  <label>Email:</label>
  <input type="email" v-model="form.email" class="form-control" />
  <div class="form-text text-danger" >{{ form.emailErrorText }}</div>

<button type="submit" class="btn btn-success mb-3 mt-3" :disabled="buttonLoading">
  <div
          v-if="buttonLoading"
          class="spinner-border spinner-border-sm"
          role="status"
        ></div>
        Save</button>
</form>
  </div>
</template>

<script>
import { reactive} from "vue";

export default {
    name:'UserForm',
    props: {
    buttonLoading: Boolean,
    user: Object,
  },

    setup(props, { emit }){
     const form = reactive({
      name: "",
      nameErrorText: "",
      family: "",
      familyErrorText: "",
      email:"",
      emailErrorText:""
    });

function setInput() {
      if (props.user !== undefined) {
        form.name = props.user.name;
        form.family = props.user.family;
        form.email = props.user.email;

      }
    }
    setInput();

function validate() {
      if (form.name === "") {
        form.nameErrorText = "name is required";
      } else {
        form.nameErrorText = "";
      }

      if (form.family === "") {
        form.familyErrorText = "family is required";
      } else {
        form.familyErrorText = "";
      }

      if (form.email === "") {
        form.emailErrorText = "email is required";
      } else {
        form.emailErrorText = "";
      }

      if (form.name != "" && form.family != "" && form.email != "") {
       emit("formData", form);
      }
    }

return{validate,form}
}
}
</script>

<style>

</style>