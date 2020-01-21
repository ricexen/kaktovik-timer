import React from 'react';
import KaktovikNumber from './kaktovik-number';
import './App.css'


class App extends React.PureComponent {
  timestamp = Date.now;
  state = { start: this.timestamp(), now: this.timestamp() };
  getDelta = () => {
    const { now, start } = this.state;
    return Number(((now - start) / 1000).toFixed(0));
  }

  updateNow = () => {
    this.setState({ now: this.timestamp() });
  }

  componentDidMount() {
    setInterval(this.updateNow, 1000);
  }

  render() {
    return (
      <div className="App">
        <KaktovikNumber decimal={this.getDelta()} />
        <p>{this.getDelta()}</p>
      </div>
    );
  }
}

export default App;
