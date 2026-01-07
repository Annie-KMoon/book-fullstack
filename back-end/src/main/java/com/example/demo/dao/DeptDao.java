package com.example.demo.dao;

import java.util.List;
import java.util.Map;

import lombok.RequiredArgsConstructor;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.example.demo.vo.DeptVO;

import lombok.extern.log4j.Log4j2;

@Log4j2
@Repository
@RequiredArgsConstructor
public class DeptDao {
    //@Autowired
    private final SqlSessionTemplate sqlSessionTemplate; //불변객체

    public List<Map<String, Object>> deptList(DeptVO dvo) {
        List<Map<String, Object>> list = null;
        list = sqlSessionTemplate.selectList("deptList", dvo);
        log.info(list);
        return list;
    }// end of deptList

    public int deptInsert(Map<String, Object> pmap) {
        int result = -1;
        result = sqlSessionTemplate.insert("deptInsert", pmap);
        log.info(result);
        return result;
    }

    public int deptUpdate(Map<String, Object> pmap) {
        int result = -1;
        result = sqlSessionTemplate.update("deptUpdate", pmap);
        log.info(result);
        return result;
    }

    public int deptDelete(DeptVO dvo) {
        int result = -1;
        result = sqlSessionTemplate.delete("deptDelete", dvo);
        log.info(result);
        return result;
    }

}// end of DeptDao
