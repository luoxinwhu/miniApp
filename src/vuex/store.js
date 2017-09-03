/**
 * Created by LX on 2017/9/3.
 */

/**
 * the store.js file which will hold our state object and mutators
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// the root, initial state object
/** state object
 The state object in store.js will contain the application level state, which if you recall
 from the previous section, is any state that is shared between multiple components.
 */
const state = {
  notes: [],
  activeNote: {}
}

// define the possible mutations that can be applied to our state
/** mutation object
 * mutator is responsible for: adding, deleting, editing, setting or toggling operation for the active note
 * */
const mutations = {
  ADD_NOTE (state) {
    const newNote = {
      text: 'New note',
      favorite: false
    }
    // only mutators can mutate the state
    state.notes.push(newNote)
    state.activeNote = newNote
  },

  EDIT_NOTE (state, text) {
    state.activeNote.text = text
  },

  DELETE_NOTE (state) {
    state.notes.$remove(state.activeNote)
    state.activeNote = state.notes[0]
  },

  SET_ACTIVE_NOTE (state, note) {
    state.activeNote = note
  },

  TOGGLE_FAVORITE (state) {
    state.activeNote.favorite = !state.activeNote.favorite
  }
}

// create the Vuex instance by combining the state and mutations objects
// then export the Vuex store for use by our components
export default new Vuex.Store({
  state,
  mutations
})
