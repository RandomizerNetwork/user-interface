const { createServer } = require("https");
const { parse } = require("url");
const next = require("next");
const fs = require("fs");
const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
// const cors = require("cors");
// const NextCors = require('nextjs-cors');

// const handler = require("./utils/nextCors")

const httpsOptions = {
    key: fs.readFileSync("./.cert/new/server.key"),
    cert: fs.readFileSync("./.cert/new/server.pem")
};

const corsOptions = {
    // origin: ['https://cloudflare-eth.com/', 'https://assets.onfido.com/flags/', 'https://*.infura.io', 'https://api.etherscan.io', 'https://localhost', 'https://*.google.*', 'https://*.hotjar.com', 'https://*.facebook.com', 'https://*.gemini.com', '.www.gemini.com/', '.gemini.com/'], // This is where you put the URL of your frontend
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.prepare().then(() => {
    // server.use(cors(corsOptions));
    createServer(httpsOptions, (req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
    }).listen(port, (err) => {
        if (err) throw err;
        console.log("ready - started server on url: https://localhost:" + port);
    });
});