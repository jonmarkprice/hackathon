/* create schema trubooks; */

drop table if exists account;
drop table if exists course;
drop table if exists book;
drop table if exists for_sale;
drop table if exists picture;

create table account (
	name varchar(200),
	id varchar(200),
	email varchar(200),
	phone char(10),
	/* TODO
	hash char(),
	salt char(), */
	primary key (id)
);

create table course (
	dept varchar(4),
	num varchar(4),
	/* title varchar(200), */
	primary key (dept, num)
);

create table book (
	id integer primary key,
	course_dept varchar(4),
	course_num varchar(4),
	title varchar(200),
	edition integer,
	foreign key (course_dept, course_num) 
		references course(dept, num)
);

create table for_sale (
	id integer primary key,
	book_id varchar(200),
	seller varchar(200),
	price decimal,
	foreign key (book_id) references book(id),
	foreign key (seller) references account(id)
);

create table picture (
	url varchar(200),
	for_sale_id integer,
	foreign key (for_sale_id) references for_sale(id)
);

