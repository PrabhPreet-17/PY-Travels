export function loginView() {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Login</title>
    <link rel="stylesheet" href="/assets/style.css">
</head>
<body>

<div class="login-container">
    <h2>Login</h2>

    <!-- Flash Message -->
    <p class="flash"></p>

    <form action="/login" method="POST">
        <input type="text" name="username" placeholder="Username" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
    </form>
</div>

</body>
</html> `;
}