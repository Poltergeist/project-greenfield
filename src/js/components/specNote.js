import React from 'react';

import Editor from './editor';
import Preview from './preview';

export default React.createClass({
  displayName: "SpecNote",
  getInitialState: function() {
    return {
      text: ""
    };
  },
  changeTextHandler: function (event) {
    this.setState({
      text: event.target.value
    });
  },
  render: function () {
    const {text} = this.state;
    return (
      <div className="application">
        <Preview text={text}/>
        <Editor onChangeHandler={this.changeTextHandler}/>
      </div>
    );
  }
});
