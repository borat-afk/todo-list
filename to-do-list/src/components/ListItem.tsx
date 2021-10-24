import * as React from 'react';

interface Props {
  data: {
    id: number,
    text: string,
  },
};

class ListItem extends React.Component<Props>{
  render () {
    return <p className={'list-item'}>{this.props.data.text}</p>
  }
}

export default ListItem;
