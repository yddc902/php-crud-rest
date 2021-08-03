<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script defer src="./main.js"></script>
  <title>Document</title>
</head>

<body>
  <h1>APP</h1>
  <div>
    <form id="group-form">
      <input type="text" name="GNAME" placeholder="Group Name" autofocus required>
      <button type="submit">Add</button>
      <button type="submit" style="display: none;">UPDATE</button>
    </form>
  </div>
  <table>
    <thead>
      <tr>
        <th>GID</th>
        <th>GNAME</th>
      </tr>
    </thead>
    <tbody id="groups-table">

    </tbody>
  </table>

</body>

</html>