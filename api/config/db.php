<?php
function getConnection()
{
    global $conn;
    $conn =  mysqli_connect('localhost', 'root', '', 'track_machine_demo');
    if (!$conn) {
        die('Could not connect: ');
    }
    return $conn;
}
