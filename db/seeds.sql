create table comments_tbl(
   id INT NOT NULL AUTO,
   user_name VARCHAR NOT NULL,
   user_comment VARCHAR NOT NULL,
   submission_date DATE,
   PRIMARY KEY (id)
);