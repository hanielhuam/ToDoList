<?php
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        $myfile = fopen("tasks.json", "r") or die("Unable to open file!");
        echo fread($myfile,filesize("tasks.json"));
        fclose($myfile);
    }
    elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
        $myfile = fopen("tasks.json", "w") or die("Unable to open file!");
        echo json_encode(fread($myfile,filesize("tasks.json")));
        fclose($myfile);
    }
?>