import * as React from 'react';

interface Props {
  count: number;
}

const App: React.FunctionComponent<Props> = (props) => {
  return <h1>{props.count}</h1>
}

export default App;
