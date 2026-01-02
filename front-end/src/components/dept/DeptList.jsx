import React, { useEffect } from 'react'
import { deptListDB2 } from '../../service/deptLogic'

const DeptList = () => {
  useEffect(() => {
    const deptList = async() => {
      const dept = {
        deptno :10,
        dname : '영업부',
        loc : '대전'
      }
      const res = await deptListDB2(dept)
      console.log(res.data)
    }
    deptList()
  },[])//의존성배열이 빈통이면 최초 한 번만 호출된다.
  return (
    <>
      <h2>부서목록</h2>
    </>
  )
}

export default DeptList
