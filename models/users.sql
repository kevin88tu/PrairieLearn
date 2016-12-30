CREATE TABLE IF NOT EXISTS users (
    id BIGSERIAL PRIMARY KEY,
    uid text UNIQUE,
    name text
);

ALTER TABLE users ALTER COLUMN id SET DATA TYPE BIGINT;
ALTER TABLE users ALTER COLUMN uid SET DATA TYPE TEXT;
ALTER TABLE users ALTER COLUMN name SET DATA TYPE TEXT;