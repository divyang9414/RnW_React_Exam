import React from "react"

const RoomDetails = () => {
	return (
		<div>
			<div id="app" className="flex items-center justify-center h-dvh bg-gray-200 p-4">
				<div className="w-full shadow-lg max-w-2xl bg-white sm:flex">
					<div className="w-full sm:w-1/4 hotel-cover bg-center bg-cover border relative h-48 sm:h-auto shadow-inner">
						<div className="w-full absolute bottom-0 flex justify-center bg-gradient-to-t from-black to-transparent">
							<ul className="text-xs sm:font-semibold my-2 flex sm:block justify-around w-full sm:w-auto text-white">
								<li className="my-1 flex items-center">
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="wifi"
										className="mr-1 h-3 w-3 fill-current"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<path
											fill="currentColor"
											d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"
										></path>
									</svg>
									Free cancelation
								</li>
								<li className="my-1 flex items-center">
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="wifi"
										className="mr-1 h-3 w-3 fill-current"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 512 512"
									>
										<path
											fill="currentColor"
											d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z"
										></path>
									</svg>
									Breakfast included
								</li>
								<li className="my-1 flex items-center">
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="wifi"
										className="mr-1 h-3 w-3 fill-current"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 640 512"
									>
										<path
											fill="currentColor"
											d="M634.91 154.88C457.74-8.99 182.19-8.93 5.09 154.88c-6.66 6.16-6.79 16.59-.35 22.98l34.24 33.97c6.14 6.1 16.02 6.23 22.4.38 145.92-133.68 371.3-133.71 517.25 0 6.38 5.85 16.26 5.71 22.4-.38l34.24-33.97c6.43-6.39 6.3-16.82-.36-22.98zM256 272c-35.35 0-64 28.65-64 64s28.65 64 64 64 64-28.65 64-64-28.65-64-64-64zm202.67-83.59c-115.26-101.93-290.21-101.82-405.34 0-6.9 6.1-7.12 16.69-.57 23.15l34.44 33.99c6 5.92 15.66 6.32 22.05.8 83.95-72.57 209.74-72.41 293.49 0 6.39 5.52 16.05 5.13 22.05-.8l34.44-33.99c6.56-6.46 6.33-17.06-.56-23.15z"
										></path>
									</svg>
									Wifi included
								</li>
							</ul>
						</div>
					</div>
					<div className="w-full sm:w-3/4 p-3">
						<div className="flex justify-between items-center border-b pb-3">
							<div>
								<div className="sm:flex items-center mb-1">
									<h2 className="text-lg font-semibold text-gray-600">Kensington Suite Hotel</h2>
									<div className="flex sm:ml-3">
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="star"
											className="h-4 w-4 text-yellow-400 fill-current mr-1"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512"
										>
											<path
												fill="currentColor"
												d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
											></path>
										</svg>
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="star"
											className="h-4 w-4 text-yellow-400 fill-current mr-1"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512"
										>
											<path
												fill="currentColor"
												d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
											></path>
										</svg>
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="star"
											className="h-4 w-4 text-yellow-400 fill-current mr-1"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512"
										>
											<path
												fill="currentColor"
												d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
											></path>
										</svg>
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="star"
											className="h-4 w-4 text-yellow-400 fill-current mr-1"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512"
										>
											<path
												fill="currentColor"
												d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
											></path>
										</svg>
										<svg
											aria-hidden="true"
											focusable="false"
											data-prefix="fas"
											data-icon="star"
											className="h-4 w-4 text-yellow-400 fill-current"
											role="img"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 576 512"
										>
											<path
												fill="currentColor"
												d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"
											></path>
										</svg>
									</div>
								</div>
								<div className="flex items-center">
									<svg
										aria-hidden="true"
										focusable="false"
										data-prefix="fas"
										data-icon="map-marker-alt"
										className="h-3 w-3 text-blue-500 fill-current mr-1"
										role="img"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 384 512"
									>
										<path
											fill="currentColor"
											d="M172.268 501.67C26.97 291.031 0 269.413 0 192c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
										></path>
									</svg>
									<p className="text-xs text-gray-600">
										30-35 Nevern Place{" "}
										<a className="font-semibold text-gray-700" href="#">
											Show on Map
										</a>
									</p>
								</div>
							</div>
							<div>
								<div className="text-right text-xl leading-tight text-gray-600 font-semibold">
									$ 869 <br /> 2 nights
								</div>
							</div>
						</div>
						<div className="flex mt-3">
							<div>
								<svg
									aria-hidden="true"
									focusable="false"
									data-prefix="fas"
									data-icon="info-circle"
									className="w-3 h-3 text-blue-500 mt-1"
									role="img"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 512 512"
								>
									<path
										fill="currentColor"
										d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
									></path>
								</svg>
							</div>
							<div className="ml-2 text-sm text-gray-600">
								The Kensington Suite Hotel offers luxurious accommodation with a continental or à la carte breakfast. Guests can choose from a wide range of dishes at the on-site
								restaurant, which serves international cuisine.
							</div>
						</div>
						<div className="flex items-center mt-3">
							<button className="px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded shadow hover:bg-blue-600 focus:bg-blue-600 focus:outline-none">Select Room</button>
							<p className="ml-3 text-gray-600 text-sm">Free cancelation before Apr 10</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default RoomDetails
