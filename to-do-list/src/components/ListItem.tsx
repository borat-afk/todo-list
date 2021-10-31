import * as React from 'react';
import appState from '../store/ToDoList';

interface Props {
  data: {
    id: number,
    text: string,
    isConfirmed: boolean,
  },
};

class ListItem extends React.Component<Props>{
  render () {
    let checkedTodo = (e: React.FocusEvent<HTMLInputElement>) => {
      appState.changeOfStatusTodos({
        id: this.props.data.id,
      })
      console.log(this.props.data)
      console.log('e.target.value: ', e.target.value)
      console.log('e.target.checked: ', e.target.checked)
    }
    return (
      <div>
        <p className={'list-item'}>{this.props.data.text}</p>
        <input type={"checkbox"} onChange={checkedTodo}/>
      </div>
    )
  }
}

export default ListItem;
