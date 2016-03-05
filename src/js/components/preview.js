import React from 'react';

import Counter from './counter';

import MDReactComponent from 'markdown-react-js';

export default React.createClass({
  displayName: "Preview",
  PropTypes: {
    note: React.PropTypes.string
  },
  render: function () {
    var {text} = this.props;
    return (
      <div className="preview">
        <MDReactComponent text={text} />
      </div>
    );
  }
});
