package epidem.io.controller;

import epidem.io.model.Simulation;
import epidem.io.service.SimulationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class SimulationController{

    @Autowired
    private SimulationService simulationService;

    @GetMapping("/simulation/{id}")
    public Simulation getSimulation(@PathVariable Long id) {
        return simulationService.getSimulation(id);
    }

    @GetMapping("/simulation")
    public List<Simulation> getAll() {
        return simulationService.getAll();
    }

    @PostMapping("/simulation")
    public Simulation saveSimulation(@RequestBody Simulation simulation) {
        return simulationService.save(simulation);
    }

    @PatchMapping("/simulation")
    public Simulation updateSimulation(@RequestBody Simulation simulation) {
        return simulationService.save(simulation);
    }

    @DeleteMapping("/simulation/{id}")
    public boolean deleteSimulation(@PathVariable Long id) {
        simulationService.delete(id);
        return true;
    }
}
