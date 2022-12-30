/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, InspectorControls } from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

import HeadingLevelDropdown from "./heading-level-dropdown";
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
	const { content, level } = attributes;

	let TagName = "";
	if (level < 5) {
		TagName = "h" + level;
	} else if (level === 5) {
		TagName = "p";
	} else if (level === 6) {
		TagName = "div";
	}
	return [
		<InspectorControls style={{ marginBottom: "40px" }}>
			<PanelBody title={"Heading Tag"}>
				<HeadingLevelDropdown
					selectedLevel={level}
					onChange={(newLevel) => setAttributes({ level: newLevel })}
				/>
			</PanelBody>
		</InspectorControls>,
		<div class="cta-container">
			<RichText
				identifier="content"
				key="editable"
				tagName={TagName}
				placeholder="your content"
				value={content}
				onChange={(value) => setAttributes({ content: value })}
				onRemove={() => onReplace([])}
				aria-label="Heading text"
			/>
		</div>,
	];
}
