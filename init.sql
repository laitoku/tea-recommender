CREATE DATABASE tea_db;
\c tea_db

CREATE TABLE IF NOT EXISTS tea (
    tea_id serial PRIMARY KEY,
    tea_name VARCHAR (50) NOT NULL,
    tea_type VARCHAR (50) NOT NULL,
    temperature CHAR (4) NOT NULL,
    mood VARCHAR (50) NOT NULL,
    caffeinated BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS flavor (
    tea_idf INT,
    flavor VARCHAR (50),

    PRIMARY KEY (tea_idf, flavor),
    FOREIGN KEY (tea_idf)
        REFERENCES tea(tea_id)
);

CREATE TABLE IF NOT EXISTS health (
    tea_idh INT,
    benefit VARCHAR (50),

    PRIMARY KEY (tea_idh, benefit),
    FOREIGN KEY (tea_idh)
        REFERENCES tea(tea_id)
);

INSERT INTO tea (tea_name, tea_type, temperature, mood, caffeinated)
    VALUES
        ('Jasmine', 'Green', 'Hot', 'Relax', TRUE),
        ('English Breakfast', 'Black', 'Hot', 'Relax', TRUE),
        ('Alishan', 'Oolong', 'Hot', 'Relax', TRUE);

INSERT INTO flavor (tea_idf, flavor)
    VALUES
        (1, 'Sweet'),
        (1, 'Floral');

INSERT INTO health (tea_idh, benefit)
    VALUES
        (1, 'Antioxidants'),
        (1, 'Weight Loss');
