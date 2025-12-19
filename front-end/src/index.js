import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
//import BookApp from "./BookApp";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthLogic from "./service/authLogic";
import app from "./service/firebase"; //** */
//AuthLogic 객체 생성하기 //firebase의 app 가져다가 사용
const authLogic = new AuthLogic(app);
console.log(authLogic);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
