/* eslint-disable @next/next/no-img-element */
"use client"

import {useMemo, useState} from "react"
import {default as cn} from "classnames"

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/atY8M3qIQnA
 */

interface CarouselProps {
	images: {
		src: string
		alt: string
		caption: string
	}[]
}

export default function Carousel({images}: CarouselProps) {
	const [currentImage, setCurrentImage] = useState(0)

	//just for testing...
	// images = [
	// 	{src: "https://placehold.co/800x600?text=image+1", alt: "Carousel Image 1", caption: "Carousel Image 1"},
	// 	{src: "https://placehold.co/800x600?text=image+2", alt: "Carousel Image 2", caption: "Carousel Image 2"},
	// 	{src: "https://placehold.co/800x600?text=image+3", alt: "Carousel Image 3", caption: "Carousel Image 3"},
	// ]

	const image = useMemo(() => images[currentImage], [currentImage, images])

	return (
		<section className="w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 ">
			<div className="relative gap-1 w-full max-w-2xl mx-auto overflow-hidden rounded-xl shadow-lg shrink-0 overflow-x-hidden">
				<div key={image.src} className="relative block w-full h-64 md:h-96">
					<img
						alt={image.alt}
						className="object-cover object-center w-full h-full"
						height="600"
						src={image.src}
						style={{
							aspectRatio: "800/600",
							objectFit: "cover",
						}}
						width="800"
					/>
					<p className="absolute bottom-2 left-2 text-white text-sm bg-black bg-opacity-50 p-1 rounded">
						{image.caption}
					</p>
				</div>

				<div className="absolute top-1/2 left-3 transform -translate-y-1/2">
					<button
						aria-label="Previous image"
						onClick={() => {
							setCurrentImage((currentImage - 1 + images.length) % images.length)
						}}
					>
						<svg
							className="text-white bg-black bg-opacity-20 p-2 hover:bg-opacity-50 focus:bg-opacity-30 rounded-full transition-all"
							fill="none"
							height="40"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							width="40"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="m15 18-6-6 6-6" />
						</svg>
					</button>
				</div>
				<div className="absolute top-1/2 right-3 transform -translate-y-1/2">
					<button
						aria-label="Next image"
						onClick={() => {
							setCurrentImage((currentImage + 1) % images.length)
						}}
					>
						<svg
							className="text-white bg-black bg-opacity-20 p-2 hover:bg-opacity-50 focus:bg-opacity-30 rounded-full transition-all"
							fill="none"
							height="40"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							width="40"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="m9 18 6-6-6-6" />
						</svg>
					</button>
				</div>
			</div>

			<div className="flex justify-center mt-4">
				{images.map((img, i) => (
					<button key={img.src} onClick={() => setCurrentImage(i)} className="p-1 group">
						<span
							className={cn(
								"block w-2.5 h-2.5  rounded-full",
								i === currentImage ? "bg-zinc-500 group-hover:bg-purple-400" : "bg-zinc-200 group-hover:bg-purple-300"
							)}
						></span>
					</button>
				))}
			</div>
		</section>
	)
}
