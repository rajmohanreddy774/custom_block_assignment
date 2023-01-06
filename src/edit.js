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
import {
	Button,
	Flex,
	PanelBody,
	TextControl,
	Path,
	SVG,
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

export default function Edit(props) {
	var attributes = props.attributes;
	var alignment = props.attributes.alignment;
	var facebookURL = props.attributes.facebookURL;
	var twitterURL = props.attributes.twitterURL;
	var instagramURL = props.attributes.instagramURL;
	var linkedURL = props.attributes.linkedURL;
	var emailAddress = props.attributes.emailAddress;
	var backgroundImage = props.attributes.backgroundImage;

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
		<BlockControls>
			<AlignmentToolbar onChange={onChangeAlignment} value={alignment} />
		</BlockControls>,
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
		<div
			className={props.className}
			style={{
				textAlign: alignment,
				direction: "Flex",
				display: "inline-flex",
				border: "2px solid black",
			}}
		>
			<MediaUpload
				onSelect={onSelectImage}
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
								style={{ width: "100px", height: "100px" }}
								src={attributes.mediaURL}
							/>
						)}
					</Button>
				)}
			/>

			<div className="desc-container">
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
				<div style={{ display: "flex", justifyContent: "space-evenly" }}>
					<a className="href-a" href={attributes.facebookURL}>
						<SVG
							width="24"
							height="24"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<Path d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" />
						</SVG>
					</a>
					<a className="href-a" href={attributes.linkedURL}>
						<SVG
							width="24"
							height="24"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<Path d="M17.291,19.073h-3.007v-4.709c0-1.123-0.02-2.568-1.564-2.568c-1.566,0-1.806,1.223-1.806,2.487v4.79H7.908   V9.389h2.887v1.323h0.04c0.589-1.006,1.683-1.607,2.848-1.564c3.048,0,3.609,2.005,3.609,4.612L17.291,19.073z M4.515,8.065   c-0.964,0-1.745-0.781-1.745-1.745c0-0.964,0.781-1.745,1.745-1.745c0.964,0,1.745,0.781,1.745,1.745   C6.26,7.284,5.479,8.065,4.515,8.065L4.515,8.065 M6.018,19.073h-3.01V9.389h3.01V19.073z M18.79,1.783H1.497   C0.68,1.774,0.01,2.429,0,3.246V20.61c0.01,0.818,0.68,1.473,1.497,1.464H18.79c0.819,0.01,1.492-0.645,1.503-1.464V3.245   c-0.012-0.819-0.685-1.474-1.503-1.463" />
						</SVG>
					</a>
					<a className="href-a" href={attributes.twitterURL}>
						<SVG
							width="24"
							height="24"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<Path d="M21.543,7.104c0.014,0.211,0.014,0.423,0.014,0.636  c0,6.507-4.954,14.01-14.01,14.01v-0.004C4.872,21.75,2.252,20.984,0,19.539c0.389,0.047,0.78,0.07,1.172,0.071  c2.218,0.002,4.372-0.742,6.115-2.112c-2.107-0.04-3.955-1.414-4.6-3.42c0.738,0.142,1.498,0.113,2.223-0.084  c-2.298-0.464-3.95-2.483-3.95-4.827c0-0.021,0-0.042,0-0.062c0.685,0.382,1.451,0.593,2.235,0.616  C1.031,8.276,0.363,5.398,1.67,3.148c2.5,3.076,6.189,4.946,10.148,5.145c-0.397-1.71,0.146-3.502,1.424-4.705  c1.983-1.865,5.102-1.769,6.967,0.214c1.103-0.217,2.16-0.622,3.127-1.195c-0.368,1.14-1.137,2.108-2.165,2.724  C22.148,5.214,23.101,4.953,24,4.555C23.339,5.544,22.507,6.407,21.543,7.104z" />
						</SVG>
					</a>
					<a className="href-a" href={attributes.emailAddress}>
						<SVG
							width="24"
							height="24"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<Path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z" />
						</SVG>
					</a>
				</div>
			</div>
		</div>,
	];
}
