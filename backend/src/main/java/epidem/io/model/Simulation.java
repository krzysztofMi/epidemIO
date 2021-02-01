package epidem.io.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import org.hibernate.annotations.Cascade;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Table(name = "simulation")
public class Simulation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private Long populationSize;
    private Long infected;
    private Integer infectionRate;
    private Float mortalityRate;
    private Integer daysUntilRecovery;
    private Integer daysUntilDeath;
    private Integer simulationDays;

    @JsonIgnore
    @OneToMany(mappedBy = "simulation")
    List<Population> populations = new ArrayList<>();

}
