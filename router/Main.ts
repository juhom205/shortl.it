// Lnkdto.link - Copyright (C) 2021 Moritz Kaufmann
// Main Requests

// Import Express
import * as express from "express";
import {SessionHandler} from "../backend/SessionManager";
import {UrlHelper} from "../backend/DatabaseManager";

// Import Version
const {version} = require("../package.json");

// Get Router
const router = express.Router();


router.get("/", (req, res) => {
    res.render("container", {navbarWithForm: true, isLoggedIn: typeof SessionHandler.getStorage(req)["username"] !== 'undefined', view: "start"});
});

router.get("/stats", (req, res) => {
    res.render("container", {navbarWithForm: false, isLoggedIn: typeof SessionHandler.getStorage(req)["username"] !== 'undefined', view: "stats"});
});

router.get("/user/edituser", (req, res) => {
    res.render("container", {navbarWithForm: true, isLoggedIn: typeof SessionHandler.getStorage(req)["username"] !== 'undefined', view: "edituser"});
});

router.get("/user/usercontrol", (req, res) => {
    res.render("container", {navbarWithForm: true, isLoggedIn: typeof SessionHandler.getStorage(req)["username"] !== 'undefined', view: "usercontrol"});
});

router.get("/extension", (req, res) => {
    res.render("extension", {content: UrlHelper.getUrlsFromUser(SessionHandler.getStorage(req)["username"]), isLoggedIn: typeof SessionHandler.getStorage(req)["username"] !== 'undefined'});
});

module.exports = router;