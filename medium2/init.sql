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
('admin', 'SCONES{h0w_d1d_U_le4rn_my_PaSsWoRd???}');
