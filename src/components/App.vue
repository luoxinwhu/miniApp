<!--The root componnet will be importing and combining the other 3 componnets-->

<template>
  <div id="app">
    <toolbar></toolbar>
    <notes-list></notes-list>
    <editor></editor>
  </div>
</template>

<script>
  import Toolbar from './Toolbar.vue'
  import NotesList from './NotesList.vue'
  import Editor from './Editor.vue'

  export default {
    components: {
      Toolbar,
      NotesList,
      Editor
    }
  }

</script>

<style>
#app {
  border: 1px solid gray;
  width: 100%;
  height: 800px;
}
</style>
