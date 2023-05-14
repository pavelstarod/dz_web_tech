CREATE TABLE students (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name TEXT NOT NULL,
  age TEXT NOT NULL,
  address TEXT NOT NULL
);

INSERT INTO students (name, age, address) VALUES ('Павел', '18', 'ул. Лермонтова 33');
INSERT INTO students (name, age, address) VALUES ('Роман', '18', 'ул. Герасимова 28');
INSERT INTO students (name, age, address) VALUES ('Олеся', '19', 'ул. Парковая 5');
INSERT INTO students (name, age, address) VALUES ('Рита', '20', 'ул. Пушкина 104');

SELECT * FROM students;