package com.cashflow.CashFlowMinimizer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.cashflow.CashFlowMinimizer") // Ensure correct package is scanned
public class CashFlowMinimizerApplication {
    public static void main(String[] args) {
        SpringApplication.run(CashFlowMinimizerApplication.class, args);
    }
}
