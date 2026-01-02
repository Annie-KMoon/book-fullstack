import axios from "axios";

//서블릿에게 부서 등록 요청하기
export const deptInsertDB = async (data) => {
  console.log(data);
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_TOMCAT_IP}dept`,
      data
    );
    console.log(res.data);
    return res;
  } catch (error) {
    console.error("부서 등록 실패!!!", error);
  }
}; //end of deptInsertDB

export const deptListDB = async (data) => {
  console.log(data);
  try {
    const res = await axios({
      method: "get",
      url: process.env.REACT_APP_TOMCAT_IP + "dept",
      params: data,
    });
    console.log(res.data);
    return res;
  } catch (error) {
    console.error("부서목록 가져오기 실패!!!", error);
    //호출한 쪽에서 catch하도록 다시 던져 줄때
    throw error;
  }
}; //end of deptListDB

export const deptListDB2 = async (data) => {
  console.log("deptListDB2 호출");
  console.log(data);
  try {
    //만일 파라미터로 값을 넘길 때 속성 이름과 객체 리터럴 변수명이 같다면 생략이 가능함.
    const res = await axios.get(process.env.REACT_APP_TOMCAT_IP + "dept", {
      params: data,
    });
    console.log(res.data);
    return res;
  } catch (error) {
    console.error("부서목록 가져오기 실패!!!", error);
    //호출한 쪽에서 catch하도록 다시 던져 줄때
    throw error;
  }
}; //end of deptListDB
