<?php

// Pour faire comprendre au navigateur qu'il reçoit du contenu JSON et non HTML :
header('Content-Type: application/json');


$xhr = new XMLHttpRequest();

$xhr.open('GET','/server', TRUE);


echo json_encode($xhr);