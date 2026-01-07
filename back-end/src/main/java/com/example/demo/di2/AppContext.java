package com.example.demo.di2;

import com.example.demo.vo.DeptVO;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
/*
DeptVO 객체를 스프링 컨테이너(BeanFactory, ApplicationContext-실무 주 사용)가
(대신) 생성해서 보관(싱글톤)해 두고 필요할 때 다른클래스에서
주입(@Autowired,연습용,,-setter메서드 주입법,
변수선언의 형태: 실전-생성자객체 주입법 관련 - 불변객체 - 사이드이펙트, 부수효과)
또는 조회(getBean)해서 쓰게 만드는 코드임
*/
@Configuration
public class AppContext {
    //메서드 이름 앞에 @Bean을 붙이면 메서드 이름이 빈네임이 되는 것임
    // 빈생성 객체를 인스턴스화 하면서 @Bean이 정의된 클래스를 생성자의
    // 파라미터로 추가하는 것 만드오로 @Bean이 붙은 메서드를 호출할 수 있다.
    // @Configuration과 @Bean은 직접적인 의존관계는 아님
    @Bean
    public DeptVO getDeptVO(){
        DeptVO deptVO = new DeptVO();
        deptVO.setDeptno(10); //DeptVO의 deptno전변에 저장
        deptVO.setDname("총무부");//dname전변에 저장
        deptVO.setLoc("대전");//loc전변에 저장
        return deptVO;
    }
}
