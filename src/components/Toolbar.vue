<!-- the Toolbar component needs to get the activeNote property from the state -->
<template>
  <div id="toolbar">
    <i @click="addNote" class="glyphicon glyphicon-plus"></i>
    <i @click="toggelFavorite"
       class="glyphicon glyphicon-star"
       :class="{starred: activeNote.favorite}"></i> <!--We want to add the starred class to the button if the selected note is favorited.-->
    <i @click="deleteNote" class="glyphicon glyphicon-remove"></i>
  </div>
</template>

<script>
  import {addNote, deleteNote, toggleFavorite} from '../vuex/action'

  export default {
    vuex: {
      // 通过getter获取state的activeNote属性
      getters: {
        activeNote: state => state.activeNote
      },
      actions: {
        addNote,
        deleteNote,
        toggleFavorite
      }
    }
  }
</script>
