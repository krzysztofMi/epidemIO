package epidem.io.service;

import epidem.io.model.Population;
import epidem.io.model.Simulation;
import epidem.io.model.type.ChartType;
import epidem.io.repository.PopulationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PopulationService {

    @Autowired
    PopulationRepository populationRepository;

    @Autowired
    SimulationService simulationService;

    public Population getByDay(Long id, Integer day) {
        Simulation simulation = simulationService.getSimulation(id);
        if(simulation.getSimulationDays() <= day) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Population of day " + day + " not found");
        }

        return simulation.getPopulations().get(day);
    }

    public List<Population> save(List<Population> populations){
       return populationRepository.saveAll(populations);
    }

    public List<Long> getDataByType(Long id, ChartType type) {
        List<Population> populations = simulationService.getSimulation(id).getPopulations();
        return switch (type) {
            case ALL -> populations.stream()
                    .map(it -> {
                        return it.getInfected() + it.getDeath() + it.getRecovered();
                    }).collect(Collectors.toList());
            case DEATH -> populations.stream()
                    .map(Population::getDeath).collect(Collectors.toList());
            case ACTIVE -> populations.stream()
                    .map(Population::getInfected).collect(Collectors.toList());
            case RECOVERED -> populations.stream()
                    .map(Population::getRecovered).collect(Collectors.toList());
            case HEALTH -> populations.stream()
                    .map(Population::getHealthy).collect(Collectors.toList());
        };
    }

    public void deleteAll(List<Population> populations) {
        populationRepository.deleteAll(populations);
    }

}
