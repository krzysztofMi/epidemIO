package epidem.io.model.dto;

import lombok.Data;

@Data
public class Population {
    private Integer sick;
    private Integer healthy;
    private Integer death;
    private Integer recovered;
}


