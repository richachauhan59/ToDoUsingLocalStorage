import { ADD_TODO, DELETE_TODO, TOGGLE_TASK } from "./actionTypes";
import { loadData, saveData } from './localStorage'

export const initState = {
  count: 0,
  todo: loadData("tasks") || [],
  total: 0,
  completed: 0
};

export default (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      let data = [...state.todo, action.payload];
      saveData("tasks", data);

      return {
        ...state,
        todo: data,
        total: state.total + 1
      };

    case DELETE_TODO:
      let findId = state.todo.find((item) => item.id === action.payload);
      var count = 0;
      findId.status = !findId.status;
      if (findId.status) {
        count = 0;
      } else {
        count = -1;
      }
      return {
        ...state,
        todo: state.todo.filter((item) => item.id !== action.payload),
        total: state.total - 1,
        completed: state.completed + count
      };

    case TOGGLE_TASK:
      let findItem = state.todo.find((item) => item.id === action.payload);
      findItem.status = !findItem.status;
      var count = 0;
      if (findItem.status) {
        count = 1;
      } else {
        count = -1;
      }
      return {
        ...state,
        todo: state.todo.filter((item) =>
          item.id === action.payload ? findItem : item
        ),
        completed: state.completed + count
      };

    default:
      return state;
  }
};
