package epidem.io.service;

import epidem.io.model.Simulation;
import epidem.io.repository.SimulationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SimulationService {
    @Autowired
    SimulationRepository simulationRepository;

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

    public Simulation save(Simulation simulation) {
        return simulationRepository.save(simulation);
    }
}
