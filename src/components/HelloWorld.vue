<template>
  <div class="row">
    <div class="col-md-6">
      <strong>List of Posts</strong>
      <hr>
      <div v-for="(post,index) in posts" :key="post.id">
        <h6>{{post.title}}</h6>
        <p>ID: {{post.id}} <strong> => </strong> UserId: {{post.userId}}</p>
        <p>{{post.body}}</p>
        <hr>
      </div>
    </div>
    <userid-post></userid-post>
  </div>
</template>

<script>
  import store from '../store/index'
  import { mapGetters } from 'vuex'
  import UseridPost from './PostWithUserId1'

  export default {
    computed: {
      ...mapGetters([
        'posts',
      ]),
    },
    components: {
      UseridPost,
    },
    created() {
      store.dispatch('getPosts')
    },
  }

</script>

