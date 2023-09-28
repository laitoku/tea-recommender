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

INSERT INTO tea (tea_name, tea_type, caffeinated)
    VALUES
        ('Jasmine', 'Green', TRUE),
        ('English Breakfast', 'Black', TRUE),
        ('Alishan', 'Oolong', TRUE),
        ('Chamomile', 'Herbal', FALSE),
        ('Pepermint', 'Herbal', FALSE),
        ('Rosehip', 'Herbal', FALSE),
        ('Rooibos', 'Herbal', FALSE),
        ('Ginger', 'Herbal', FALSE),
        ('Cinnamon', 'Herbal', FALSE),
        ('Lemongrass', 'Herbal', FALSE),
        ('Tulsi', 'Herbal', FALSE),
        ('Rosemary', 'Herbal', FALSE),
        ('Olive leaf', 'Herbal', FALSE),
        ('Barley', 'Herbal', FALSE),
        ('Licorice', 'Herbal', FALSE),
        ('Eucalyptus', 'Herbal', FALSE),
        ('Iceland moss', 'Herbal', FALSE),
        ('Gingko', 'Herbal', FALSE),
        ('Ashwagandha', 'Herbal', FALSE),
        ('Sage', 'Herbal', FALSE),
        ('Raspberry leaf', 'Herbal', FALSE),
        ('Valerian root', 'Herbal', FALSE),
        ('Anise seed', 'Herbal', FALSE),
        ('ELder berry flower', 'Herbal', FALSE),
        ('Liden flower', 'Herbal', FALSE),
        ('Tumeric', 'Herbal', FALSE),
        ('Moringa', 'Herbal', FALSE),
        ('Lavender', 'Herbal', FALSE),
        ('Pine needle', 'Herbal', FALSE),
        ('Echinacea', 'Herbal', FALSE),
        ('Honeybush', 'Herbal',FALSE),
        ('Hibicus','Herbal',FALSE),
        ('Osmanthus','Herbal',FALSE),
        ('Chrysanthenum','Herbal',FALSE),
        ('Rose','Herbal',FALSE),
        ('Jasmine','Herbal',FALSE),
        ('Yarrow','Herbal',FALSE),
        ('Stinging nettle','Herbal',FALSE),
        ('Dandelion','Herbal',FALSE),
        ('Cranberry','Herbal',FALSE),
        ('St John Word','Herbal',FALSE),
        ('Yerba Mate','Herbal',FALSE),
        ('Guava Mate','Herbal',FALSE),
        ('Gotu kola','Herbal',FALSE),
        ('Marshmallow root','Herbal',FALSE),
        ('Thyme','Herbal',FALSE),
        ('Calendula','Herbal',FALSE),
        ('','Herbal',FALSE),
        ('','Herbal',FALSE),
        ('','Herbal',FALSE),
        ('','Herbal',FALSE),
        ('','Herbal',FALSE),
        ('','Herbal',FALSE),;

INSERT INTO flavor (tea_idf, flavor)
    VALUES
        (1, 'Sweet'),
        (1, 'Floral');

INSERT INTO health (tea_idh, benefit)
    VALUES
        (1, 'Antioxidants'),
        (1, 'Weight Loss'),
        (1, 'Muscle Relax');