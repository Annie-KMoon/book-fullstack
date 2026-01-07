package com.example.demo.di;

public class HelloBeanImpl implements HelloBean{
    String msg = null;//절대로 직접 생성하지 않음.
    public void setMsg(String msg){
        this.msg = msg;
    }
    @Override
    public String getGreeting(String msg) {
        return "Spring "+this.msg;
    }
}