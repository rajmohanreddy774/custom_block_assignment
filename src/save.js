import { RichText } from "@wordpress/block-editor";

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const { title, backgroundImage, content, level, alignment } = attributes;
	let TagName = "";
	if (level < 5) {
		TagName = "h" + level;
	} else if (level === 5) {
		TagName = "p";
	} else if (level === 6) {
		TagName = "div";
	}
	return [
		<div
			class="cta-container"
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<RichText.Content
				style={{ textAlign: alignment }}
				tagName={TagName}
				value={title}
			/>
			<RichText.Content tagName={TagName} value={content} />
		</div>,
	];
}
