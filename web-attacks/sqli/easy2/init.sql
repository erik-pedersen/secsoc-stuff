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
('guest', '12345'),
('Bobby', 'bobbyhasagoodpassword'),
('Erik', 'help_im_stuck_in_the_database'),
('Chris', 'pwndbg'),
('admin', 'asupersecurepasswordwoopie');
