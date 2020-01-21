import React from 'react';
import baseN from 'base-n';
import './index.css';

export default class KaktovikNumber extends React.PureComponent {
  kaktovikNumber = () => {
    return baseN.create({
      characters:'\uE5B3\uE5A0\uE5A1\uE5A2\uE5A3\uE5A4\uE5A5\uE5A6\uE5A7\uE5A8\uE5A9\uE5AA\uE5AB\uE5AC\uE5AD\uE5AE\uE5AF\uE5B0\uE5B1\uE5B2'
    }).encode(Number((Number(this.props.decimal) || 0).toFixed(0)))
  }

  render() {
    return (
    <span className="kaktovik-number">{this.kaktovikNumber()}</span>
    );
  }
}