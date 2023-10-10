CREATE DATABASE tea_db;
\c tea_db

CREATE TABLE IF NOT EXISTS tea (
    tea_id serial PRIMARY KEY,
    tea_name VARCHAR (50) NOT NULL,
    tea_type VARCHAR (50) NOT NULL,
    -- temperature CHAR (4) NOT NULL,
    -- mood VARCHAR (50) NOT NULL,
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
        ('Yerba Mate','Herbal',TRUE),
        ('Guava Mate','Herbal',FALSE),
        ('Gotu kola','Herbal',FALSE),
        ('Marshmallow root','Herbal',FALSE),
        ('Thyme','Herbal',FALSE),
        ('Calendula','Herbal',FALSE),
        ('Kuding','Herbal',FALSE),
        ('Jiaogulan','Herbal',FALSE),
        ('Passion flower','Herbal',FALSE),
        ('Kava','Herbal',FALSE),
        ('Lapacho bark','Herbal',FALSE),
        ('Lemon balm','Herbal',FALSE),;
        ('Chun Mee','Green',TRUE),
        ('Chun Lu','Green',TRUE),
        ('Bi Luo Chun','Green',TRUE),
        ('Gunpowder','Green',TRUE),
        ('Maofeng','Green',TRUE),
        ('Yellow','Green',TRUE),
        ('Jasmine','Green',TRUE),
        ('Anji Bai Cha','Green',TRUE),
        ('Maojian','Green',TRUE),
        ('Taping Houkui','Green',TRUE),
        ('Jin Shan','Green',TRUE),
        ('Lingjing (Dragon well)','Green',TRUE),
        ('Sejak','Green',TRUE),
        ('Ujeon','Green',TRUE),
        ('Jungjak','Green',TRUE),
        ('Daejak','Green',TRUE),
        ('Sencha','Green',TRUE),
        ('Gyokuro','Green',TRUE),
        ('Kabusecha','Green',TRUE),
        ('Tencha','Green',TRUE),
        ('Matcha','Green',TRUE),
        ('Shincha','Green',TRUE),
        ('Hojicha','Green',TRUE),
        ('Genmaicha','Green',TRUE),
        ('Konacha','Green',TRUE),
        ('Kamairicha','Green',TRUE),
        ('Tamaryokucha','Green',TRUE),
        ('Assam', 'Black', TRUE),
        ('Earl Grey', 'Black', TRUE),
        ('Darjeeling', 'Black', TRUE),
        ('Rukeri', 'Black', TRUE),
        ('Pu-erh', 'Black', TRUE),
        ('Scottish Afternoon', 'Black', TRUE),
        ('Irish Breakfast', 'Black', TRUE),
        ('Milima', 'Black', TRUE),
        ('Ceylon', 'Black', TRUE),
        ('Chai', 'Black', TRUE),
        ('Panyang Congou', 'Black', TRUE),
        ('Keemun', 'Black', TRUE),
        ('Lapsang Souchong', 'Black', TRUE),
        ('Golden Tips', 'Black', TRUE),
        ('Temi Sikkim', 'Black', TRUE),
        ('Nimbu', 'Black', TRUE),
        ('Wakuocha', 'Black', TRUE),
        ('Silver Needle', 'White', TRUE),
        ('White Peony', 'White', TRUE),
        ('Shou Mei', 'White', TRUE),
        ('Gong Mei', 'White', TRUE),
        ('Darjeeling White', 'White', TRUE),
        ('Da Hong Bao', 'Oolong', TRUE),
        ('Shui Jin Gui', 'Oolong', TRUE),
        ('Tie Lou Han', 'Oolong', TRUE),
        ('Shui Xian', 'Oolong', TRUE),
        ('Bai Jiguan', 'Oolong', TRUE),
        ('TIeguanyin (Iron Godess)', 'Oolong', TRUE),
        ('Mi Lan Xiang Dan Con', 'Oolong', TRUE),
        ('Acient Tree Dan Con', 'Oolong', TRUE),
        ('Guan Yin', 'Oolong', TRUE),
        ('Dancong', 'Oolong', TRUE),
        ('Cassia', 'Oolong', TRUE),
        ('Da Yu Lin', 'Oolong', TRUE),
        ('Dong Ding', 'Oolong', TRUE),
        ('Dong Fang Meiren', 'Oolong', TRUE),
        ('Pouchong', 'Oolong', TRUE),
        ('Ruan Zhi', 'Oolong', TRUE),
        ('Jin Xuan', 'Oolong', TRUE),
        ('Li Shan', 'Oolong', TRUE),
        

INSERT INTO flavor (tea_idf, flavor)
    VALUES
        (1, 'Sweet'),
        (1, 'Floral'),
        (1, 'Earthy'),
        (1, 'Refresh'),
        (1, 'Peach'),
        (1, 'Fresh Summer Pine Forest'),
        (1, 'Bitter'),
        (1, 'Astringent'),
        (1, 'Apple'),
        (1, 'Honey like'),
        (1, 'Minty');
        (1, 'Vanilla');
        (1, 'Caramel');
        (1, 'Nutty');
        (1, 'Spicy');
        (1, 'Cinnamon');
        (1, 'Lemongrass');
        (1, 'Peppery');
        (1, 'Woody');
        (1, 'Mild');
        (1, 'Fruity');
        (1, 'Fennel');
        (1, 'Licorice');
        (1, 'Tart');
        (1, 'Chamomile');
        (1, 'Roasted');
        (1, 'Sour');
        (1, 'Creamy');
        (1, 'Buttery');
        (1, 'Grassy');
        (1, 'Tangy');
        (1, 'Vegetal');
        (1, 'Pum-like');
        (1, '');
        (1, '');
        (1, '');
        (1, '');
        (1, '');
        (1, '');
        (1, '');
        (1, '');
        (1, '');
        (1, '');

INSERT INTO health (tea_idh, benefit)
    VALUES
        (1, 'Anti-oxidants'),
        (1, 'Weight loss'),
        (1, 'Muscle relax'),
        (1, 'Anti-inflammation'),
        (1, 'Treat stomach pain'),
        (1, 'Camlness'),
        (1, 'Bad breath'),
        (1, 'Boosting immune system'),
        (1, 'Stress relief'),
        (1, 'Aiding digestion'),
        (1, 'Soothing stomach'),
        (1, 'Protect from aging'),
        (1, 'Reducing cholesterol '),
        (1, 'Reducing high blood pressure'),
        (1, 'Increase air flow of lungs'),
        (1, 'Treat colic in infants'),
        (1, 'Lower blood sugar'),
        (1, 'Anti cancer'),
        (1, 'Protect heart'),
        (1, 'Protect brain'),
        (1, 'Relieve pain'),
        (1, 'Reduce anxiety'),
        (1, 'Lower blood pressure'),
        (1, 'Anti-bacterials'),
        (1, 'Anti-diabetic'),
        (1, 'Anti-microbial'),
        (1, 'Radioprotective'),
        (1, 'Reduce Alzheimer disease'),
        (1, 'Treat cough'),
        (1, 'Treat cold, common flu'),
        (1, 'Aid sleeping problems'),
        (1, 'Reduce infecton'),
        (1, 'Reduce depression'),
        (1, 'Reduce heart disease'),
        (1, 'Reduce lupus'),
        (1, 'Reduce obesity'),
        (1, 'Reduce dementia'),
        (1, 'Treat insomnia'),
        (1, 'Treat influenza'),
        (1, 'Treat bronchitis'),
        (1, 'Reducing skin irritation'),
        (1, 'Lift the mood'),
        (1, 'Fight allergies'),
        (1, 'Cooling affect'),
        (1, 'Sedative affect'),
        (1, 'Relieve menstrual cramps'),
        (1, 'Reduce the risk of psychotic disorders'),
        (1, 'Treat parasite infection'),
        (1, 'Treat dry cough'),
        (1, 'Treat garling'),
        (1, 'Protect from UVB rays'),
        (1, ''),
        (1, ''),
        (1, ''),
        (1, ''),
        (1, ''),
        (1, ''),
        (1, ''),
        (1, ''),
        (1, ''),
        (1, ''),
        (1, ''),
        (1, ''),
        (1, ''),
        (1, ''),
        (1, '');