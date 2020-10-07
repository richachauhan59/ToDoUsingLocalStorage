import React from "react";
import { ReduxContext } from "../Redux/ReduxProvider";

function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrapperComponent) {
    class ConnectWrapper extends React.Component {
      componentDidMount() {
        const { store } = this.context;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
      }
      componentWillUnmount() {
        this.unsubscribe();
      }
      render() {
        const { store } = this.context;
        return (
          <WrapperComponent
            {...mapStateToProps(store.getState())}
            {...mapDispatchToProps(store.dispatch)}
          />
        );
      }
    }

    ConnectWrapper.contextType = ReduxContext;

    return ConnectWrapper;
  };
}

export default connect;
