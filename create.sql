CREATE DATABASE tea_db;
\c tea_db

CREATE TABLE IF NOT EXISTS accounts (
    user_id serial PRIMARY KEY,
    username VARCHAR ( 50 ) UNIQUE NOT NULL,
    password VARCHAR ( 50 ) NOT NULL,
    email VARCHAR ( 255 ) UNIQUE NOT NULL,
    created_on TIMESTAMP NOT NULL DEFAULT NOW(),
    last_login TIMESTAMP 
);

INSERT INTO accounts (username, password, email)
    VALUES
        ('James', '12345', 'james@example.com'),
        ('Amy', '12345', 'amy@example.com'),
        ('Link', '12345', 'link@example.com');

