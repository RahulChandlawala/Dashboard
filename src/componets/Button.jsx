import React from "react";
import { useStateContext } from "../context/ContextProvider";

const Button = ({
	icon,
	bgColor,
	color,
	bgHoverColor,
	size,
	text,
	borderRadius,
	width,
}) => {
	const { setIsClick, initialState } = useStateContext();
	// console.log(initialState);
	return (
		<button
			type="button"
			onClick={() => setIsClick(initialState)}
			style={{ backgroundColor: bgColor, color, borderRadius }}
			className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
		>
			{icon}
			{text}
		</button>
	);
};

export default Button;
