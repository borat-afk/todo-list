import * as React from 'react';
import ListItem from './ListItem';

interface Props {
  bricks: Array<{
    id: number,
    text: string,
  }>;
};

class List extends React.Component<Props>{
  render () {
    return this.props.bricks.map(brick => <ListItem key={brick.id} data={brick} />)
  }
}

export default List;
