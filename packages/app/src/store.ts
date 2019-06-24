interface Action {
	type: string;
	payload: { [key: string]: string | number | [] };
}

const initialState = {
	editor: {
		title: '',
		blocks: []
	}
}

const appReducer = (state = initialState, action: Action) => {
	switch (action.type) {
		case 'SET_ACTIVE_EDITOR':
			// This will be passed the new id in
			return { ...state, editor: action.payload.note };
		case 'CREATE_NEW_EDITOR':
			break;
		default:
			return state;
	}
};

export default appReducer;
