import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    render: function() {
        return this.props.children;
    }
});