package com.example.demo.di;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class HelloMain {
    public static void main(String[] args) {
        ApplicationContext context =
                new ClassPathXmlApplicationContext("com\\di\\helloBean.xml");
        HelloBean helloBean = (HelloBean) context.getBean("helloBean");
        HelloBean helloBean1 = new HelloBeanImpl();
        String result = helloBean1.getGreeting(null);
        System.out.println(result);
        System.out.println(helloBean.getGreeting(null));
    }
}