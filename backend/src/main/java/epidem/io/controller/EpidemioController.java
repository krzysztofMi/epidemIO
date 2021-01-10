package epidem.io.controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EpidemioController {

    @RequestMapping("/")
    public String index() {
        return "EpidemIO backend";
    }
}
