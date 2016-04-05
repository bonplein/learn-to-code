# intro bootstrap v4

* html Struktur
* style.css Verlinkung
* setup des bootstrap-frameworks

## index.html
```index.html
<html>
	<head>
		<title>bootstrap setup</title>
		<!-- boostrap -->
		<link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css" crossorigin="anonymous">
		<!-- my style :) -->
		<link rel="stylesheet" href="style.css">

	</head>
	<body>
		<div class="container">
			<div class="row">
			  <div class="col-md-1">.col-md-1</div>
			  <div class="col-md-1">.col-md-1</div>
			  <div class="col-md-1">.col-md-1</div>
			  <div class="col-md-1">.col-md-1</div>
			  <div class="col-md-1">.col-md-1</div>
			  <div class="col-md-1">.col-md-1</div>
			  <div class="col-md-1">.col-md-1</div>
			  <div class="col-md-1">.col-md-1</div>
			  <div class="col-md-1">.col-md-1</div>
			  <div class="col-md-1">.col-md-1</div>
			  <div class="col-md-1">.col-md-1</div>
			  <div class="col-md-1">.col-md-1</div>
			</div>

			<div class="row">
			  <div class="col-md-12">
			    <ul class="list-unstyled">
			    	<li><a href="#">Link Tanja</a></li>
						<li><a href="#">Link Sophie</a></li>
						<li><a href="#">Link Raffi</a></li>
			    </ul>
			  </div>
			</div>

			<div class="row">
			  <div class="col-sm-4">
			    <h1>col-sm-4</h1>
			  </div>
				<div class="col-sm-4">
					<h1>col-sm-4</h1>
				</div>
				<div class="col-sm-4">
					<h1>col-sm-4</h1>
				</div>
			</div>

			<div class="row">
			  <div class="col-sm-4 col-sm-offset-8 p-a-3">
			    <button type="button" class="btn btn-primary-outline">Jetzt Spenden!</button>
					<button class="btn btn-secondary btn-lg">large button</button>
			  </div>
			</div>

			<div class="alert alert-success" role="alert">
			  <strong>Well done!</strong> You successfully read this important alert message.
			</div>

			<div class="row">
			  <div class="col-lg-12">
					<form id="form_id" action="index.html" method="post">
						<div class="input-group">
							<span class="input-group-addon" id="basic-addon1">@</span>
							<input type="email" class="form-control" placeholder="email" aria-describedby="basic-addon1">
						</div>
						<button class="btn btn-default m-t-3">send</button>
					</form>

			  </div>
			</div>

		</div>
	</body>
</html>
```

## css
```style.css
body {
	background-color: blue;
}
.col-md-1 {
	background-color: red;
	border: 1px solid black;
}
```
