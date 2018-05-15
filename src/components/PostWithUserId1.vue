<template>
    <div class="col-md-6">
      <strong>List of Posts With UserId 10</strong>
      <hr>
      <div v-for="(post,index) in postsId" :key="post.id">
        <h6>{{post.title}}</h6>
        <p>ID: {{post.id}} <strong> => </strong> UserId: {{post.userId}}</p>
        <p>{{post.body}}</p>
        <hr>
      </div>
    </div>
</template>


<script>
  import store from '../store/index'
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'posts',
        'postsId'
      ])
    },
    created() {
      store.dispatch('getPosts')
    },
  }
</script>


