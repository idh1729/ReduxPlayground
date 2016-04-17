import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './components/App';
import {ExperimentEditorContainer} from './components/ExperimentEditor';

const store = createStore(reducer);
store.dispatch({
	type: 'SET_EXPERIMENTS',
	experiments: [{name: 'hi'}, {name: 'experiment_2'}]
});
store.dispatch({
	type: 'SELECT_EXPERIMENT_BY_INDEX',
	index: 0
});

const routes = <Route component={App}>
	<Route path="/" component={ExperimentEditorContainer} />
</Route>;

ReactDOM.render(
	<Provider store={store}>
	    <Router history={hashHistory}>
	    	{routes}
	    </Router>
	</Provider>,
	document.getElementById('app')
);