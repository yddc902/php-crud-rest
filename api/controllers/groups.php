<?php require("../config/db.php"); ?>
<?php

// create a model for the Groups table
// get all the groups
function getAll()
{
  $con = getConnection();
  // prepare the query
  $sql = "SELECT * FROM tkgrp";
  // execute the query
  $result = mysqli_query($con, $sql);
  // return the result
  return $result;
}

function getOne($id)
{
  $con = getConnection();
  // prepare the query
  $sql = "SELECT * FROM tkgrp WHERE GID = '$id'";
  // execute the query
  $result = mysqli_query($con, $sql);
  // return the result
  return $result;
}

function create()
{
  $data = json_decode(file_get_contents('php://input'), true);

  $sql = "INSERT INTO tkgrp (GNAME) VALUES ('" . $data['GNAME'] . "')";
  $con = getConnection();
  $result = mysqli_query($con, $sql);
  if ($result) {
    $msg = array("message" => "Group created successfully");
    echo json_encode($msg);
  } else {
    $msg = array("message" => "Error creating group");
    echo json_encode($msg);
  }
}
function update($id)
{
  $data = json_decode(file_get_contents('php://input'), true);

  $sql = "UPDATE tkgrp SET GNAME = '" . $data['GNAME'] . "' WHERE GID = " . $id;
  $con = getConnection();
  $result = mysqli_query($con, $sql);
  if ($result) {
    $msg = array("message" => "Group updated successfully");
    echo json_encode($msg);
  } else {
    $msg = array("message" => "Error updating group");
    echo json_encode($msg);
  }
}
function delete($id)
{
  $con = getConnection();
  $sql = "DELETE FROM tkgrp WHERE GID = " . $id;
  $result = mysqli_query($con, $sql);
  if ($result) {
    $msg = array("message" => "Group deleted successfully");
    echo json_encode($msg);
  } else {
    $msg = array("message" => "Error deleting group");
    echo json_encode($msg);
  }
}


?>