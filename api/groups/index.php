<?php include("../controllers/groups.php") ?>
<?php
header('Content-type: application/json');
switch ($_SERVER['REQUEST_METHOD']) {
  case 'GET':
    $groups = array();
    if (isset($_GET['id'])) {
      $res = getOne($_GET['id']);
      while ($row = mysqli_fetch_assoc($res)) {
        $groups[] = $row;
      }
      echo json_encode($groups, JSON_PRETTY_PRINT);
    } else {
      $res = getAll();
      while ($row = mysqli_fetch_assoc($res)) {
        $groups[] = $row;
      }
      echo json_encode($groups, JSON_PRETTY_PRINT);
    }
    break;

  case 'POST':
    create();
    break;
  case 'PUT':
    // echo"PUT";
    update($_REQUEST['id']);
    break;
  case 'DELETE':
    // echo"DELETE";
    delete($_REQUEST['id']);
    break;
  default:
    echo "Method not allowed";
}
?>