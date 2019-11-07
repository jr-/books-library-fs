CREATE TABLE public.authors (
	id int NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT authors_pk PRIMARY KEY (id)
);

CREATE TABLE public.publishers (
	id int NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT publishers_pk PRIMARY KEY (id)
);

CREATE TABLE public.books (
	title varchar(255) NOT NULL,
	id int NOT NULL,
	author_id int NOT NULL,
	publisher_id int NOT NULL,
	"year" int NOT NULL,
	isbn varchar(13) NOT NULL,
	"language" varchar(255) NULL,
	weight int NULL,
	dimension_length int NULL,
	dimension_heigth int NULL,
	dimension_width int NULL,
	CONSTRAINT books_pk PRIMARY KEY (id),
	CONSTRAINT books_fk FOREIGN KEY (author_id) REFERENCES public.authors(id),
	CONSTRAINT books_fk_1 FOREIGN KEY (publisher_id) REFERENCES public.publishers(id)
);

CREATE TABLE public.languages (
	id int NOT NULL,
	"name" varchar(255) NOT NULL,
	code varchar(5) NOT NULL,
	CONSTRAINT languages_pk PRIMARY KEY (id)
);

ALTER TABLE public.books RENAME COLUMN "language" TO language_id;
ALTER TABLE public.books ALTER COLUMN language_id TYPE int USING language_id::int;

ALTER TABLE public.books ADD CONSTRAINT books_fk_2 FOREIGN KEY (language_id) REFERENCES public.languages(id);

ALTER TABLE public.languages ADD CONSTRAINT languages_un UNIQUE (code);

CREATE SEQUENCE books_sequence
  start 1
  increment 1;

CREATE SEQUENCE authors_sequence
  start 1
  increment 1;

CREATE SEQUENCE languages_sequence
start 1
increment 1;

CREATE SEQUENCE publishers_sequence
  start 1
  increment 1;

insert into languages (id, name, code) values (nextval('languages_sequence'), 'Portuguese (Brazil)', 'pt-BR');

insert into authors (id, name) values (nextval('authors_sequence'), 'Terezinha Silva');

insert into publishers (id, name) values (nextval('publishers_sequence'), 'EME EDITORA');

insert into books (id, title, year, isbn, weight, dimension_length, dimension_heigth, dimension_width, author_id, language_id, publisher_id) values
(nextval('books_sequence'), 'Em Busca do Vale Encantado', 1999, '8573530774', 55, 30, 60, 40, 1, 1, 1);

insert into authors (id, name) values (nextval('authors_sequence'), 'JK Rowling');

insert into publishers (id, name) values (nextval('publishers_sequence'), 'ROCCO');

insert into books (id, title, year, isbn, weight, dimension_length, dimension_heigth, dimension_width, author_id, language_id, publisher_id) values
(nextval('books_sequence'), 'Harry Potter e a Pedra Filosofal', 2017, '8532530788', 60, 40, 70, 50, 2, 1, 2);