import {Map} from 'immutable';

function selectExperimentByIndex(state, index) {
	console.log('selectExperimentByIndex(state, index)', state, index);
	return state.set(['experiments', 'selectedIndex'], index);
}

function setExperiments(state, experiments) {
	return state.setIn(['experiments', 'experiments'], experiments);
}

export default function(state = Map(), action) {
	console.log('state', state);
	switch (action.type) {
		case 'SELECT_EXPERIMENT_BY_INDEX': {
			return selectExperimentByIndex(state, action.index);
		}
		case 'SET_EXPERIMENTS': {
			return setExperiments(state, action.experiments);
		}
	}
}