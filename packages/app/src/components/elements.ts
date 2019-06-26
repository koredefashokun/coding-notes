import styled, { css } from 'styled-components';
import Editor from 'react-simple-code-editor';
import { Link } from 'react-router-dom';

/*
 * App/Global Styles
 */

export const AppContainer = styled.div`
	display: grid;
	grid-gap: 0;
	grid-template-columns: minmax(250px, 0.33fr) 1fr;
	height: 100vh;
`;

/*
 * Editor Styles
 */

export const EditorContainer = styled.main`
	display: flex;
	flex-direction: column;
	padding: 20px;
	overflow-y: scroll;
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

/*
 * Block Styles
 */

interface BlockContainerProps {
	mode: 'text' | 'code';
	writingMode?: boolean;
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
		color: #333;
	}
`;

export const BlockCodeTextarea = styled(Editor)`
	border: none;
	resize: none;
	font-size: 16px;
	width: 100%;
	height: 100%;
`;

export const BlockActionButton = styled.button`
	background-color: rgba(0, 0, 0, 0.04);
	color: #505050;
	font-size: 14px;
	font-weight: 500;
	padding: 10px;
	border: none;
	border-radius: 4px;
	transition: background-color 500ms linear;
	&:hover {
		cursor: pointer;
		background-color: rgba(0, 0, 0, 0.1);
	}
	&:focus {
		outline: none;
	}
	&:not(:last-of-type) {
		margin-right: 15px;
	}
`;

/*
 * Sidebar styles
 */

export const SidebarContainer = styled.div`
	width: 100%;
	height: 100%;
	background-color: #f2f2f2;
`;

interface SidebarItemContainerProps {
	selected?: boolean;
}

export const SidebarItemContainer = styled(Link)`
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	font-family: sans-serif;
	font-weight: 500;
	padding: 10px;
	background-color: transparent;
	color: #505050;
	text-decoration: none;
	${({ selected }: SidebarItemContainerProps) =>
		selected &&
		css`
			border-left: 6px solid #505050;
		`}
	border-bottom: 1px solid #d3d3d3;
	transition: background-color 300ms ease-in;
	&:hover {
		background-color: rgba(0, 0, 0, 0.08);
	}
`;

export const SidebarActionContainer = styled.button`
	padding: 6px;
	background-color: #ed7e6d;
	border-radius: 4px;
	border: none;
	font-size: 12px;
	color: #f2f2f2;
	&:hover {
		cursor: pointer;
	}
	&:focus {
		outline: none;
	}
`;

export const SidebarActionButton = styled.button`
	display: block;
	margin: auto;
	padding: 10px 0;
	margin-top: 20px;
	width: 90%;
	background-color: #505050;
	border-radius: 4px;
	color: #f2f2f2;
	font-size: 14px;
	text-align: center;
	text-transform: uppercase;
	&:focus {
		outline: none;
	}
	&:hover {
		cursor: pointer;
	}
`;

/*
 * Modal Styles
 */

const codeBlockStyles = css`
	font-family: 'SF Mono', 'Dank Mono', monospace !important;
	border-radius: 8px;
	width: 75%;
	padding: 20px;
	box-shadow: 0 0 20px 10px rgba(239, 239, 239, 0.9);
`;

const textBlockStyles = css`
	border: none;
	width: 85%;
	font-family: sans-serif;
`;
