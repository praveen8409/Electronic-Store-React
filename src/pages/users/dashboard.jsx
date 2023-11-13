import React from 'react'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <dic>
    <div>User dashboard</div>
    <Outlet></Outlet>
    </dic>
  )
}
