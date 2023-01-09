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
	useBlockProps,
	InspectorControls,
	RichText,
} from "@wordpress/block-editor";
import {
	PanelBody,
	TextControl,
	FontSizePicker,
	Card,
	CardBody,
	ButtonGroup,
	Button,
} from "@wordpress/components";
import { Fragment } from "@wordpress/element";
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
	const blockProps = useBlockProps({
		className: "gtg-attrs-demo",
	});
	const fontSizes = [
		{
			name: __("Small"),
			slug: "small",
			size: 12,
		},
		{
			name: __("Big"),
			slug: "big",
			size: 26,
		},
		{
			name: __("Large"),
			slug: "large",
			size: 32,
		},
	];
	const fallbackFontSize = 16;
	const { attributes, setAttributes } = props;
	const { title, img, description, price, variant, fontsize } = attributes;
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody title={"Typography"}>
					<FontSizePicker
						__nextHasNoMarginBottom
						fontSizes={fontSizes}
						value={fontsize}
						fallbackFontSize={fallbackFontSize}
						onChange={(newFontSize) => {
							setAttributes({ fontsize: newFontSize });
						}}
					/>
				</PanelBody>
				<PanelBody title="Block Settings">
					<TextControl
						label="Image Source Url"
						value={img ? img : ""}
						onChange={(newVal) => setAttributes({ img: newVal })}
					/>
					<TextControl
						label="Title Text"
						value={title ? title : ""}
						onChange={(newVal) => setAttributes({ title: newVal })}
					/>
					<TextControl
						label="Description Text"
						value={description ? description : ""}
						onChange={(newVal) => setAttributes({ description: newVal })}
					/>
					<TextControl
						label="Price Text"
						value={price ? price : ""}
						onChange={(newVal) => setAttributes({ price: newVal })}
					/>
				</PanelBody>
				<PanelBody title="Variant Select">
					<ButtonGroup>
						<Button
							onClick={() => setAttributes({ variant: "$" })}
							variant="primary"
						>
							$
						</Button>
						<Button
							onClick={() => setAttributes({ variant: "€" })}
							variant="primary"
						>
							€
						</Button>
						<Button
							onClick={() => setAttributes({ variant: "₹" })}
							variant="primary"
						>
							₹
						</Button>
					</ButtonGroup>
				</PanelBody>
			</InspectorControls>
			<div className="container">
				<div {...blockProps}>
					<Card>
						<CardBody>
							<div className="img-column">
								<img
									style={{ maxWidth: "100%" }}
									className="side-img"
									src={img}
								/>
								<h1 className="title">{title}</h1>
								<RichText
									identifier="content"
									key="editable"
									style={{ fontSize: fontsize }}
									placeholder="your content"
									value={variant + price}
									onChange={(value) => setAttributes({ price: value })}
								/>
								<p className="description">{description}</p>
							</div>
						</CardBody>
					</Card>
				</div>
			</div>
		</Fragment>
	);
}
