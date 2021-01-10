package epidem.io.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PopulationController {

    @GetMapping("/population/{id}")
    public String getPopulation(@PathVariable Integer id) {
        return "Hello";
    }
}
