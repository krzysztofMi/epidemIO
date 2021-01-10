CREATE TABLE IF NOT EXISTS simulation (
    id SERIAL PRIMARY KEY,
    name TEXT,
    population_size INT,
    infected INT,
    infection_rate INT,
    mortality_rate FLOAT,
    day_until_death INT,
    day_until_recovery INT,
    day_number INT
);