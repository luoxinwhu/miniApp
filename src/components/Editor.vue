<!--
1. grabs the currently activeNote from the store and displays it in a <textarea>
2. calls the editNote() action whenever the user updates the note
-->


<template>
  <div id="note-editor">
    <!--把editNote action记录为事件句柄，用户的任意输入事件触发editNote action-->
    <textarea :value="activeNoteText" @input="editNote" class="form-control"></textarea>
  </div>
</template>

<script>
  import {editNote} from '../vuex/action'

  export default {
    vuex: {
      getters: {
        activeNoteText: state => state.activeNote.text
      },
      actions: {
        editNote
      }
    }
  }
</script>
