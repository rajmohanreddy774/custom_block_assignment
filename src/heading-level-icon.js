/**
 * WordPress dependencies
 */
import { ButtonGroup, PanelRow } from "@wordpress/components";

/** @typedef {import('@wordpress/element').WPComponent} WPComponent */

/**
 * HeadingLevelIcon props.
 *
 * @typedef WPHeadingLevelIconProps
 *
 * @property {number}   level     The heading level to show an icon for.
 * @property {?boolean} isPressed Whether or not the icon should appear pressed; default: false.
 */

/**
 * Heading level icon.
 *
 * @param {WPHeadingLevelIconProps} props Component props.
 *
 * @return {?WPComponent} The icon.
 */
export default function HeadingLevels({ level, isPressed = false }) {
	const levelToPath = {
		1: "H1",
		2: "H2",
		3: "H3",
		4: "P",
		5: "Div",
	};

	return (
		<ButtonGroup>
			<PanelRow isPressed={isPressed} variant="primary">
				{levelToPath[level]}
			</PanelRow>
		</ButtonGroup>
	);
}
