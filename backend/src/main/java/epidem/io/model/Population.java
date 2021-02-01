package epidem.io.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="population")
public class Population {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="simulation_id", nullable=false)
    @JsonIgnore
    private Simulation simulation;

    private Long infected;
    private Long healthy;
    private Long death;
    private Long recovered;

    public Long getAllCase() {
        return infected+recovered+death;
    }

    public static List<Population> fromSimulation(Simulation simulation) {
        List<Population> populations = new ArrayList<>();
        Long infected = simulation.getInfected();
        Long health = simulation.getPopulationSize() - infected;
        Long death = 0L, recovery = 0L;
        populations.add(new Population(0L, simulation, infected, health, death, recovery));
        List<Long> infections = new ArrayList<>();
        for(int i = 1; i < simulation.getSimulationDays(); i++) {
            Long infectionInDay = (long)Math.ceil((float)infected * (float)simulation.getInfectionRate() * (float)health / (float)simulation.getPopulationSize());
            if(health == 0) {
                infectionInDay = 0L;
            }
            if(infectionInDay > simulation.getPopulationSize()) {
                infectionInDay = simulation.getPopulationSize() - infected;
            }
            if(infectionInDay > health) {
                infectionInDay = health;
            }
            infected += infectionInDay;
            health -= infectionInDay;
            if( health<0 ) {
                health = 0L;
            }
            Float mortalityRate = simulation.getDaysUntilDeath() <= simulation.getDaysUntilRecovery() ?
                    simulation.getMortalityRate() : 0.0f;
            int deathDay = i - simulation.getDaysUntilDeath();
            if (deathDay == 0 ) {
                Long deathInDay = (long)Math.ceil(simulation.getInfected()*mortalityRate);
                infected -= deathInDay;
                death += deathInDay;
            }else if( deathDay > 0 ) {
                Long deathInDay = (long)Math.ceil(getInfectionInDay(populations.get(deathDay-1), simulation) * mortalityRate);
                infected -= deathInDay;
                death += deathInDay;
                if(death > simulation.getPopulationSize()) {
                    death = simulation.getPopulationSize();
                }
            }
            int recoveryDay = i - simulation.getDaysUntilRecovery();
            if( recoveryDay >= 0 ) {
                if(recoveryDay == 0){
                    Long recoveredInDay = (long)(simulation.getInfected() - simulation.getInfected() * mortalityRate);
                    recovery += recoveredInDay;
                    infected -= recoveredInDay;
                }else {
                    Long infection = getInfectionInDay(populations.get(recoveryDay-1), simulation);
                    Long deathInDay = (long)Math.ceil(infection * mortalityRate);
                    Long recoveredInDay = infection - deathInDay;
                    recovery += recoveredInDay;
                    infected -= recoveredInDay;
                    if(recovery > simulation.getPopulationSize()) {
                        recovery = simulation.getPopulationSize();
                    }
                }
            }
            if(infected > simulation.getPopulationSize()) {
                infected = simulation.getPopulationSize() - death - recovery;
            }else if (infected < 0) {
                infected = 0L;
            }
            populations.add(new Population(0L, simulation, infected, health, death, recovery));
        }

        return populations;
    }

    public static Long getInfectionInDay(Population pop, Simulation simulation) {
        Long infected = (long)Math.ceil((float)pop.infected * (float)simulation.getInfectionRate() * (float)pop.healthy / (float)simulation.getPopulationSize());
        if(infected>simulation.getPopulationSize()){
            return simulation.getPopulationSize() - pop.infected;
        }
        return infected;
    }
}




