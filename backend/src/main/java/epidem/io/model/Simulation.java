package epidem.io.model;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;


import javax.persistence.*;

@Data
@Entity
@Table(name = "simulation")
public class Simulation {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;
    private String name;
    private Integer populationSize;
    private Integer infected;
    private Integer infectionRate;
    private Integer mortalityRate;
    private Integer dayUntilDeath;
    private Integer dayUntilRecovery;
    private Integer dayNumber;

}
