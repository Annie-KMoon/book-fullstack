import React, { useState } from 'react'
import { loginGoogle } from '../../service/authLogic'
import { Link, useNavigate } from 'react-router'
import Header from '../include/Header'
import Footer from '../include/Footer'

const LoginForm = () => {
  const navigate = useNavigate()
  //사용자로부터 입력받은 이메일
  const[email, setEmail] = useState()
  //사용자로부터 입력받은 비밀번호
  const[password, setPassword] = useState()

  const handleEmail =(value) => {
    setEmail(value)
  }

  const handlePassword =(value) => {
    setPassword(value)
  }

  const handleLogin = async() => {
    try{
      await loginGoogle()
    navigate("/")
  }catch(error){
    console.log("로그인실패", error)
  }}

  return (
    <>
      {/* <h2>로그인화면</h2>
      <button type='button' onClick={handleLogin}>구글로그인</button> */}
            <Header />
        <div className="row my-5 justify-content-center">
          <div className="col-8 col-md-6 col-lg-4">
            <h3 className="text-center mb-5">로그인</h3>
            <form id="frm" method="post">
            <div className="input-group my-2">
                <div className="input-group-text">이 메 일</div>
                <input className="form-control" id="email"
                autoComplete="current-email"
                onChange={(e)=>handleEmail(e.target.value)}/>
            </div>
            <div className="input-group">
                <div className="input-group-text">비밀번호</div>
                <input className="form-control" id="password" type="password"
                autoComplete="current-password"
                onChange={(e)=>handlePassword(e.target.value)}
                />
            </div>
            </form>
            <div className="my-3">
            <button type="button" className="btn btn-secondary w-100">로그인</button>
            </div>
            <div className="my-3">
            <button id="google" onClick={handleLogin} type="button" className="btn btn-primary w-100">Google</button>
            </div>
            <div className="my-3">
            <button id="kakao" type="button" className="btn btn-warning w-100">Kakao</button>
            </div>
            <div className="my-3">
            <button id="naver" type="button" className="btn btn-success w-100">Naver</button>
            </div>
            <div className="text-end mt-3">
                <Link to="/join">회원가입</Link>
            </div>
          </div>
        </div>
      <Footer />
    </>
  )
}

export default LoginForm
