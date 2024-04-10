import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<>
			<header className="bg-[#344955] text-white body-font">
				<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
					<Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
						<span className="ml-3 text-xl">Practical</span>
					</Link>
					<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-lg tracking-wide justify-center">
						<Link to="/" className="mr-5 hover:text-black font-semibold">
							Home
						</Link>
						<Link to="/roomlist" className="mr-5 hover:text-black font-semibold">
							RoomList
						</Link>
						<Link to="/reservationlist" className="mr-5 hover:text-black font-semibold">
							ReservationList
						</Link>
						<Link to="/userprofile" className="mr-5 hover:text-black font-semibold">
							User profile
						</Link>
					</nav>
					<Link to="/register" className="inline-flex items-center bg-white text-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
						Register
						<svg fill="none" className="w-4 h-4 ml-1 text-gray-800" viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</Link>
				</div>
			</header>
		</>
	)
}

export default Navbar
