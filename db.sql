create table account
{
	name varchar(200),
	id varchar(200),
	email varchar(200),
	phone char(10),
	primary key (id)
};

create table class
{
	dept varchar(4),
	course_num varchar(4),
	#title varchar(200),
	primary key (dept, course_num)
};

create table book
{
	id integer primary key,
	class_dept varchar(4),
	class_course_num varchar(4),
	title varchar(200),
	edition integer,
	foreign key (class_dept, class_course_num) 
		references class(dept, course_num)
};

create table for_sale
{
	book_id varchar(200),
	seller varchar(200),
	price decimal,
	picture_file_name varchar(200),
	id integer primary key,
	foreign key (book_id) references book(id),
	foreign key(seller) references account(id)
};

create table picture
{
	picture varchar(200),
	for_sale_id integer

}

