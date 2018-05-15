<template>
  <div class="row">
    <div class="col-md-6">
      <strong>Create temp.. Post</strong>
      <hr>
      <div>
        <br>
        <input v-model="blog.id" type="text" name="firstname" id="id" placeholder="Id">
        <br><br>
         <input v-model="blog.userId" type="text" name="firstname" id="userId" placeholder="UserId">
        <br><br>
         <input v-model="blog.title" type="text" name="firstname" id="title" placeholder="Title">
        <br><br>
        <textarea v-model="blog.body" type="text" name="lastname" id="body" placeholder="Body"></textarea>
        <br>
        <button @click="createBlog()">Create</button>
    </div>
    </div>
     <div class="col-md-6">
      <strong>List of Posts</strong>
      <hr>
      <div v-for="(post,index) in userPost" :key="post.id">
        <h6>{{post.title}}</h6>
        <p>ID: {{post.id}} <strong> => </strong> UserId: {{post.userId}}</p>
        <p>{{post.body}}</p>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '../store/index'
  import { mapGetters } from 'vuex'

  export default {
    data: () => {
        return {
            blog: {
                id: '',
                userId: '',
                title: '',
                body:''
            }
        }
    },

    computed: {
      ...mapGetters([
        'userPost',
      ]),
    },

    methods: {
        createBlog(){
            store.commit('userPost', this.blog);
        }
    },

    components: {
    //   UseridPost,
    },
  }

</script>

