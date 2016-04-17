import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export const ExperimentEditor = React.createClass({
    mixins: [PureRenderMixin],
    render: function() {
        const {experiments, select_experiment_by_index} = this.props;
        return <div className="experiments">
            {experiments.map((experiment, index) =>
                <button
                    key={experiment.name}
                    onClick={select_experiment_by_index.bind(null, index)}>
                    <h1>{experiment.name}</h1>
                </button>
            )}
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        experiments: state.getIn(['experiments', 'experiments']),
    }
}

export const ExperimentEditorContainer = connect(mapStateToProps, actionCreators)(ExperimentEditor);