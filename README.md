# ChinaCityList
A jQuery plugin for attach a city list div to an html container element(e.g. div).
jQuery plugin `mCustomScrollbar` is needed.

## How to use it?
Add the following demo code. Then you click the div#demo, you will get the city list. Click the cityname, and the div#demo will show the cityname.
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<!-- Third-party CSS -->
	<link rel="stylesheet" href="scrollbar/jquery.mCustomScrollbar.min.css">
</head>
<body>
	<div id="demo" style="height: 20px; width: 20px;"></div>
	<script src="//libs.baidu.com/jquery/1.9.1/jquery.min.js"></script>
	<!-- Thrid-party jQuery plugins -->
	<script src="scrollbar/jquery.mousewheel.min.js"></script>
	<script src="scrollbar/jquery.mCustomScrollbar.min.js"></script>
  <script src="jQueryXYJ/attachCityList.js"></script>
  <!-- Custom JS -->
  <script>
    $("#demo").attachCityList();
  </script>
</body>
</html>
```
