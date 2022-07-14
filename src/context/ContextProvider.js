import { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClick, setIsClick] = useState(initialState);
	const [screenSize, setScreenSize] = useState(null);

	const [currentColor, setcurrentColor] = useState("#03C9D7");
	const [currentMode, setcurrentMode] = useState("Light");
	const [themeSetting, setThemeSetting] = useState(false);

	const setMode = (e) => {
		setcurrentMode(e.target.value);
		// setThemeSetting(false);
		localStorage.setItem("themeMode", e.target.value);
	};
	const setColor = (color) => {
		setcurrentColor(color);
		// setThemeSetting(false);
		localStorage.setItem("colorMode", color);
	};

	const handleClick = (clicked) => {
		setIsClick({ ...initialState, [clicked]: true });
	};

	return (
		<StateContext.Provider
			value={{
				activeMenu,
				setActiveMenu,
				isClick,
				setIsClick,
				handleClick,
				screenSize,
				setScreenSize,
				currentColor,
				currentMode,
				setcurrentColor,
				setcurrentMode,
				setMode,
				setColor,
				themeSetting,
				setThemeSetting,
				initialState,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
