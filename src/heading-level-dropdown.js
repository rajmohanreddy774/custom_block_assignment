/**
 * WordPress dependencies
 */
import { ToolbarGroup } from "@wordpress/components";
import { __ } from "@wordpress/i18n";

/**
 * Internal dependencies
 */
import HeadingLevels from "./heading-level-icon";

const HEADING_LEVELS = [1, 2, 3, 4, 5];

/** @typedef {import('@wordpress/element').WPComponent} WPComponent */

/**
 * HeadingLevelDropdown props.
 *
 * @typedef WPHeadingLevelDropdownProps
 *
 * @property {number}                 selectedLevel The chosen heading level.
 * @property {(newValue:number)=>any} onChange      Callback to run when
 *                                                  toolbar value is changed.
 */

/**
 * Dropdown for selecting a heading level (1 through 6).
 *
 * @param {WPHeadingLevelDropdownProps} props Component props.
 *
 * @return {WPComponent} The toolbar.
 */
export default function HeadingLevelGroup({ selectedLevel, onChange }) {
	return (
		<ToolbarGroup
			icon={<HeadingLevels level={selectedLevel} />}
			controls={HEADING_LEVELS.map((targetLevel) => {
				{
					const isActive = targetLevel === selectedLevel;

					return {
						icon: <HeadingLevels level={targetLevel} isPressed={isActive} />,
						isActive,
						onClick() {
							onChange(targetLevel);
						},
					};
				}
			})}
		/>
	);
}
