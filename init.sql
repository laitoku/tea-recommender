CREATE DATABASE tea_db;
\c tea_db

CREATE TABLE IF NOT EXISTS teas (
    tea_id serial PRIMARY KEY,
    teaname VARCHAR ( 50 ) NOT NULL,
    teatype VARCHAR ( 50 ) NOT NULL,
    temperature VARCHAR ( 50 ) NOT NULL,
    mood VARCHAR ( 50 ) NOT NULL,
    caffeinated BOOLEAN NOT NULL
);

INSERT INTO teas (teaname, teatype, temperature, mood, caffeinated)
    VALUES
        ('Jasmine', 'Green', 'Hot', 'Relax', TRUE),
        ('English Breakfast', 'Black', 'Hot', 'Relax', TRUE),
        ('Alishan', 'Oolong', 'Hot', 'Relax', TRUE);

