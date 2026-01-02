import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { logout, subscribeAuth } from '../../service/authLogic'

const Header = () => {
  console.log('Header시작')
  const [user, setUser] = useState(null)
  useEffect(() => {
    console.log('effect')
    const unsubscribe = subscribeAuth((u) => setUser(u))
    //구독 해제처리 추가(메모리 누수 방지)
    return () => unsubscribe() //구독 해제
  },[])//의존성배열이 빈깡통이면 최초 한번만

  const handleLogout = () => {
    console.log('handleLogout')
    //로그아웃을 처리하기
    try {
      logout()
    } catch (error) {
      console.error("로그아웃 실패",error)
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/book">도서검색</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dept">부서관리</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/notice">공지사항</Link>
            </li>
          </ul>

          {/*로그인, 로그아웃, 로그인한 이메일주소*/}
          <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {user ? (      
            <>      
              <li className="nav-item" id="myEmail">
                <Link className="nav-link">{user.email} 님.</Link>
              </li>              
              <li className="nav-item" id="logout">
                <Link className="nav-link" onClick={handleLogout}>로그아웃</Link>
              </li>
            </>
          ) : (                
              <li className="nav-item" id="login">
                <Link className="nav-link active" to="/login">로그인</Link>
              </li>      
          )}
            </ul>
          </div>
          {/*로그인, 로그아웃, 로그인한 이메일주소*/}
          
        </div>
      </nav>
    </>
  )
}

export default Header