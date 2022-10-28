CREATE DATABASE codegig;

CREATE TABLE gigs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    technologies VARCHAR(255),
    budget VARCHAR(255),
    description TEXT,
    contact_email VARCHAR(255),
    created_at DATE,
    updated_at DATE
); 

ALTER TABLE gigs
RENAME COLUMN created_at TO "createdAt";

ALTER TABLE gigs
RENAME COLUMN updated_at TO "updatedAt";