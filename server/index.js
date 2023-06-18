const express = require("express")
const cors = require('cors')
const { default: helmet } = require("helmet")
const path = require("path")
require('dotenv/config')
const app = express()

app.use(cors())
app.options('*', cors());
const allowCrossDomain = function (req, res, next) {    //
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
};
app.use(allowCrossDomain);
const NewsRoutes = require('./routes')
app.use('/api/v2', NewsRoutes)

const __dirname1 = path.resolve()
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname1, '../client/dist')))

	app.get('*', (request, response) => {
		response.sendFile(path.resolve(__dirname1, "../client", "dist", "index.html"))
	})
} else {
	app.get("/", (request, response) => {
		response.json({ message: "Server is Up" });
	});
}

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`)
})