/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText } from "@wordpress/block-editor";
import { SVG, Path } from "@wordpress/components";
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
	var attributes = props.attributes;
	var alignment = props.attributes.alignment;
	var facebookURL = props.attributes.facebookURL;
	var twitterURL = props.attributes.twitterURL;
	var instagramURL = props.attributes.instagramURL;
	var linkedURL = props.attributes.linkedURL;
	var emailAddress = props.attributes.emailAddress;

	return [
		<div
			className={props.className}
			style={{
				textAlign: alignment,
				display: "flex",
				gap: "20px",
			}}
		>
			<div>
				<img
					style={{
						width: "150px",
						height: "200px",
						marginTop: "auto",
					}}
					src={attributes.mediaURL}
				/>
				<h1>{attributes.title}</h1>
				<h4>{attributes.subtitle}</h4>
				<h2>{attributes.bio}</h2>
				<div className="social-icons">
					<a href={facebookURL}>
						<span class="dashicons dashicons-facebook"></span>
					</a>
					<a href={twitterURL}>
						<span class="dashicons dashicons-twitter"></span>
					</a>
					<a href={linkedURL}>
						<span class="dashicons dashicons-linkedin"></span>
					</a>
					<a href={attributes.emailAddress}>
						<span class="dashicons dashicons-email"></span>
					</a>
					<a href={attributes.facebookURL}>
						<span class="dashicons dashicons-admin-users"></span>
					</a>
					<a href={attributes.facebookURL}>
						<span class="dashicons dashicons-pinterest"></span>
					</a>
				</div>
			</div>
		</div>,
	];
}
