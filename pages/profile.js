<!DOCTYPE html>
<html>
<head>
    <title>User Profile</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <nav>
        <a href="index.html">Home</a>
        <a href="jobs.html">Jobs</a>
        <a href="tracker.html">Tracker</a>
        <a href="profile.html">Profile</a>
    </nav>

    <h1 class = "page_title_text">User Profile</h1>

    <div class="card" style="width: 100%">
        <label>Name:</label>
        <input type="text" id="name">

        <label>Email:</label>
        <input type="email" id="email">

        <button onclick="saveProfile()">Save</button>
    </div>

    <script src="script.js"></script>
</body>
</html>