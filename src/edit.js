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
	BlockControls,
	MediaUpload,
	AlignmentToolbar,
	InspectorControls,
} from "@wordpress/block-editor";
import { Button, PanelBody, TextControl, Card } from "@wordpress/components";
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

export default function Edit(props) {
	var attributes = props.attributes;
	var alignment = props.attributes.alignment;
	var facebookURL = props.attributes.facebookURL;
	var twitterURL = props.attributes.twitterURL;
	var instagramURL = props.attributes.instagramURL;
	var linkedURL = props.attributes.linkedURL;
	var emailAddress = props.attributes.emailAddress;

	var onSelectImage = function (media) {
		return props.setAttributes({
			mediaURL: media.url,
			mediaID: media.id,
		});
	};

	function onChangeAlignment(newAlignment) {
		props.setAttributes({ alignment: newAlignment });
	}

	return [
		<InspectorControls>
			<PanelBody
				title="Social Media Links"
				className="block-social-links"
				initialOpen="true"
			>
				<p>Add links to your social media profiles</p>
				<TextControl
					type="string"
					label="FacebookURL"
					value={facebookURL}
					onChange={(newFacebook) => {
						props.setAttributes({ facebookURL: newFacebook });
					}}
				/>
				<TextControl
					type="string"
					label="TwitterURL"
					value={twitterURL}
					onChange={(newTwitter) => {
						props.setAttributes({ twitterURL: newTwitter });
					}}
				/>
				<TextControl
					type="string"
					label="LinkedInURL"
					value={linkedURL}
					onChange={(newLinkedin) => {
						props.setAttributes({ linkedURL: newLinkedin });
					}}
				/>
				<TextControl
					type="string"
					label="InstagramURL"
					value={instagramURL}
					onChange={(newInstagram) => {
						props.setAttributes({ instagramURL: newInstagram });
					}}
				/>
				<TextControl
					type="string"
					label="Email Address"
					value={emailAddress}
					onChange={(newEmail) => {
						props.setAttributes({ emailAddress: newEmail });
					}}
				/>
			</PanelBody>
		</InspectorControls>,
		<Card>
			<div
				className={props.className}
				style={{
					textAlign: alignment,
					display: "flex",
					gap: "20px",
				}}
			>
				<BlockControls>
					<AlignmentToolbar onChange={onChangeAlignment} value={alignment} />
				</BlockControls>

				<div style={{ width: "fit-content" }}>
					<MediaUpload
						onSelect={onSelectImage}
						style={{ marginTop: "30px" }}
						type="image"
						value={attributes.mediaID}
						render={({ open }) => (
							<Button
								onClick={open}
								className={
									attributes.mediaID ? "image-button" : "button button-large"
								}
							>
								{!attributes.mediaID ? (
									__("Upload Image")
								) : (
									<img
										style={{
											width: "150px",
											height: "200px",
											marginTop: "auto",
										}}
										src={attributes.mediaURL}
									/>
								)}
							</Button>
						)}
					/>
				</div>
				<div>
					<div>
						<RichText
							key="editable"
							tagName="h3"
							placeholder="Profile Name"
							value={attributes.title}
							onChange={(newTitle) => {
								props.setAttributes({ title: newTitle });
							}}
						/>
						<RichText
							key="editable"
							tagName="h5"
							placeholder="Subtitle"
							value={attributes.subtitle}
							onChange={(newSubtitle) => {
								props.setAttributes({ subtitle: newSubtitle });
							}}
						/>
						<RichText
							key="editable"
							tagName="p"
							placeholder="Write bio"
							value={attributes.bio}
							onChange={(newBio) => {
								props.setAttributes({ bio: newBio });
							}}
						/>
						<div className="social-icons">
							<a href={attributes.facebookURL}>
								<span class="dashicons dashicons-facebook"></span>
							</a>
							<a href={attributes.twitterURL}>
								<span class="dashicons dashicons-twitter"></span>
							</a>
							<a href={attributes.linkedURL}>
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
				</div>
			</div>
		</Card>,
	];
}
