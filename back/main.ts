import * as Koa from "koa"
import * as config from "./shared/config"
import { userRouter } from "./routes/user-routes"
import { query } from "./shared/database"
import fs = require("fs")

const body: any = require("koa-better-body")
const path: any = require("path")
const co: any = require("co")
const cors: any = require("koa-cors")
const app = new Koa()


co.wrap(function* () {
    let initialization = fs.readFileSync(`./initialize.pgsql`)
    yield query(initialization.toString())
    let result = yield query("SELECT NOW()")
    console.log(result.rows[0].now)
    // app.use(body({
    //     files: "files",
    //     uploadDir: path.join(__dirname, 'uploads'),
    //     keepExtensions: true
    // }))
    // app.use(function* () {
    //     console.log(this.request.files)
    // })
    app.use(cors())
    app.use(userRouter.routes())
    app.listen(config.port)
    console.log(`Home: ${config.home}`)
    console.log(`Listening on ${config.port}`)
})()
