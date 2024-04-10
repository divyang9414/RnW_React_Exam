import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import UserProfile from "./pages/UserProfile"

import Navbar from "./components/Navbar"
import ReservationForm from "./components/ReservationForm"
import ReservationList from "./components/ReservationList"
import RoomDetails from "./components/RoomDetails"
import RoomList from "./components/RoomList"

const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/login" element={<Login />} />
					<Route path="/userprofile" element={<UserProfile />} />
					<Route path="/reservationform" element={<ReservationForm />} />
					<Route path="/reservationlist" element={<ReservationList />} />
					<Route path="/roomdetails" element={<RoomDetails />} />
					<Route path="/roomlist" element={<RoomList />} />
				</Routes>
			</div>
		</Router>
	)
}

export default App
