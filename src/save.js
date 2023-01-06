/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
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
export default function save(props) {
	var attributes = props.attributes;
	var alignment = props.attributes.alignment;
	var facebookURL = props.attributes.facebookURL;
	var twitterURL = props.attributes.twitterURL;
	var instagramURL = props.attributes.instagramURL;
	var linkedURL = props.attributes.linkedURL;
	var emailAddress = props.attributes.emailAddress;

	return (
		<div className={props.className}>
			<RichText tagName="h3" value={props.attributes.title} />
			<RichText tagName="h5" value={props.attributes.subtitle} />
			<RichText tagName="p" value={props.attributes.bio} />
		</div>
	);
}
