import React from "react"
import { Link } from "react-router-dom"

const SignIn = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-8">
			<div className="w-full max-w-md bg-white rounded-lg shadow-md px-8 py-10 overflow-hidden">
				<h2 className="text-2xl font-bold text-center text-white mb-6">Welcome!</h2>
				<form className="space-y-4">
					<div>
						<label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
							First Name
						</label>
						<input
							type="text"
							name="firstName"
							id="firstName"
							className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
							placeholder="John"
						/>
					</div>
					<div>
						<label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
							Last Name
						</label>
						<input
							type="text"
							name="lastName"
							id="lastName"
							className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
							placeholder="Doe"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700">
							Email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
							placeholder="johndoe@example.com"
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
							placeholder="********"
						/>
					</div>
					<div>
						<label htmlFor="c_password" className="block text-sm font-medium text-gray-700">
							Confirm Password
						</label>
						<input
							type="password"
							name="c_password"
							id="c_password"
							className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:ring-1"
							placeholder="********"
						/>
					</div>
					<button
						type="submit"
						className="w-full px-4 py-2 rounded-md bg-indigo-500 text-center text-white font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
					>
						Register Account
					</button>
				</form>
				<div className="mt-6 text-center text-sm text-gray-500">
					Already have an account?{" "}
					<Link to="/login" className="text-indigo-600 hover:text-indigo-800">
						Login!
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SignIn
