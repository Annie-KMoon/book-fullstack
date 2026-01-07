package com.example.demo.vo;

import lombok.Data;

@Data
public class DeptVO {
    private int deptno;
    private String dname;
    private String loc;

    // 검색용 변수
    private String searchType; //"deptno" | "dname" | "loc"
    private String keyword; //검색어
}
