import React from "react";
import {
  addTodo,
  deleteTodo,
  toggleTask,
  handleLogout
} from "../Redux/actions";
import { connect } from "react-redux";
// import style from './todo.module.css'
import Login from "../Redux/Login";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  handleDelete = (e) => {
    const { name: id } = e.target;
    const { deleteTodo } = this.props;
    deleteTodo(id);
  };

  handleLogout = () => {
    handleLogout();
  };

  render() {
    const { todo, addTodo, toggleTask, isAuth, handleLogout } = this.props;
    console.log(todo);
    if (!isAuth) {
      return <Login />;
    } else {
      return (
        <>
          <input
            value={this.state.value}
            onChange={(e) =>
              this.setState({
                value: e.target.value
              })
            }
          />

          <button
            onClick={() => {
              addTodo(this.state.value);
            }}
          >
            Add
          </button>

          <button onClick={handleLogout}>Logout</button>

          {todo &&
            todo.map((item) => (
              <div key={item.id}>
                <div>
                  <input
                    type="checkbox"
                    onChange={() => {
                      toggleTask(item.id);
                    }}
                  />
                </div>
                <div>{item.title}</div>
                <div>
                  <button name={item.id} onClick={this.handleDelete}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.app.todo,
    isAuth: state.auth.isAuth
  };
};

const mapDispatchToProps = (dispatch) => ({
  addTodo: (payload) => dispatch(addTodo(payload)),
  deleteTodo: (payload) => dispatch(deleteTodo(payload)),
  toggleTask: (payload) => dispatch(toggleTask(payload)),
  handleLogout: () => dispatch(handleLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
