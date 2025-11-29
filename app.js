const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Welcome</title>
                <style>
                        body {
                                font-family: Arial, sans-serif;
                                text-align: center;
                                background-color: #f0f0f0;
                                margin: 0;
                                padding: 50px;
                        }
                        .container {
                                background-color: white;
                                padding: 40px;
                                border-radius: 10px;
                                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                                max-width: 600px;
                                margin: 0 auto;
                        }
                        h1 {
                                color: #333;
                                margin-bottom: 20px;
                        }
                        p {
                                color: #666;
                                font-size: 18px;
                        }
                </style>
        </head>
        <body>
                <div class="container">
                        <h1>Welcome!</h1>
                        <p>Thank you for visiting our website.</p>
                        <p>We're glad to have you here.</p>
                </div>
        </body>
        </html>
    `);
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});