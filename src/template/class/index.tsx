import React, { Component } from 'react';

import './styles.css';

interface Props {

}

interface State {

}

class ComponentName extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
          <div className="ComponentName">
              ComponentName
          </div>
    );
  }
}

export default ComponentName;
