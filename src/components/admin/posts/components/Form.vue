<template>
<div>
    <form @submit.prevent="validate">
      <div class="mb-3">
        <label class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          v-model.lazy.trim="form.title"
        />
        <div class="form-text text-danger">{{ form.titleErrorText }}</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Body</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          v-model.lazy.trim="form.body"
        ></textarea>
        <div class="form-text text-danger">{{ form.bodyErrorText }}</div>
      </div>
      <button type="submit" class="btn btn-success mb-3" :disabled="buttonLoading">
        <div
          v-if="buttonLoading"
          class="spinner-border spinner-border-sm"
          role="status"
        ></div>
        Save
      </button>
    </form>
    </div>
</template>

<script>
import { reactive } from "vue";
export default {
name: 'PostForm',
props: {
    buttonLoading: Boolean,
    post: Object,
  },
setup(props, { emit }){
     const form = reactive({
      title: "",
      titleErrorText: "",
      body: "",
      bodyErrorText: "",
    });

function setInput() {
      if (props.post !== undefined) {
        form.title = props.post.title;
        form.body = props.post.body;
      }
    }
    setInput();
    
     function validate() {
      if (form.title === "") {
        form.titleErrorText = "Title is required";
      } else {
        form.titleErrorText = "";
      }

       if (form.body === "") {
        form.bodyErrorText = "body is required";
      } else {
        form.bodyErrorText = "";
      }

      if (form.title !=="" && form.body !="" ){
        emit("formData", form);
      }
    }
    return {validate,form}
}
}
</script>

<style>

</style>