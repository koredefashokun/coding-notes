import styled from 'styled-components';

export const AppContainer = styled.div`
	display: grid;
	grid-gap: 0;
	grid-template-columns: minmax(250px, 0.33fr) 1fr;
	height: 100vh;
`;

export const EditorContainer = styled.main`
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

export const EditorTitleInput = styled.input`
	border: none;
	color: #505050;
	font-size: 25px;
	font-weight: bold;
	width: 100%;
	margin-bottom: 10px;
	&:focus {
		outline: none;
	}
	&::placeholder {
		color: #d3d3d3;
	}
`;

export const EditorTextArea = styled.textarea`
	font-family: 'SF Mono', 'Dank Mono', monospace;
	font-size: 14px;
	border: none;
	width: 100%;
	flex-grow: 1;
	resize: none;
	&:focus {
		outline: none;
	}
`;

export const SidebarContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f2f2f2;
`;
