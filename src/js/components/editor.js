import React from 'react';

import MDReactComponent from 'markdown-react-js';

export default React.createClass({
  displayName: "Editor",
  PropTypes: {
    onChangeHandler: React.PropTypes.func.isRequired
  },

  render: function () {
    return (
      <textarea className="editor"
        onChange={this.props.onChangeHandler}
        defaultValue="" />
    );
  }
});
