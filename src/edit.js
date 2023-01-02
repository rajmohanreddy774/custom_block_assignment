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
 *
 *
 */

import {
	useBlockProps,
	RichText,
	InspectorControls,
} from "@wordpress/block-editor";

import {
	TextControl,
	ToggleControl,
	PanelBody,
	PanelRow,
} from "@wordpress/components";

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
	const blockProps = useBlockProps();

	return (
		<>
			<InspectorControls>
				<PanelBody title="Form Settings" initialOpen={false}>
					<PanelRow>
						<TextControl
							label="List ID"
							onChange={(list_id) => setAttributes({ list_id })}
							value={attributes.list_id}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label="Double opt In"
							onChange={() =>
								setAttributes({ doubleoptin: !attributes.doubleoptin })
							}
							checked={attributes.doubleoptin}
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<RichText
					tagName="h2"
					value={attributes.heading}
					allowedFormats={["core/bold", "core/italic"]}
					onChange={(heading) => setAttributes({ heading })}
					placeholder="Enter heading"
					style={{ color: "black", background: "none" }}
				/>
				<p>
					<span>Email Address</span>
					<br />
					<RichText
						tagName="span"
						value={attributes.buttonText}
						allowedFormats={[]}
						onChange={(buttonText) => setAttributes({ buttonText })}
						placeholder="Button Name..."
						style={{ border: "2px solid black", background: "none" }}
					/>
				</p>
			</div>
		</>
	);
}
