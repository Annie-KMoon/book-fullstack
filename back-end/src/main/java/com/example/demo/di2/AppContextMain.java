package com.example.demo.di2;

import com.example.demo.vo.DeptVO;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class AppContextMain {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext ctx
                = new AnnotationConfigApplicationContext(AppContext.class);
        DeptVO dvo = ctx.getBean("getDeptVO", DeptVO.class);
        int deptno = dvo.getDeptno();
        String dname = dvo.getDname();
        String loc = dvo.getLoc();
        System.out.println(deptno +", "+ dname +", "+ loc);
        ctx.close();
    }
}
