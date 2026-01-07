## Spring IoC 컨테이너

### Bean Factory vs ApplicationContext 차이
#### 공통점
둘 다 Spring IoC 컨테이너
```text
객체 생성 - 직접 new를 사용해서 인스턴스화 하지 않음
의존성 주입(DI) - 자원관리 책임을 컨테이너가 가짐.
생명주기 관리 - 생성 -> 사용 -> 소멸

```

#### Bean Factory란
특징<br>
- Lazy Loading(지연 로딩) :  getBean() 호출할 때 그 때 생성해줌.
- 가볍고 단순
- 핵심 DI만 제공
- 내부 테스트용, 제한된 환경

```java
import org.springframework.beans.factory.BeanFactory;
import org.springframework.core.io.ClassPathResource;

BeanFactory factory =
        new XmlBeanFactory(
                new ClassPathResource("beans.xml"));
Myservice service = factory.getBean(MyService.class);
// getBean()호출 전까지는 객체 생성을 하지 않음
```

#### ApplicationContext란?
특징<br>
Eager Loading(즉시 로딩) : 스캔을 한 모든 빈(Bean) 미리 생성
BeanFactory의 확장 버젼
- 이벤트 처리(ApplicationEvent)
- 국제화
- 리소스 로딩(파일, 클래스패스 로딩, URL)
- AOP(프록시 생성)
- 환경관리, 빈 후처리

#### 왜 ApplicationContext를 쓰는가?
- 에러 발견이 빠르다.
- 서버 시작시 Bean 생성
- 설정 오류가 런타임 중이 아니라 시작 시점에 바로 확인 가능함.