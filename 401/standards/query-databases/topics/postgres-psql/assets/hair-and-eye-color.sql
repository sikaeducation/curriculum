DROP TABLE IF EXISTS hair;
DROP TABLE IF EXISTS eye;

CREATE TABLE hair(
  hairid    INTEGER PRIMARY KEY,
  haircolor TEXT,
  username TEXT UNIQUE
);

CREATE TABLE eye(
  eyeid INTEGER PRIMARY KEY,
  eyecolor TEXT,
  username TEXT UNIQUE
);


INSERT into hair(hairid, haircolor, username) values (1,'brown','Allison');
INSERT into hair(hairid, haircolor, username) values (2,'pink','Blonnie');
INSERT into hair(hairid, haircolor, username) values (3,'brown','Corrine');
INSERT into hair(hairid, haircolor, username) values (4,'blonde','Dean');
INSERT into hair(hairid, haircolor, username) values (5,'blonde','Edward');

INSERT into eye(eyeid, eyecolor, username) values (1,'green','Blonnie');
INSERT into eye(eyeid, eyecolor, username) values (2,'blue','Corrine');
INSERT into eye(eyeid, eyecolor, username) values (3,'brown','Allison');
INSERT into eye(eyeid, eyecolor, username) values (4,'brown','Dean');
INSERT into eye(eyeid, eyecolor, username) values (5,'brown','Ellis');
