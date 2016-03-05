import React from 'react';

export default React.createClass({
  contextTypes: {
    store: React.PropTypes.object
  },
  componentDidMount: function () {
    this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());
  },
  componentWillUnmount: function () {
    this.unsubscribe();
  },
  handleIncrement: function () {
    this.context.store.dispatch({type: "INCREMENT" });
  },
  handleDecrement: function () {
    this.context.store.dispatch({type: "DECREMENT" });
  },
  render: function () {
    var {counter} = this.context.store.getState();
    return (
      <div>
        <button type="button" onClick={this.handleIncrement}>+</button>
        {counter}
        <button type="button" onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
});
