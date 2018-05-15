import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import endpoint from '../apis/endpoints'
export default new Vuex.Store({

    // State stores data from the Mutations for future use
    state: {
        posts: [],
    },

    // Getters collect data from the state and write logic on them
    // And send them to the components
    getters: {
        
        // this method displays all the posts in the "state.posts"
        posts: state => {
            return state.posts
        },

        // this method displays all the posts with "userId=10" in the "state.posts"
        postsId: state => {
            return state.posts.filter((data) => {
                return data.userId === 10;
            });
        }
    },

    // Actions makes the server calls and are Async
    actions: {
        async getPosts(context) {
            let data = await endpoint.getPosts()
            context.commit('setPosts', data);
        }
    },

    // Mutations takes data from the Actions and store it in the State
    mutations: {
        setPosts(state, data) {
            state.posts = data;
        }
    },
    
})