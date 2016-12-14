"use strict";
const Router = require("koa-router");
const database_1 = require("../shared/database");
const fs = require("fs");
const body = require("koa-better-body");
const send = require("koa-send");
exports.userRouter = new Router();
exports.userRouter
    .get("/get/now", function* () {
    try {
        this.body = yield database_1.query("SELECT NOW()");
    }
    catch (err) {
        console.log("um");
    }
})
    .post("/ping", body(), function* () {
    console.log(`from ping:`, this.request.body);
    this.body = {
        "recieved": this.request.fields
    };
})
    .post("/login", body(), function* () {
    let result = yield database_1.query(`
            SELECT COUNT(*) > 0 AS exists
            FROM app_user
            WHERE email=$1
            LIMIT 1
        `, [this.request.fields.email]);
    let exists = result.rows[0].exists;
    console.log(this.request.fields.email);
    if (!exists) {
        yield database_1.query(`
                INSERT INTO app_user (email)
                VALUES ($1)
            `, [this.request.fields.email]);
        console.log(`New email: ${this.request.fields.email}`);
    }
    else {
        console.log(`Returning user: ${this.request.fields.email}`);
    }
    console.log(`FROM /LOGIN`, this.request.fields);
    this.body = "whatever";
})
    .get("/event", function* () {
    //TODO return events
    let result = yield database_1.query(`
            SELECT id, name, description, ST_AsGeoJSON( bbox ) AS bounds
            FROM event
        `);
    console.log(result.rows);
    this.body = result.rows;
})
    .post("/event", body(), function* () {
    console.log(this.request.fields);
    let data = this.request.fields;
    let bounds = data.bounds;
    let polygonString = `LINESTRING(${bounds.minLon} ${bounds.minLat}, ${bounds.maxLon} ${bounds.minLat}, ${bounds.maxLon} ${bounds.maxLat}, ${bounds.minLon} ${bounds.maxLat}, ${bounds.minLon} ${bounds.minLat})`;
    let result = yield database_1.query(`
            INSERT INTO event (name, description, bbox)
            VALUES ($1, $2, ST_MakePolygon( ST_SetSRID( ST_GeomFromText($3), 4326 ) ))
        `, [data.name, data.description, polygonString]);
    this.body = `Event recieved`;
})
    .get("/marker/:eventId", function* () {
    let params = this.params;
    this.body = params.id;
})
    .post("/marker/:eventId", body(), function* () {
    console.log(this.request.fields);
    this.body = `Marker recieved ${null}`;
})
    .post("/marker/:markerId/update", function* () {
})
    .delete("/marker/markerId", function* () {
})
    .post("/upload", body(), function* (next) {
    console.log(this.request.fields);
    console.log(this.request.files);
    let file = fs.renameSync(this.request.files[0].path, `./uploads/${this.request.files[0].name}`);
    console.log(this.request.body);
    this.body = "hey";
    yield next;
})
    .get("/chain/:value", function* (next) {
    let params = this.params;
    this.body = params.value;
    if (params.value > 5) {
        yield next;
    }
}, function* () {
    this.body = `next middleware reached`;
})
    .get("/download", function* () {
    yield send(this, "./uploads/Arachis glabrata.jpg");
});
