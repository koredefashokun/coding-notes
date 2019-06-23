interface Action {
	type: string;
	payload: { [key: string]: string };
}

const appReducer = (state = {}, action: Action) => {
	switch (action.type) {
		case 'SET_ACTIVE_EDITOR':
			return { ...state, note: action.payload.note };
		case 'CREATE_NEW_EDITOR':
			break;
		default:
			return state;
	}
};

export default appReducer;
