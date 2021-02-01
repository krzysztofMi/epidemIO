CREATE TABLE IF NOT EXISTS population (
    id SERIAL PRIMARY KEY,
    simulation_id integer,
    infected BIGINT,
    healthy BIGINT,
    death BIGINT,
    recovered BIGINT
);