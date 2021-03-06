package epidem.io.service;

import epidem.io.model.Population;
import epidem.io.model.Simulation;
import epidem.io.repository.SimulationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class SimulationService {
    @Autowired
    SimulationRepository simulationRepository;

    @Autowired
    PopulationService populationService;

    public List<Simulation> getAll() {
        return simulationRepository.findAll();
    }

    public Simulation getSimulation(Long id) {
        return simulationRepository
                .findById(id)
                .orElse(null);
    }

    public void delete(Long id) {
        simulationRepository.deleteById(id);
    }

    @Transactional
    public Simulation save(Simulation simulation)  {
        simulation.setPopulations(Population.fromSimulation(simulation));
        Simulation savedSimulation = simulationRepository.save(simulation);
        populationService.save(simulation.getPopulations());
        savedSimulation.setPopulations(simulation.getPopulations());
        return savedSimulation;
    }
}
