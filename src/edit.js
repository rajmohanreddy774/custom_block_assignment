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
import {
	RichText,
	InspectorControls,
	ColorPalette,
} from "@wordpress/block-editor";
import { PanelBody } from "@wordpress/components";

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
	const { title, body, titleColor } = attributes;
	function onChangeTitle(newTitle) {
		setAttributes({ title: newTitle });
	}
	function onChangeBody(newBody) {
		setAttributes({ body: newBody });
	}
	function onTitleColorChange(newColor) {
		setAttributes({ titleColor: newColor });
	}
	return [
		<InspectorControls style={{ marginBottom: "40px" }}>
			<PanelBody title={"Font Color Settings"}>
				<p>
					<strong>Select a Title color</strong>
				</p>
				<ColorPalette value={titleColor} onChange={onTitleColorChange} />
			</PanelBody>
		</InspectorControls>,
		<div class="cta-container">
			<RichText
				key="editable"
				tagName="h2"
				placeholder="your cta title"
				value={title}
				onChange={onChangeTitle}
				style={{ color: titleColor }}
			/>
			<RichText
				key="editable"
				tagName="p"
				placeholder="your cta description"
				value={body}
				onChange={onChangeBody}
			/>
		</div>,
	];
}
