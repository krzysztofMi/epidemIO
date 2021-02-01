CREATE TABLE IF NOT EXISTS simulation (
    id SERIAL PRIMARY KEY,
    name TEXT,
    population_size INT,
    infected INT,
    infection_rate INT,
    mortality_rate FLOAT,
    days_until_recovery INT,
    days_until_death INT,
    simulation_days INT
);