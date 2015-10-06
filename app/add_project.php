<?php
	
	$name = $_POST['pro-name'];
	$adr = $_POST['url'];
	$about = $_POST['about'];
	$data = array();


		
	if ($name === '' || $adr === '' || $about === '' ) {
		$data['status']='error';
		$data['text'] ='Заполните все поля!';
	}else{
		$data['status']='OK';
		$data['text'] ='Все поля заполнены!';
	}


	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

?>