const app = require("./app")
const PORT = process.env.NODE_PORT || 8080


app.listen(PORT, "0.0.0.0", () => {
    console.log(`Example app listening at port http://localhost:${PORT}`)
})
