<?php

	try {
		// Connect the database
		$db = new PDO('sqlite:database.db');
		$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

		// Retrieve user data from POST request
		$first_name = $_POST['first_name'];
		$last_name = $_POST['last_name'];
		$username = $_POST['username'];
		$email = $_POST['email'];
		$password = $_POST['password'];

		// Query the database
		$sql = $db->prepare('$INSERT INTO account (first_name, last_name, username, email, password) VALUES (:first_name, :last_name, :username, :email, :password);');;

		$sql->bindParam(':first_name', $first_name);
		$sql->bindParam(':last_name', $last_name);
		$sql->bindParam(':username', $username);
		$sql->bindParam(':email', $email);
		$sql->bindParam(':password', $password);
		$sql->execute();

		echo 'successful';
	} catch( PDOException $error) {
		echo 'unsuccessful';
	}

	$db = null;
?>