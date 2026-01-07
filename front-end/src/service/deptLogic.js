import axios from "axios";

//아래 코드는 요청시마다 반복되는 코드가 있다.
// 공통 axios 인스턴스화 한다면 개선할 수 있다.
const api = axios.create({
  baseURL: process.env.REACT_APP_SPRING_IP, //예: http://localhost:8000/
  timeout: 10000,
});

// 서블릿에게 부서 등록 요청하기
export const deptInsertDB = async (data) => {
  const res = await api.post("dept/deptInsert", data);
  return res.data;
}; //end of deptInsertDB

/* export const deptInsertDB = async (data) => {
  console.log(data);
  try {
    const res = await axios({
      method: "post",
      url: process.env.REACT_APP_SPRING_IP + "deptInsert",
      data: data,
    });
    console.log(res.data);
    return res;
  } catch (error) {
    console.error("부서등록 실패!!!", error);
  }
}; //end of deptInsertDB */

//서블릿에게 부서 수정 요청하기
export const deptUpdateDB = async (data) => {
  const res = await api.put("dept/deptUpdate", data);
  return res.data; //1이면 수정 성공, 0이면 수정 실패
}; //end of deptInsertDB

/* export const deptUpdateDB = async (data) => {
  console.log(data);
  try {
    const res = await axios({
      method: "put",
      url: process.env.REACT_APP_SPRING_IP + "deptUpdate",
      data: data,
    });
    console.log(res.data);
    return res;
  } catch (error) {
    console.error("부서등록 실패!!!", error);
  }
}; //end of deptInsertDB */

//부서정보 삭제하기
export const deptDeleteDB = async (deptno) => {
  const dept = {
    deptno: deptno,
  };
  const res = await api.delete("dept/deptDelete", { params: dept });
  return res.data; //1이면 삭제 성공, 0이면 삭제 실패
}; //end of deptListDB

/* //delete from dept where deptno = 61
export const deptDeleteDB = async (deptno) => {
  console.log(deptno); //61번 가정
  try {
    const res = await axios({
      method: "delete",
      url: process.env.REACT_APP_SPRING_IP + "deptDelete",
      params: { deptno: deptno },
    });
    console.log(res.data);
    return res;
  } catch (error) {
    console.error("부서삭제 실패!!!", error);
    //호출한 쪽에서 catch하도록 다시 던져 줄때
    throw error;
  }
}; //end of deptDelete */

//부서목록 조회하기 - 타입, 데이터셋 구조, json, [], {}, [{}]
export const deptListDB = async (data) => {
  console.log(data) //deptno, dname, loc, keyword, searchType
  const res = await api.get("dept/deptList", { params: data });
  return res.data;
}; //end of deptListDB

/*
export const deptListDB = async (data) => {
  console.log(data)
  try {
    const res = await axios({
      method: 'get',
      url: process.env.REACT_APP_SPRING_IP+'deptList',
      params: data
    })
    console.log(res.data)
    return res 
  } catch (error) {
    console.error("부서목록 가져오기 실패!!!", error)
    //호출한 쪽에서 catch하도록 다시 던져 줄때
    throw error
  }
}//end of deptListDB
*/

// const API = process.env.REACT_APP_SPRING_IP;

/* export const deptListDB2 = async (data) => {
  try {
    const res = await axios.get(`${API}deptList`, {
      params: data,
    });
    return res;
  } catch (error) {
    console.error("부서목록 가져오기 실패!!!", error);
    return null;
  }
}; */
