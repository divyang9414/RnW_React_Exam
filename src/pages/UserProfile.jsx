import React, { useState, useEffect } from "react"
import { getDatabase, ref, onValue } from "firebase/database"
import app from "../firebaseConfig" // Assuming you have your Firebase initialization

const UserProfile = () => {
	const [userData, setUserData] = useState([])

	useEffect(() => {
		// Function to fetch user reservation data from Firebase
		const fetchUserData = async () => {
			try {
				const database = getDatabase(app)
				const reservationsRef = ref(database, "reservations")

				// Listen for changes to the reservations node
				onValue(reservationsRef, (snapshot) => {
					const data = snapshot.val()
					if (data) {
						// Convert the reservation data to an array and set it in state
						const reservationsArray = Object.values(data)
						setUserData(reservationsArray)
					} else {
						setUserData([])
					}
				})
			} catch (error) {
				console.error("Error fetching user data:", error)
			}
		}

		// Call the fetchUserData function when the component mounts
		fetchUserData()
	}, [])

	return (
		<div className="bg-green-100 h-dvh">
			<div className="container mx-auto max-w-[1200px] bg-green-100 py-8 px-4">
				<h2 className="text-3xl font-bold mb-6 text-center text-gray-900">User Profile</h2>
				<div className="overflow-x-auto">
					<table className="table-auto w-full bg-white border border-gray-300 rounded-lg shadow-md">
						<thead>
							<tr className="bg-gray-200">
								<th className="px-4 py-2 border-b border-gray-300">User Name</th>
								<th className="px-4 py-2 border-b border-gray-300">Person Count</th>
								{/* Add more table headers for other reservation data if needed */}
							</tr>
						</thead>
						<tbody>
							{userData.map((reservation, index) => (
								<tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
									<td className="px-4 py-2 border-b border-gray-300 text-center">{reservation.name}</td>
									<td className="px-4 py-2 border-b border-gray-300 text-center">{reservation.personCount}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default UserProfile
