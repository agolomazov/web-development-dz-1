<?php
	
	$name = $_POST['pro-name'];
	$adr = $_POST['url'];
	$about = $_POST['about'];
	$data = array();


		
	if ($name === '' || $adr === '' || $about === '' ) {
		$data['status']='error';
		$data['text'] ='Ошибка! Невозможно добавить проект.';
	}else{
		$data['status']='OK';
		$data['text'] ='Ура! Проект успешно добавлен.';
	}


	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

?>