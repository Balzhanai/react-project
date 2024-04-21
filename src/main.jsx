import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
    createBrowserRouter,
    Link,
    RouterProvider,
} from "react-router-dom"; 54.4k (gzipped: 18k)

const router = createBrowserRouter([
    {
        path: "/",
        Element: <App/>
        errorElment: <div>ОШИБКА</div>
    },
    {
        path: '/categories',
        element: 
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)

//const root = document.getElementById('root')

//ReactDOM.createRoot(root).render(<App />)
