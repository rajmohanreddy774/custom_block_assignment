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
import { RichText } from "@wordpress/block-editor";
import { Icon } from "@wordpress/components";
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
	const { heading } = attributes;

	function onClickFunction() {
		var x = document.getElementById("container");
		if (x.style.display === "none") {
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	}

	function onChangeHeading(newHeading) {
		setAttributes({ heading: newHeading });
	}
	return [
		<>
			<div>
				<Icon
					icon={() => (
						<svg>
							<path onClick={onClickFunction} d="M5 4v3h5.5v12h3V7H19V4z" />
						</svg>
					)}
				/>
			</div>
			<div id="container">
				<RichText
					tagName="h2"
					value={heading}
					allowedFormats={["core/bold", "core/italic"]}
					onChange={onChangeHeading}
					placeholder="Enter Table heading"
				/>
			</div>
		</>,
	];
}
