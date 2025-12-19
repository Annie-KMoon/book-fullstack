import React from 'react'
import DeptList from '../dept/DeptList'
import Header from '../include/Header'
import Footer from '../include/Footer'

const DeptPage = () => {
  return (
    <>
      <Header />
      <h2>부서관리</h2>
      <DeptList />
      <Footer />
    </>
  )
}

export default DeptPage
