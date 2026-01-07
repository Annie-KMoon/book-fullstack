package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import com.example.demo.service.DeptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
//응답 페이지를 jsp로 가져갈때는 아래를 사용함.
//import org.springframework.stereotype.Controller;
//응답 결과를 json, text/plain
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.vo.DeptVO;
import com.google.gson.Gson;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

/*
MVC패턴 기준
컨트롤계층 - 사용자가 입력한 값 청취, 응답페이지에 대한 결과 처리(html, json)
서블릿과는 달리 서블릿을 상속받지 않고 처리한다. - 대신 어노테이션을 사용함.
복잡한 환경 설정, 의존성 관리
http://localhost:8000/dept/deptList
http://localhost:8000/dept/deptDetail
http://localhost:8000/dept/deptInsert
http://localhost:8000/dept/deptUpdate
http://localhost:8000/dept/deptDelete
*/

@Log4j2
@RestController
@RequiredArgsConstructor
//@RequestMapping("/dept/*")
public class DeptController {
    //@Autowired - 교육용, 연습 - setter 객체 주입법
    //private DeptService deptService;// 변수 이름은 줄여쓰지 않음.
    //아래 코드는 생성자 주입 방식임.
    //RequiredArgsConstructor 사용하면서 final 필드를 null로 초기화 하면 안됨.
    //null로 초기화하면 생성자에게 주입을 받지 않습니다. -null이니까 호출이 안됨(NPE)
    //즉 lombok이 생성자를 생성할 때 이미 초기화된 값 null을 사용하게 되어
    //의존성 주입을 받지 못함. + 변수옆에 final-상수
    private final DeptService deptService; //null값 주면 안됨!주의!
    @GetMapping("dept/deptList")
    public String deptList(DeptVO dvo) {
        log.info("deptList호출");
        log.info("dname : " + dvo.getDname());
        List<Map<String, Object>> list = null;
        list = deptService.deptList(dvo);
        String temp = null;
        Gson gson = new Gson();
        temp = gson.toJson(list);
        return temp;// application/json
    }

    @GetMapping("dept/deptDetail")
    public String deptDetail() {
        log.info("deptDetail호출");
        return "deptDetail";
    }

    @PostMapping("dept/deptInsert")
    public String deptInsert(@RequestBody Map<String, Object> pmap) {
        log.info("deptInsert호출");
        log.info(pmap);
        int result = -1;
        result = deptService.deptInsert(pmap);
        return String.valueOf(result);// 이 반환값은 리액트 페이지로 반환됨
        // return "입력성공|실패";
    }

    @PutMapping("dept/deptUpdate")
    public String deptUpdate(@RequestBody Map<String, Object> pmap) {
        log.info("deptUpdate호출");
        int result = 0;
        result = deptService.deptUpdate(pmap);
        return String.valueOf(result);// 1-> "1"
    }
    // http://localhost:8000/dept/deptDelete?deptno=61
    // http://localhost:8000/dept/61
    @DeleteMapping("dept/deptDelete")
    public String deptDelete(DeptVO dvo) {
        log.info("deptDelete호출");
        log.info("사용자가 선택한 부서 번호 : "+dvo);
        int result = -1;
        result = deptService.deptDelete(dvo);
        return String.valueOf(result);
    }
}