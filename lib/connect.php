<?php
	try {
		$db = new PDO('sqlite:database.db');
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		# Test the connection
		$result = $db->query("SELECT * FROM book;");
		foreach($result as $row) {
			print_r($row);
		}
	}
	catch(PDOException $error) {
		echo $error->getMessage();
	}

	# close connection
	$db = null;
?>
