CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE my_secrets (
  id INT AUTO_INCREMENT PRIMARY KEY,
  theflag VARCHAR(255),
  msg VARCHAR(255)
);

INSERT INTO users (username, password) VALUES
('admin', 'supersecure'),
('guest', '12345');

INSERT INTO my_secrets (theflag, msg) VALUES
('SCONES{y0U_f0unD_mY_F1l3ZZZ}', 'How did you get here??');
