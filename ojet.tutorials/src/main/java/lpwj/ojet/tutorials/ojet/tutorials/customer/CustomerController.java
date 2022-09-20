package lpwj.ojet.tutorials.ojet.tutorials.customer;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CustomerController {
    @GetMapping("/")
    public String helloWorld() {
        return "Greetings from Spring Boot!";
    }
}