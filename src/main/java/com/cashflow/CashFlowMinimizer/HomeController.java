package com.cashflow.CashFlowMinimizer;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController  // Marks this class as a REST controller
@RequestMapping("/")  // Maps this controller to "/"
public class HomeController {

    @GetMapping  // Maps the root URL (http://localhost:8080/)
    public String home() {
        return "Welcome to CashFlow Minimizer!";
    }
}
