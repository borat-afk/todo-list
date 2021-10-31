import * as React from 'react';
import ListItem from './ListItem';

interface Props {
  bricks: Array<{
    id: number,
    text: string,
    isConfirmed: boolean,
  }>;
};

class List extends React.Component<Props>{
  render () {
    return this.props.bricks.map(todos => <ListItem key={todos.id} data={todos} />)
  }
}

export default List;
