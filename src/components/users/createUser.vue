<template>
  <h1>Create New User</h1>
  <div class="container">
  <form @submit.prevent="Validate">
<label class="form-label">Name:</label>
<input type="text" v-model="form.name" class="form-control" />
<div class="form-text text-danger">{{ form.ErrorText }}</div>

<label class="form-label">Street:</label>
<input type="text" v-model="form.street" class="form-control" />
<div class="form-text text-danger">{{ form.ErrorText }}</div>

<label class="form-label">Suit:</label>
<input type="text" v-model="form.suit" class="form-control" />
<div class="form-text text-danger">{{ form.ErrorText }}</div>

<label class="form-label">City:</label>
<input type="text" v-model="form.city" class="form-control" />
<div class="form-text text-danger">{{ form.ErrorText }}</div>

<button type="submit" class="btn btn-success mb-3" >Save</button>
  </form>
  </div>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
import Swal from "sweetalert2";

export default {
name:'createUser',
setup() {
  const form = reactive({
  name: "",
  street: "",
  suit:"",
  city:"",
  ErrorText: ""
});

function Validate(){
 if (form.name === ""){
  form.ErrorText =" You should Fill it"
 }
 else {
  form.ErrorText = "";

 }
   if (form.name !=="" && form.street !="" ){
        console.log("createuser is called");
        createNewUser();
      }

//  if (form.name !=="" && form.street !="" ){
//   createNewUser();

//  }
}

function createNewUser(){
  axios
     .post("https://jsonplaceholder.typicode.com/users", {
          name: form.name,
          street: form.street,
          userId: 1,
        })
        .then(function () {
          //alert('created successfully')
          console.log('created successfully');
           Swal.fire({
            title: "Thanks!",
            text: "User created successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });

        })
        .catch(function (error) {
          console.log(error);
        });
        console.log(form.name, form.street, form.suit, form.city);
    }
    return{ form , Validate }
}

}
</script>

<style>

</style>