package epidem.io.controller;

import epidem.io.model.Population;
import epidem.io.model.type.ChartType;
import epidem.io.service.PopulationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PopulationController {

    @Autowired
    private PopulationService populationService;

    @GetMapping("simulation/{id}/population")
    public Population getPopulation(@PathVariable Long id, @RequestParam Integer day) {
        return populationService.getByDay(id, day);
    }

    @GetMapping("simulation/{id}/population/data")
    public List<Long> getData(@PathVariable Long id, @RequestParam("type") ChartType type) {
        return populationService.getDataByType(id, type);
    }
}
