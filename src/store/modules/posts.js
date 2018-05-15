import endpoint from '../../apis/endpoints'

// State stores data from the Mutations for future use
const state = {
    posts: [],
    user_post: []
};

// Getters collect data from the state and write logic on them
// And send them to the components
const getters = {

    // this method displays all the posts in the "state.posts"
    posts: state => {
        return state.posts
    },

    userPost: state => {
        console.log(state.user_post)
        return state.user_post
    },

    // this method displays all the posts with "userId=10" in the "state.posts"
    postsId: state => {
        return state.posts.filter((data) => {
            return data.userId === 10;
        });
    }
};

// Actions makes the server calls and are Async
const actions = {
    async getPosts(context) {
        await endpoint.getPosts()
        .then((data) => {
            context.commit('setPosts', data);
          })
    }
};

// Mutations takes data from the Actions and store it in the State
const mutations = {
    setPosts(state, data) {
        state.posts = data;
    },
    userPost(state, payload) {
        state.user_post = payload;
    }
};

export default {state, getters, actions, mutations};