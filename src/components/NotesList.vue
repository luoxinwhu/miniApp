<!--The NotesList component has 3 main roles:
1. Rendering the notes as a list
2. Allowing the user to filter the notes to show all them or just the favorites
3. Calling the updateActiveNote action to update the activeNote in the store
when the user selects a note from the list
-->

<template>
  <div id="notes-list">

    <div id="list-header">
      <h2>NOTE LIST</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!--all notes button-->
        <div class="btn-group" role="group">
          <!--  :class add the Bootstrap active class to the currently selected item in the list
          and to the currently selected filter ('All Notes' or 'Favorites')-->
          <button type="button" class="btn btn-default" @click="show = 'all'" :class="{active: show === 'all'}">
            All notes
          </button>
        </div>
        <!-- favorite notes button-->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default" @click="show = 'favorites'" :class="{active: show === 'favorites'}">
            Favorites
          </button>
        </div>
      </div>
    </div>

    <!--render notes in a list-->
    <div class="container">
      <div class="list-group">
        <!--在fiteredNotes循环-->
        <a v-for="note in filteredNotes" href="#" @click="updateActiveNote (note)" class="list-group-item" :class="{active: activeNote === note}">
          <h4 class="list-group-item-heading">
            <!--using the first 30 characters as the note's title in the list-->
            {{note.text.trim().substring(0, 30)}}
          </h4>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
  import {updateActiveNote} from '../vuex/action'

  export default {
    data () {
      return {
        show: 'all' // show is local state, only used in the NoteList component
      }
    },
    vuex: {
      getters: {
        notes: state => state.notes,
        activeNote: state => state.activeNote
      },
      actions: {
        updateActiveNote
      }
    },
    computed: {
      /** filteredNote return a list of filtered notes based on
      whether the user has selected 'All Notes' or 'Favorites'
       */
      filteredNotes () {
        if (this.show === 'all') {
          return this.notes
        } else if (this.show === 'favorites') {
          return this.notes.filter(note => note.favorite)
        }
      }
    }
  }
</script>

<style>
</style>
