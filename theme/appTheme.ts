import { ThemeColors } from './@types';

const defaultColors = {
	purple: '#4b4ba3e3',
	dark: '#000000',
	tableBackground: 'rgba(242, 246, 250, 0.7)',
	white: '#ffffff',
};

export const darkTheme: ThemeColors = {
	...defaultColors,
	background: '#1B1B1B',
	blockBorder: '#232323',
	sidebarBackground: '#252525',
	sidebarActive: '#4F4B4A',
	secondaryBackground: '#383838',
	tertiaryBackground: '#4F4B4A',
	checkboxBackground: '#AAA',
	alternateText: '#ccc',
	alternateBackground: '#4F4B4A',
	tableHover: '#383838',
	lightTableHoverBackground: '#38383830',
	advancedToolbarBackground: '#252525',
	detailsShadowColor: 'rgba(0, 0, 0, 0.44)',
	dimmerBackground: 'rgba(24,24,24,.90)',
	stripedBackground: '#252525',
	toolbarShadowColor: '#181818',
	paginateBackground: '#383838',
	iconColor: '#ccc',
	tableText: '#bbb',
	hoverColor: '#4F4B4A',
	borderColor: '#383838',
	darkText: '#aaa',
	darkHover: '#ccccccaa',
	boxShadow: 'rgba(0, 0, 0, 0.8)',
	primary: '#ccc',
	dark: '#000000',
	sidebarHover: '#404040',
	red: '#DD6575',
	inputBorder: '#333',
	overrideBackground: '#38383899',
	addRolesBackground: '#252525',
	userPrivilegeShadow: 'rgb(0, 0, 0)',
	green: '#30de5a',
	blue: '#5499C7',
	separatorColor: '#444',
	deepShadow: '#000',
	alternateShadow: 'none !important;',
	tertiary: {
		fade: '#4F4B4A2e',
	},
	lightTextColor: 'rgba(255,255,255,.6)',
	stepBorderColor: 'rgb(37 37 37)',
	stepHoverBackgroundColor: '#383838',
	stepActiveColor: '#292929',
	stepIconColor: '#cccccc',
	messageInfoHeaderColor: '#0e566c',
	messageWarningHeaderColor: '#dc8f16',
	messageWarningTextColor: '#573a08',
	messageInfoTextColor: '#32bce8',
	dangerColor: '#fd4141',
	infoDivider: '#313131',
	chartBackground: '#fff',
	chartText: defaultColors.dark,
};

export const lightTheme: ThemeColors = {
	...defaultColors,
	background: '#fff',
	blockBorder: '#f7f7f7',
	sidebarBackground: '#fff',
	secondaryBackground: '#f7f7f7',
	tertiaryBackground: '#4b4ba3e3',
	advancedToolbarBackground: 'rgba(238, 238, 238, 0.24)',
	checkboxBackground: '#fff',
	detailsShadowColor: 'rgba(34,36,38,.15)',
	toolbarShadowColor: '#dbdbdb',
	alternateText: '#4b4ba3e3',
	paginateBackground: '#4b4ba3e3',
	sidebarHover: '#eeeeee',
	alternateBackground: '#bbb',
	stripedBackground: 'rgba(242, 246, 250, 0.7)',
	tableText: 'rgba(0,0,0,.87)',
	tableHover: 'rgba(234, 250, 241, 0.4)',
	userPrivilegeShadow: 'rgb(153, 153, 153)',
	lightTableHoverBackground: 'rgb(234 250 241 / 30%)',
	sidebarActive: '#e6e6e6',
	iconColor: '#555',
	darkText: '#555',
	dimmerBackground: 'rgba(255,255,255,.90)',
	borderColor: '#dbe3ea',
	darkHover: '#0000000a',
	hoverColor: '#999',
	white: '#ffffff',
	primary: 'rgba(0,0,0,.87)',
	boxShadow: 'rgba(0, 0, 0, 0.125)',
	red: '#C9152E',
	inputBorder: '#fff',
	overrideBackground: '#eeeeee99',
	addRolesBackground: 'rgba(242, 246, 250, 0.7)',
	green: 'teal',
	blue: '#145688',
	separatorColor: '#ddd',
	deepShadow: '#aaa',
	alternateShadow: '0px 0px 6px #eee',
	tertiary: {
		fade: '#4b4ba32e',
	},
	lightTextColor: 'rgba(0,0,0,.6)',
	stepBorderColor: 'rgba(34,36,38,.15)',
	stepHoverBackgroundColor: '#dcddde',
	stepActiveColor: '#f3f4f5',
	stepIconColor: '#212121',
	messageWarningHeaderColor: '#794b02',
	messageWarningTextColor: '#573a08',
	messageInfoHeaderColor: '#0e566c',
	messageInfoTextColor: '#276f86',
	dangerColor: '#8b0000',
	infoDivider: '#e4e5e6',
	chartBackground: '#3a3b3c',
	chartText: defaultColors.white,
};