import { useState, useEffect } from "react"
import { getDatabase, ref, onValue, remove, update } from "firebase/database"
import app from "../firebaseConfig" // Assuming you have your Firebase initialization

const ReservationList = () => {
	const [reservations, setReservations] = useState([])
	const [selectedReservation, setSelectedReservation] = useState(null)
	const [editFormData, setEditFormData] = useState({
		name: "",
		personCount: "",
		checkInDate: "",
		checkOutDate: "",
	})

	useEffect(() => {
		const database = getDatabase(app)
		const reservationsRef = ref(database, "reservations")

		onValue(reservationsRef, (snapshot) => {
			const data = snapshot.val()
			if (data) {
				const reservationsArray = Object.entries(data).map(([id, reservation]) => ({ id, ...reservation }))
				setReservations(reservationsArray)
			} else {
				setReservations([])
			}
		})
	}, [])

	const handleDelete = (reservationId) => {
		console.log("Deleting reservation with ID:", reservationId) // Log the reservation ID

		const database = getDatabase(app)
		const reservationRef = ref(database, `reservations/${reservationId}`)

		// Remove the reservation from the database
		remove(reservationRef)
			.then(() => {
				console.log("Reservation deleted successfully")
			})
			.catch((error) => {
				console.error("Error deleting reservation:", error)
			})
	}

	const handleEdit = (reservation) => {
		setSelectedReservation(reservation)
		setEditFormData({
			name: reservation.name,
			personCount: reservation.personCount,
			checkInDate: reservation.checkInDate,
			checkOutDate: reservation.checkOutDate,
		})
	}

	const handleUpdate = () => {
		const database = getDatabase(app)
		const reservationRef = ref(database, `reservations/${selectedReservation.id}`)

		// Update the reservation data in the database
		update(reservationRef, editFormData)
			.then(() => {
				console.log("Reservation updated successfully")
				setSelectedReservation(null)
				setEditFormData({
					name: "",
					personCount: "",
					checkInDate: "",
					checkOutDate: "",
				})
			})
			.catch((error) => {
				console.error("Error updating reservation:", error)
			})
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setEditFormData({ ...editFormData, [name]: value })
	}

	return (
		<div className="container mx-auto p-4 bg-indigo-300 h-dvh">
			<h2 className="text-3xl font-bold mb-4 text-center">Reservation List</h2>
			<div className="overflow-x-auto">
				<table className="table-auto w-full border shadow rounded-lg">
					<thead>
						<tr className="bg-indigo-300 text-left">
							<th className="px-4 py-2">ID</th>
							<th className="px-4 py-2">Name</th>
							<th className="px-4 py-2">Person Count</th>
							<th className="px-4 py-2">Check-in Date</th>
							<th className="px-4 py-2">Check-out Date</th>
							<th className="px-4 py-2">Actions</th>
						</tr>
					</thead>
					<tbody>
						{reservations.map((reservation) => (
							<tr key={reservation.id} className="border-b hover:bg-gray-100">
								<td className="px-4 py-2">{reservation.id}</td>
								<td className="px-4 py-2">{reservation.name}</td>
								<td className="px-4 py-2">{reservation.personCount}</td>
								<td className="px-4 py-2">{reservation.checkInDate}</td>
								<td className="px-4 py-2">{reservation.checkOutDate}</td>
								<td className="px-4 py-2">
									<button
										onClick={() => handleEdit(reservation)}
										className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mr-2"
									>
										Edit
									</button>
									<button
										onClick={() => handleDelete(reservation.id)}
										className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
									>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Edit Reservation Modal */}
			{selectedReservation && (
				<div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
					<div className="bg-white p-4 rounded-lg">
						<h2 className="text-lg font-bold mb-4">Edit Reservation</h2>
						<form onSubmit={handleUpdate}>
							<input type="text" name="name" value={editFormData.name} onChange={handleChange} placeholder="Name" className="border border-gray-300 rounded-md p-2 mb-2" />
							<input
								type="number"
								name="personCount"
								value={editFormData.personCount}
								onChange={handleChange}
								placeholder="Person Count"
								className="border border-gray-300 rounded-md p-2 mb-2"
							/>
							<input
								type="date"
								name="checkInDate"
								value={editFormData.checkInDate}
								onChange={handleChange}
								placeholder="Check-in Date"
								className="border border-gray-300 rounded-md p-2 mb-2"
							/>
							<input
								type="date"
								name="checkOutDate"
								value={editFormData.checkOutDate}
								onChange={handleChange}
								placeholder="Check-out Date"
								className="border border-gray-300 rounded-md p-2 mb-2"
							/>
							<div className="flex justify-end">
								<button type="button" onClick={() => setSelectedReservation(null)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2">
									Cancel
								</button>
								<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
									Update
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}

export default ReservationList
