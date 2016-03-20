/*to create an account*/
insert into account values (:name, :id, :email, :phone);

/*to update account*/
update account
set name=:name, email=:email, phone=:phone
where id=:id;

/*to delete account*/
delete from account
where id=:id;

/*to post a book to sell*/
insert into book values (:dept, :course_num, :title, :edition);
insert into for_sale values (:book_id, :seller, :price);

/*to update an abstract book's values*/
update book
set course_dept=:dept, course_num=:course_num, title=:title, edition=:edition
where id=:id;

/*to delete abstract book*/
delete from book
where id=:id;

/*to update price of a book for sale*/
update for_sale
set price=:price where id=:id;

/*to delete book for sale*/
delete from for_sale
where id=:id;

/*to add a picture to book selling*/
insert into picture values (:url, :for_sale_id);

/*to update picture*/
update picture
set url=:url, for_sale_id=:for_sale_id
where id=:id;

/*to delete picture*/
delete from picture
where id=:id;

/*to add a new course*/
insert into course values (:dept, :num);

/*to delete a course*/
delete from course
where dept=:dept and num=:num;

/*when want to buy book: check to see if book is being sold*/
select for_sale.seller, for_sale.price, book.title
from for_sale join book
where for_sale.book_id = book.id
and book.course_dept = :dept
and book.course_num = :course_num
or book.title = :title;

/*access all books for one particular seller*/
select *
from for_sale
where seller=:username;

/*when one book is clicked on*/
select * 
from for_sale
where id=:id;