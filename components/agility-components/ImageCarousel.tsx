import {renderHTML, Module, ContentItem, ImageField} from "@agility/nextjs"
import Carousel from "components/common/Carousel.client"

interface ImageCarouselItem {
	image: ImageField
	caption: string
}

interface ImageCarouselItem {
	items: ContentItem<ImageCarouselItem>[]
}

const ImageCarousel: Module<ImageCarouselItem> = ({module: {contentID, fields}}) => {
	const images = fields.items.map((item) => ({
		src: `${item.fields.image.url}?format=auto&w=800`,
		alt: item.fields.image.label,
		caption: item.fields.caption,
	}))

	return <Carousel images={images} />
}

export default ImageCarousel
