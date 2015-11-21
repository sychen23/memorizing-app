<html>
<body>
<font size="6">
<?php
$text = $_POST["input"];
$sentences = explode(".", $text);

$fontcolor = "black";

$colors = explode(",", file_get_contents('colors.txt'));
 
foreach ($sentences as $sentence) 
{
	$random_color = rand (0,count($colors));
	$fontcolor = $colors[$random_color];

	$words = explode(' ', $sentence);
	foreach ($words as $word)
	{
		foreach ($colors as $color) 
		{
			
			if (strcasecmp($word, $color) == 0)
			{
				$fontcolor = $color;
			}
		}
	}

	echo "<font color=$fontcolor>";
    echo "$sentence<br>";
    echo "</font>";
}
 
?>
</font>
</body>
</html>