package com.example.demo.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // 모든 API 경로에 대해 CORS 허용
                // ✅ 끝의 "/" 제거 (Origin 매칭 안정성)
                .allowedOrigins("http://localhost:3000", "http://localhost:8000")

                // ✅ 허용할 HTTP 메서드 (필요한 것만 두셔도 됨)
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")

                // ✅ 허용할 요청 헤더 (Authorization 등 포함)
                .allowedHeaders("*")

                // ✅ 브라우저가 읽을 수 있게 노출할 헤더 (필요 시)
                .exposedHeaders("Authorization", "Location")

                // ✅ 쿠키/세션 사용 시 true (JWT만 쓰면 없어도 됨)
                .allowCredentials(true)

                // ✅ 프리플라이트(OPTIONS) 결과 캐시 시간(초)
                .maxAge(3600);
    }
}
