/**
 * Created by LX on 2017/9/3.
 */

/**
 * Actions are just functions that can be called by our components to dispatch mutations.
 * Actions receive the store as the first argument followed by any number of additional arguments.
 */

// mutation必须是同步的，因此不能在每个组件文件中直接操作mutator，否则其余组件的状态无法同步更新

// addNote function is used for dispatching ADD_NOTE mutation
export const addNote = ({dispatch}) => {
  dispatch('ADD_NOTE')
}

export const editNote = ({dispatch}, elem) => {
  dispatch('EDIT_NOTE', elem.target.value)
}

export const deleteNote = ({dispatch}) => {
  dispatch('DELETE_NOTE')
}

export const updateActiveNote = ({dispatch}, note) => {
  dispatch('SET_ACTIVE_NOTE', note)
}

export const toggleFavorite = ({dispatch}) => {
  dispatch('TOGGLE_FAVORITE')
}
