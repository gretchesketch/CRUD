create table comments_tbl(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   user_name VARCHAR NOT NULL,
   user_comment VARCHAR NOT NULL,
   submission_date DATE,
);