package com.example.demo.service;

import java.util.List;
import java.util.Map;

import com.example.demo.dao.DeptDao;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.vo.DeptVO;

import lombok.extern.log4j.Log4j2;
// 모델 계층 - 비즈니스 로직처리(업무 프로세스)
@Service
@Log4j2
@RequiredArgsConstructor
public class DeptService {
    //@Autowired //교육용
    private final DeptDao deptDao; //불변객체
    public List<Map<String, Object>> deptList(DeptVO dvo) {
        log.info("deptList");
        List<Map<String, Object>> list = null;
        list = deptDao.deptList(dvo);
        return list;
    }
    public int deptInsert(Map<String,Object> pmap) {
        log.info("deptInsert");
        int result = -1;
        result = deptDao.deptInsert(pmap);
        return result;
    }//end of deptInsert
    public int deptUpdate(Map<String,Object> pmap) {
        log.info("deptUpdate");
        int result = -1;
        result = deptDao.deptUpdate(pmap);
        return result;
    }
    public int deptDelete(DeptVO dvo) {
        log.info("deptDelete");
        int result = -1;
        result = deptDao.deptDelete(dvo);
        return result;
    }
}

