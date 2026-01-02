package com.example.demo.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.gson.Gson;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;

@Log4j2
public class DeptController extends HttpServlet {

	// 부서 정보 삭제하기
	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		log.info("doDelete");
	}

	// 부서 정보 조회하기
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// 사용자(3000번 서버)가 파라미터로 넘긴 값 출력해보기
		String deptno = req.getParameter("deptno");
		log.info("사용자가 입력한 부서번호 : " + deptno);
		resp.setContentType("application/json;utf-8");
		PrintWriter out = resp.getWriter();

		List<Map<String, Object>> list = new ArrayList<>();
		Map<String, Object> map = new HashMap<>();
		map.put("deptno", 10);
		map.put("dname", "총무부");
		map.put("loc", "서울");
		list.add(map);
		map = new HashMap<>();
		map.put("deptno", 20);
		map.put("dname", "개발부");
		map.put("loc", "부산");
		list.add(map);
		map = new HashMap<>();
		map.put("deptno", 30);
		map.put("dname", "운영부");
		map.put("loc", "제주");
		list.add(map);

		String imsi = null;
		Gson g = new Gson();
		g.toJson(list);
		imsi = g.toJson(list);
		out.print(imsi);
	}

	// 부서 정보 등록하기
	// 사용자로부터 입력받은 값을 전달 받아서 처리하기
	// Front-End : React -> JSON방식
	// jsp : 폼 전송 받음
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		log.info("doPost");
		String deptno = req.getParameter("deptno");
		String dname = req.getParameter("dname");
		String loc = req.getParameter("loc");
		log.info(deptno + ", " + dname + ", " + loc);
	}

	// 부서 정보 수정하기
	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		log.info("doPut");
	}

}