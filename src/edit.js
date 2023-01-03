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
import HeadingLevelGroup from "./heading-level-dropdown";

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
		content,
		level,
	} = attributes;
	function onChangeTitle(newTitle) {
		setAttributes({ title: newTitle });
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
				<PanelBody title="color Picker">
					<p>
						<strong>Choose text color</strong>
					</p>
					<ColorPalette value={titleColor} onChange={onChangeTitleColor} />
					<div style={{ marginTop: "20px", marginBottom: "40px" }}>
						<p>
							<strong>Overlay Color</strong>
						</p>
						<ColorPalette
							value={overlayColor}
							onChange={onOverlayColorChange}
						/>
					</div>
					<RangeControl
						label={"Overlay Opacity "}
						value={overlayOpacity}
						onChange={onOverlayOpacityChange}
						min={0}
						max={1}
						step={0.01}
					/>
					<HeadingLevelGroup
						selectedLevel={level}
						onChange={(newLevel) => setAttributes({ level: newLevel })}
					/>
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
					identifier="content"
					key="editable"
					tagName="h2"
					placeholder="text"
					value={title}
					onChange={onChangeTitle}
					style={{ color: titleColor }}
				/>
				<RichText
					key="editable"
					tagName={TagName}
					placeholder="your content"
					value={content}
					onChange={(value) => setAttributes({ content: value })}
				/>
			</div>,
		];
	}
}
