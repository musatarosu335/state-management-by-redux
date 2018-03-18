import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask } from '../actions/tasks';

const mapStateToProps = ({ task, tasks }) => ({
  task,
  tasks,
});

const mapDispatchToProps = dispatch => ({
  addTask(task) {
    dispatch(addTask(task));
  },
  inputTask(task) {
    dispatch(inputTask(task));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);