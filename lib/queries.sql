/*to create an account*/
insert into account values (:name, :id, :email, :phone);

/*to update account*/
update account
set name=:name, email=:email, phone=:phone
where id=:id;

/*to post a book to sell*/
insert into book values (:dept, :course_num, :title, :edition);

/*to update a book for sale's values*/

/*to add a picture to book selling*/
insert into picture values (:picture, :for_sale_id);

/*to add a new course*/
insert into course values (:dept, :num);

/*when want to buy book: check to see if book is being sold*/
select for_sale.seller, for_sale.price, book.title
from for_sale join book
where for_sale.book_id = book.id
and book.course_dept = :dept
and book.course_num = :course_num
or book.title = :title;

