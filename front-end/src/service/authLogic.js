import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase"
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
/* 
  인증 처리|인가 처리 
  FrontEnd : React(localStorage활용 -> OAuth토큰방식)
  BackEnd : Servlet(쿠키, 세션 제공)
*/


/* 구글로그인 */
export const loginGoogle = async() => { //async-비동기처리
try{
    const result = await signInWithPopup(auth, googleProvider)
    const user = result.user
    console.log(user)
    window.localStorage.setItem("uid", user.uid) //로컬스토리지에 id저장
    window.localStorage.setItem("email", user.email) //로컬스토리지에 email저장
    return user
  }catch(error){
    console.error("구글로그인 실패", error)
    throw error
  }
}

/* 구글 로그아웃 */
export const logout = async () => {
  console.log('logout')
  try{
    //구글 firebase에서 로그아웃 처리를 해줌
    await signOut(auth)
    //로그인 성공시 localStorage 저장해둔 정보 삭제처리
    window.localStorage.removeItem("uid")
    window.localStorage.removeItem("email")
  }catch(error){
  console.log("로그아웃", error)
  }
}//end of logoout

/* 구글 인증 상태 변화 감지 */
export const subscribeAuth = (callback) => {
  console.log('subscribeAuth')
  return onAuthStateChanged(auth, (user) => {
    callback(user)
  })
}