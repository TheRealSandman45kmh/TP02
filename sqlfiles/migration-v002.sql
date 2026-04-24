USE ynov_ci;

CREATE TABLE IF NOT EXISTS utilisateur(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    group_name VARCHAR(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO utilisateur (username, email, group_name) VALUES 
('charles_admin', 'charles@ynov.com', 'admin'),
('alice_user', 'alice@gmail.com', 'user'),
('bob_dev', 'bob@dev.com', 'user'),
('eve_tester', 'eve@test.com', 'user');