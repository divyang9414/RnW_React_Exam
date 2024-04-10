import React from "react"
import { Link } from "react-router-dom"

const Home = () => {
	return (
		<div className="bg-green-100 h-dvh">
			<section className="text-gray-900 body-font container mx-auto max-w-[1200px] bg-green-100">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
						<h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-black">Discover Our Unique Rooms</h1>
						<p className="mb-8 text-lg leading-relaxed text-black">
							Experience comfort like never before in our thoughtfully designed rooms. From cozy hideaways to luxurious suites, we have something for everyone.
						</p>
						<div className="flex justify-center">
							<Link to="/roomList" className="inline-flex text-black bg-[#77B0AA] border-0 py-3 px-8 focus:outline-none hover:bg-[#135D66] rounded-full text-lg font-semibold">
								Explore Now
							</Link>
							<Link
								to="/reservationList"
								className="ml-4 inline-flex text-gray-900 bg-[#77B0AA] border-0 py-3 px-8 focus:outline-none hover:bg-[#135D66] rounded-full text-lg font-semibold"
							>
								View Reservations
							</Link>
						</div>
					</div>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
						<img
							className="object-cover object-center rounded"
							alt="hero"
							src="https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4="
						/>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Home
