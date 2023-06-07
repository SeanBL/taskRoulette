DROP DATABASE IF EXISTS task_roulette_db;
CREATE DATABASE task_roulette_db;

use task_roulette_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
);

insert into users (id, name, email) values
(1, "Vlad", "vlad@test.com"),
(2, "Eveeiii", "eve@test.com");

select id, name, email from users;
-- task: name, urgency, date
--
--
--
