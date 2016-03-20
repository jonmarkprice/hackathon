<?php
	session_start();
	try {
		// Connect to databse
		$db = new PDO('sqlite:database.db');
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		// Retrieve login credentials
		$username = $_POST['username'];
		$password = $_POST['password'];

		// Connect to database
		$stmt = $db->prepare('select password from account where username = :username;');
		$stmt->bindParam(':username', $username);
		$stmt->execute();
		$result = $stmt->fetchAll();

		if (empty($result) || password != result[0]['password']) {
			echo 'unsuccessful';
		} else {
			echo 'unsuccessful';
		}
	} catch( PDOException $error) {
		echo 'unsuccessful';
	}

	$db = null;
?>