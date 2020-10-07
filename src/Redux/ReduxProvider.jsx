import React, { createContext } from "react";

export const ReduxContext = createContext();

class ReduxProvider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <ReduxContext.Provider value={{ store }}>
        {this.props.children}
      </ReduxContext.Provider>
    );
  }
}

export default ReduxProvider;
