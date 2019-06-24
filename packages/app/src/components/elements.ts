import styled, { css } from 'styled-components';
import Editor from 'react-simple-code-editor';

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

export const EditorTextArea = styled.div`
	border: none;
	width: 100%;
	display: flex;
	flex-grow: 1;
	flex-direction: column;
	align-items: center;
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

interface BlockContainerProps {
	mode: 'text' | 'code';
	writingMode: boolean;
}

export const BlockContainer = styled.div`
	margin: 10px 0;
	min-height: 10px;
	max-height: 400px;
	${({ mode }: BlockContainerProps) =>
		mode === 'code' ? codeBlockStyles : textBlockStyles}
	textarea {
		border: none;
		resize: none;
		font-size: 16px;
		width: 100%;
		height: 100%;
		font-family: inherit !important;
	}
`;

export const BlockCodeTextarea = styled(Editor)`
	border: none;
	resize: none;
	font-size: 16px;
	width: 100%;
	height: 100%;
`;

interface SidebarItemContainerProps {
	selected?: boolean;
}

export const SidebarItemContainer = styled.p`
	display: flex;
	justify-content: center;
	padding: 10px;
	${({ selected }: SidebarItemContainerProps) =>
		selected &&
		css`
			border-left: 6px solid #505050;
		`}
	border-top: 1px solid #D3D3D3;
	border-bottom: 1px solid #d3d3d3;
`;

const codeBlockStyles = css`
	font-family: 'SF Mono', 'Dank Mono', monospace !important;
	border-radius: 8px;
	width: 75%;
	padding: 20px;
	box-shadow: 0 0 20px 10px rgba(239, 239, 239, 0.5);
`;

const textBlockStyles = css`
	border: none;
	width: 90%;
	font-family: sans-serif;
`;
