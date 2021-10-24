import * as React from 'react';

interface Props {
  name: string;
  addNewBrick: any,
};

class Form extends React.Component<Props>{
  state = {
    text: '',
  }
  onInputChange = (e: React.FocusEvent<HTMLInputElement>) => this
    .setState({[e.target.name]: e.target.value});
  onButtonClick() {
    this.props.addNewBrick(this.state.text);
  }
  render () {
    const { text } = this.state;

    return (
      <div>
        <input type={'text'} value={text} name={'text'} onChange={this.onInputChange} />
        <button onClick={this.onButtonClick}>Send message</button>
      </div>
    );
  }
}

export default Form;
