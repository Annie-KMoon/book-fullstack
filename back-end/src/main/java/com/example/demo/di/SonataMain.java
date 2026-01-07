package com.example.demo.di;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class SonataMain {
    public static void main(String[] args) {
            Sonata yourCar = new Sonata();
            System.out.println(yourCar);
            //더 이상 그 객체를 가리키지 않는다.
            yourCar = null; //candidate상태로 빠짐(소멸)
            yourCar = new Sonata();//다시 인스턴스화 - 새로운 주소번지 할당
            System.out.println(yourCar); //6&9line비교

        ApplicationContext context =
                new ClassPathXmlApplicationContext("com\\di\\sonataBean.xml");
        Sonata myCar = (Sonata) context.getBean("myCar");
        System.out.println(myCar);
        myCar = null;//역할이 없다.
        myCar = (Sonata) context.getBean("myCar");
        System.out.println(myCar);
        Sonata myCar2 = (Sonata) context.getBean("myCar");
        System.out.println(myCar == myCar2); //true or false? -> true

        // 대조군 만들기 - 좀 더
        Sonata himCar = (Sonata) context.getBean("himCar");
        Sonata himCar2 = (Sonata) context.getBean("himCar");
        System.out.println(himCar == himCar2); //false
    }
}
/*
DI에 대한 실습 예제
new로 직접 생성하는 객체와 스프링컨테이너가 만들어주는 객체 차이를
눈으로 확인해보자.
- new로 만든 객체는 만든 사람(개발자)이 직접 생명주기를 관리한다.(위임이 아니다)
- 스프링컨테이너에서 꺼낸 Bean은 스프링이 대신 생성/관리한다.
- scope='singletone'이면 항상 같은 객체,
  scope='prototype'이면 요청할 때 마다 새로운 객체가 나옴.

1.myCar
:class - Sonata
:scope - Singleton
- 스프링 컨테이너 안에서 딱 1개만 생성
- 이후 getBean("myCar") 몇 번 호출해도 같은 객체 주소 번지

2.himCar
:class - Sonata
:scope - prototype
- getBean("himcar") 호출할 때 마다 새로운 객체 주소 번지

3.herCar
- 디폴트가 singleton이다.
- scope를 생략하면 singleton이다.
*/