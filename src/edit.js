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
	MediaUpload,
} from "@wordpress/block-editor";
import { Button, PanelBody, RangeControl } from "@wordpress/components";

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
	const {
		titleColor,
		title,
		body,
		backgroundImage,
		overlayColor,
		overlayOpacity,
	} = attributes;
	function onChangeTitle(newTitle) {
		setAttributes({ title: newTitle });
	}
	function onChangeBody(newBody) {
		setAttributes({ body: newBody });
	}

	function onSelectBackgroundImage(newImage) {
		setAttributes({ backgroundImage: newImage.sizes.full.url });
		console.log(backgroundImage);
	}
	function onChangeTitleColor(newTitleColor) {
		setAttributes({ titleColor: newTitleColor });
	}

	function onOverlayColorChange(newColor) {
		setAttributes({ overlayColor: newColor });
	}

	function onOverlayOpacityChange(newOpacity) {
		setAttributes({ overlayOpacity: newOpacity });
	}
	return [
		<InspectorControls style={{ marginBottom: "40px" }}>
			<PanelBody title="color Picker">
				<p>
					<strong>Choose text color</strong>
				</p>
				<ColorPalette value={titleColor} onChange={onChangeTitleColor} />
			</PanelBody>
			<PanelBody title="BackgroundImage">
				<p>
					<strong>Select a BackgroundImage</strong>
				</p>
				<MediaUpload
					onSelect={onSelectBackgroundImage}
					type="image"
					value={backgroundImage}
					render={({ open }) => (
						<Button
							onClick={open}
							icon="upload"
							className="editor-media-placeholder__button is-button is-default is-large"
						>
							Background Image
						</Button>
					)}
				/>
				<div style={{ marginTop: "20px", marginBottom: "40px" }}>
					<p>
						<strong>Overlay Color</strong>
					</p>
					<ColorPalette value={overlayColor} onChange={onOverlayColorChange} />
				</div>
				<RangeControl
					label={"Overlay Opacity "}
					value={overlayOpacity}
					onChange={onOverlayOpacityChange}
					min={0}
					max={1}
					step={0.01}
				/>
			</PanelBody>
		</InspectorControls>,
		<div
			class="cta-container"
			style={{
				backgroundImage: `url(${backgroundImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div
				className="cta-overlay"
				style={{ background: overlayColor, opacity: overlayOpacity }}
			>
				{" "}
			</div>
			<RichText
				key="editable"
				tagName="h2"
				placeholder="text"
				value={title}
				onChange={onChangeTitle}
				style={{ color: titleColor }}
			/>
			<RichText
				key="editable"
				tagName="p"
				placeholder="text"
				value={body}
				onChange={onChangeBody}
			/>
		</div>,
	];
}
