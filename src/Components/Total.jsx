import React from "react";
import { addTodo, deleteTodo, toggleTask } from "../Redux/actions";
import connect from "../Redux/connect";

class Total extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    console.log(this.props);
    const { total, completed } = this.props;
    var pendings = total - completed;

    return (
      <>
        <div>
          <h1>Total Tasks: {total}</h1>
          <h1>Pending Tasks: {pendings}</h1>
          <h1>Completed Tasks: {completed}</h1>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  total: state.app.total,
  completed: state.app.completed,
  Pending: state.app.pending
});
const mapDispatchToProps = (dispatch) => ({
  addTodo: () => dispatch(addTodo(1)),
  deleteTodo: () => dispatch(deleteTodo(1)),
  toggleTask: () => dispatch(toggleTask())
});
export default connect(mapStateToProps, mapDispatchToProps)(Total);
