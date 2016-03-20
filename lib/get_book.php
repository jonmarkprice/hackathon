<?php
	$input = file_get_contents("php://input");
	try {
		$db = new PDO('sqlite:new.db');
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		#echo "hello world";
		#echo $_POST['data'];

		#echo $input;
		
		#$obj = json_decode($_POST['data']);
		$obj = json_decode($input, true);
		# echo $obj['dept'] . " " . $obj['title'] . " " . $obj['course_num'];

		#echo $obj;
		#print_r($obj);
		  # add new item to database
		  $statement = $db->prepare('
			select for_sale.seller, for_sale.price, book.title
			from for_sale join book
			where (for_sale.book_id = book.id)
			and book.course_dept = :dept
			and book.course_num = :course_num;');
			#or book.title = :title;
		  $statement->bindParam(':course_num', $obj['course_num']);
		  #$statement->bindParam(':title', $obj['title']);
		  $statement->bindParam(':dept', $obj['dept']);
		  
		  #echo $statement;
		  $result = $statement->execute();

		# Test the connection
		print_r($result);
		#foreach($result as $row) {
		#	print_r($row);
		#} 
		#echo "hello world";
	}
	catch(PDOException $error) {
		echo $error->getMessage();
	}

	# close connection
	$db = null;
?>
