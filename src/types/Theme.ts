/* eslint-disable no-unused-vars */
export enum ThemeName {
	Dark = 'dark',
	Light = 'light'
}

export type ThemeType = {
	name: ThemeName,
	highlight: string,
	background: string,
	secondary: string,
	detail: string,
	text: string
}

export default ThemeType;