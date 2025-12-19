import {
  GoogleAuthProvider,
  getAuth,
  // signInWithEmailAndPassword,
  // signInWithPopup,
  // createUserWithEmailAndPassword,
  // EmailAuthProvider,
  // sendEmailVerification,
  // sendPasswordResetEmail,
} from "firebase/auth";
class AuthLogic {//클래스 선언
  constructor() {
    this.auth = getAuth();//firebase developer console신청한 프로젝트 설정정보확인
    this.googleProvider = new GoogleAuthProvider();//구글인증, 카카오인증, 깃헙인증
    //this.kakaoProvider = new KakaoAuthProvider();
    //this.githubProvider = new GihubAuthProvider();
  }
  //auth반환하는 함수 선언
  getUserAuth = () => {
    return this.auth;
  };
  getGoogleAuthProvider = () => {
    return this.googleProvider;//google
  };
}
export default AuthLogic; //외부 js에서 사용할 때