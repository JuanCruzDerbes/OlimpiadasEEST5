const { Router } = require("express");
const router = Router();

router.get("/", function(req, res) {
    res.render("admin/login");
});
module.exports = router;