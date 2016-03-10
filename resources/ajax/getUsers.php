<?php
$username = "root";
$password = "Slave-1-Fett";
$hostname = "jeddai.com";

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password)
 or die("Unable to connect to MySQL");
echo "Connected to MySQL<br>";

/*//select a database to work with
$selected = mysql_select_db("users",$dbhandle)
  or die("Could not select users");

//execute the SQL query and return records
$result = mysql_query("SELECT * FROM users");

echo $result;
//close the connection*/
mysql_close($dbhandle);

//echo "hello";
/*$dbhost = "104.236.16.228";
$dbuser = "root";
$dbpass = "Slave-1-Fett";
$dbname = "tech";

//Connect to MySQL Server
mysql_connect($dbhost, $dbuser, $dbpass);

//Select Database
mysql_select_db($dbname) or die(mysql_error());


//build query
$query = "SELECT * FROM users";

//Execute query
$qry_result = mysql_query($query) or die(mysql_error());

echo $qry_result;*/
?>
