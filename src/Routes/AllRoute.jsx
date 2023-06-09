import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ResumeForm from '../components/Resume'
import ViewResume from '../components/View'

export const AllRoute = () => {
  return (
    <Routes>
        
        <Route path="/" element={<ResumeForm />} />   
  
    <Route path="/view" element={<ViewResume/>} />


</Routes>
  )
}
