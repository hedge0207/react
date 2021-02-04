const CHANGE_INPUT = "todos/CHANGE_INPUT"; // input 값을 변경
const INSERT = "todos/INSERT"; // 새로운 todo를 등록
const TOGGLE = "todos/TOGGLE"; // todo를 체크/체크 해제
const REMOVE = "todos/REMOVE"; // todo를 제거

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3;
export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false,
    },
  ],
};

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        // todos를 돌면서 변경할 id와 todos 배열 내부의 todo 객체의 id가 맞으면 해당 todo 객체의 done을 변경, 아니면 그냥 todo 객체를 반환.
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case REMOVE:
      return {
        ...state,
        // todos를 돌면서 삭제할 id와 todos 배열 내부의 todo 객체의 id가 맞으면 거르고 아니면 포함시킨다.
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}

export default todos;
