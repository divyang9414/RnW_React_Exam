import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import data from "../../db.json"

const RoomList = () => {
	const [filteredRooms, setFilteredRooms] = useState(data.rooms)
	const [sortBy, setSortBy] = useState("")

	const handleSortByPrice = () => {
		const sortedRooms = [...filteredRooms].sort((a, b) => a.price - b.price)
		setFilteredRooms(sortedRooms)
		setSortBy("price")
	}

	const handleSortByName = () => {
		const sortedRooms = [...filteredRooms].sort((a, b) => a.name.localeCompare(b.name))
		setFilteredRooms(sortedRooms)
		setSortBy("name")
	}

	const handleFilterByPriceRange = (minPrice, maxPrice) => {
		const filteredRooms = data.rooms.filter((room) => room.price >= minPrice && room.price <= maxPrice)
		setFilteredRooms(filteredRooms)
	}

	const resetFilters = () => {
		setFilteredRooms(data.rooms)
		setSortBy("")
	}

	const showAllRooms = () => {
		setFilteredRooms(data.rooms)
		setSortBy("")
	}

	const navigate = useNavigate()

	const handleReservation = (room) => {
		navigate(`/reservationform?roomId=${room.id}`)
	}

	return (
		<div className="container mx-auto p-8">
			<h2 className="text-3xl font-bold mb-8 text-center">Available Rooms</h2>

			<div className="flex justify-between items-center mb-8">
				<div className="flex flex-wrap">
					<button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold mr-4 mb-2" onClick={showAllRooms}>
						Show All
					</button>
					<button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold mr-4 mb-2" onClick={handleSortByPrice}>
						Sort by Price
					</button>
					<button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold mb-2" onClick={handleSortByName}>
						Sort by Name
					</button>
				</div>
				<div className="flex flex-wrap">
					<button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold mr-4 mb-2" onClick={() => handleFilterByPriceRange(100, 200)}>
						Price: $100 - $200
					</button>
					<button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold mr-4 mb-2" onClick={() => handleFilterByPriceRange(201, 300)}>
						Price: $201 - $300
					</button>
					<button className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold mb-2" onClick={resetFilters}>
						Reset Filters
					</button>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-8">
				{filteredRooms.map((room) => (
					<div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden">
						<div className="p-6">
							<h2 className="text-xl font-semibold mb-4">{room.name}</h2>
							<p className="text-gray-600 mb-2">Price: ${room.price}</p>
							<p className="text-gray-600 mb-2">
								Location: {room.city}, {room.state}, {room.country}, {room.pincode}
							</p>
						</div>
						<div className="bg-gray-100 p-4 flex justify-center">
							<button onClick={() => handleReservation(room)} className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-all">
								Reserve Now
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default RoomList
