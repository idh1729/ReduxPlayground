export function select_experiment_by_index(index) {
	return {
		type: 'SELECT_EXPERIMENT_BY_INDEX',
		index: index
	};
}