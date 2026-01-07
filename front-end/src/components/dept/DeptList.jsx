import React, { useEffect, useState } from 'react'
import { deptListDB } from '../../service/deptLogic'
import styles from './dept.module.css'
import DeptRow from './DeptRow'
import { Button, Modal } from 'react-bootstrap'
import { MyInput, MyLabel} from '../style/FormStyle'

const DeptList = () => {
  const [deptList, setDeptList] = useState([])
  const [ deptno, setDeptno ] = useState(0)
  const [ dname, setDname ] = useState('')
  const [ loc, setLoc ] = useState('')
  //사용자가 입력한 검색어 담기
  const [keyword, setKeyword] = useState('')
  //deptno, dname, loc
  const [searchType, setSearchType]= useState('')
  
  const getDeptList = async(type = searchType, key = keyword) => {
    const dept = {
      deptno: 0,
      dname: null,
      loc: null,
      searchType: type,
      keyword: key,
    }
    const res = await deptListDB(dept)
    console.log(res)
    setDeptList(res)
    //console.log(res.data)
  }
  useEffect(() => {
    getDeptList()
  },[])//의존성배열이 빈통이면 최초 한 번만 호출된다.
  const jsonDeptList = () => {

  }


  // 검색버튼을 클릭했을 때 호출되는 함수
  // 만일 키워드 입력 후 엔터 했을 때 호출하려면 form태그로 묶어서 submit 처리함
  const reactSearch = (event) => {
    console.log('reactSearch 호출') //같은 기능인데 두곳에서 모두 필요로한다 함수로 묶어낸다.
    event.preventDefault() //페이지 새로고침 방지
    console.log('검색 요청:', searchType, keyword)
    getDeptList() // 검색 조건에 맞는 리스트 재요청
  }

  // 모달 관련 상태
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  //사용자가 입력한 부서 정보를 객체 리터럴로 담아서 서버에 전송한다.
  //json -> 객체
  //객체 -> json
  const deptInsert = async () =>{

  }

  const handleDeptno = (value) =>{
    setDeptno(value)
  }

  const handleDname = (value) =>{
    setDname(value)
  }

  const handleLoc = (value) => {
    setLoc(value)
  }

  //조건 검색 후에 keyword와 searchType에 대한 초기화
  const handleReset = () => {
    //아래와 같이 상태값을 바꾸더라도 즉시 변수에 값을 바꿔주는 것이 아니라
    //React가 배체처리(비동기)하면서 곧 상태를 업데이트 합니다. -timeline이 중요
    //그래서 바로 getDeptList()를 호출하면 그 순간 getDeptList안에서 참조하는
    //keyword가 아직 이전 값일 수 있습니다.
    //이러한 이슈가 있을 수 있으므로 setKeyword와 setSearchType이 업데이트를 처리할
    //시간을 벌어줘야 한다.  - 힌트: setTimeout
    setKeyword('')     // 검색어 초기화
    setSearchType('') // 분류 선택 초기화
    // state 업데이트는 비동기이므로, 즉시 전체 조회를 위해 빈 값을 직접 전달
    getDeptList('','') //아직 keyword와 searchType이 이전 값일 수 있음.
    //setTimeout(getDeptList(),1000)
  }


  return (
    <>
      <div className="container">
        <div className="page-header">
      <h2>부서관리&nbsp;<i className="fa-solid fa-angles-right"></i>&nbsp;<small>부서목록</small></h2>
        <hr />
        </div>      
      <div className="row">
        <div className="col-3">
          <select id="gubun"
            onChange ={(event)=> {setSearchType(event.target.value)}}//deptno, dname, loc
            className="form-select" aria-label="분류선택"
            value={searchType}
          >
            <option defaultValue>분류선택</option>
            <option value="deptno">부서번호</option>
            <option value="dname">부서명</option>
            <option value="loc">지역</option>
          </select>			
        </div>
        <div className="col-6">
          <input type="text" id="keyword" className="form-control" placeholder="검색어를 입력하세요" 
                onChange={(event)=>{setKeyword(event.target.value)}}
                aria-label="검색어를 입력하세요" aria-describedby="btn_search" 
                value={keyword}
                />
                </div>
                <div className="col-3">
                  <button className='btn btn-danger' id="btn_search" onClick={reactSearch}>검색</button>&nbsp; 
                  <button className='btn btn-dark'onClick={handleReset}>초기화</button>
                </div>
                  </div> 
      <div className={styles.deptlist}>
        <table className='table'>
          <thead>
            <tr>
              <th>부서번호</th>
              <th>부서명</th>
              <th>지역</th>
            </tr>
          </thead>
          <tbody>
          {deptList.map(dept => (
            <DeptRow key={dept.deptno} dept={dept} />
          ))}
          </tbody>
        </table> 
        <hr />    
        <div className={styles.footer}>
          <button className="btn btn-warning" onClick={jsonDeptList}>
            전체조회
          </button>&nbsp; 
          <button  className="btn btn-success" onClick={handleShow}>
            부서등록
          </button> 
        </div>
      </div>
    </div>
    {/* ========================== [[ 부서 등록 Modal ]] ========================== */}
    <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>부서등록</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          <div style={{display: 'flex'}}>
            <MyLabel>부서번호 
              <MyInput type="text" id="deptno" placeholder="Enter 부서번호" onChange={(e)=>{handleDeptno(e.target.value)}} />
            </MyLabel>
          </div>
          <div style={{display: 'flex'}}>
            <MyLabel>부서명 
              <MyInput type="text" id="dname" placeholder="Enter 부서명" onChange={(e)=>{handleDname(e.target.value)}}/>
            </MyLabel>
          </div>
          <div style={{display: 'flex'}}>
            <MyLabel>지역 
              <MyInput type="text" id="loc" placeholder="Enter 지역" onChange={(e)=>{handleLoc(e.target.value)}}/>
            </MyLabel>
          </div>
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            닫기
          </Button>
          <Button variant="primary" onClick={deptInsert}>
            저장
          </Button>
        </Modal.Footer>
      </Modal>     
    {/* ========================== [[ 부서등록 Modal ]] ========================== */} 
    </>
  )
}

export default DeptList