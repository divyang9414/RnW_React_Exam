import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { getDatabase, ref, push } from "firebase/database"
import { useNavigate } from "react-router-dom"
import app from "../firebaseConfig"

const ReservationForm = () => {
	const navigate = useNavigate()

	const formik = useFormik({
		initialValues: {
			name: "",
			personCount: "",
			checkInDate: "",
			checkOutDate: "",
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Name is required"),
			personCount: Yup.number().required("Person count is required"),
			checkInDate: Yup.date().required("Check-in date is required"),
			checkOutDate: Yup.date().required("Check-out date is required"),
		}),
		onSubmit: async (values, { resetForm }) => {
			const database = getDatabase(app)
			const reservationsRef = ref(database, "reservations")
			push(reservationsRef, values)
				.then(() => {
					console.log("Reservation data added successfully")
					resetForm()
					navigate("/reservationlist")
				})
				.catch((error) => {
					console.error("Error adding reservation data:", error)
				})
		},
	})

	return (
		<div className="h-dvh bg-green-200">
			<div className="container mx-auto max-w-[600px] bg-green-100 rounded-lg p-8">
				<h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Reservation Form</h2>
				<form onSubmit={formik.handleSubmit} className="space-y-4">
					<input
						type="text"
						name="name"
						value={formik.values.name}
						onChange={formik.handleChange}
						placeholder="Name"
						className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
					/>
					{formik.touched.name && formik.errors.name ? <div className="text-red-600">{formik.errors.name}</div> : null}
					<input
						type="number"
						name="personCount"
						value={formik.values.personCount}
						onChange={formik.handleChange}
						placeholder="Person Count"
						className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
					/>
					{formik.touched.personCount && formik.errors.personCount ? <div className="text-red-600">{formik.errors.personCount}</div> : null}
					<input
						type="date"
						name="checkInDate"
						value={formik.values.checkInDate}
						onChange={formik.handleChange}
						placeholder="Check-in Date"
						className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
					/>
					{formik.touched.checkInDate && formik.errors.checkInDate ? <div className="text-red-600">{formik.errors.checkInDate}</div> : null}
					<input
						type="date"
						name="checkOutDate"
						value={formik.values.checkOutDate}
						onChange={formik.handleChange}
						placeholder="Check-out Date"
						className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
					/>
					{formik.touched.checkOutDate && formik.errors.checkOutDate ? <div className="text-red-600">{formik.errors.checkOutDate}</div> : null}
					<button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 focus:outline-none focus:bg-blue-600">
						Submit Reservation
					</button>
				</form>
			</div>{" "}
		</div>
	)
}

export default ReservationForm
