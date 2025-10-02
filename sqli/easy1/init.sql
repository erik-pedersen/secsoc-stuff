CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE secrets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  flag VARCHAR(255),
  msg VARCHAR(255)
);

INSERT INTO users (username, password) VALUES
('admin', 'supersecure'),
('guest', '12345');
