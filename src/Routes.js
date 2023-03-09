import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Pages from './pages'

export default function CustomRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Pages />} />
            </Routes>
        </BrowserRouter>
    )
}
