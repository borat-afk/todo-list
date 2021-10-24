import * as React from 'react';
import Form from './components/Form';
import List from './components/List';

interface Props {
  text: string;
};

class App extends React.Component<Props>{
  state = {
    bricks: []
  }
  componentDidMount = () => {
    this.fetchAllBricks();
  }
  fetchAllBricks = () => {
    fetch('/api/bricks').then(response => response.json()).then(bricks => {
      this.setState({ bricks })
    });
  }
  addNewBrick = (text: string) => {
    fetch('/api/bricks', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(() => this.fetchAllBricks())
  }
  render = () => {
    const { bricks } = this.state;
    return (
      <div>
        <h1>The Wall</h1>
        <Form addNewBrick={this.addNewBrick} name={'Form'} />
        <List bricks={bricks}/>
      </div>
    );
  }
}

export default App;
