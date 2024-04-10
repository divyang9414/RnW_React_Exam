# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

├── src/
│ ├── components/
│ │ ├── RoomList.jsx
│ │ ├── RoomDetails.jsx
│ │ ├── ReservationForm.jsx
│ │ ├── ReservationList.jsx
│ │ ├── PrivateRoute.jsx
│ │ └── Navbar.jsx
│ ├── redux/
│ │ ├── actions/
│ │ │ ├── roomActions.jsx
│ │ │ └── reservationActions.jsx
│ │ ├── reducers/
│ │ │ ├── roomReducer.jsx
│ │ │ └── reservationReducer.jsx
│ │ ├── thunks/
│ │ │ ├── roomThunks.jsx
│ │ │ └── reservationThunks.jsx
│ │ └── store.jsx
│ ├── services/
│ │ └── api.jsx
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Register.jsx
│ │ ├── Login.jsx
│ │ └── UserProfile.jsx
│ ├── App.jsx
│ ├── index.jsx
│ └── index.css
├── db.json
├── package.json
└── README.md
