const express = require("express");

const { classList, classBook } = require("../controllers/classControllers");
const router = express.Router();

router.param("classId", async (req, res, next, classId) => {
  const foundClass = await fetchGym(classId, next);
  if (foundClass) {
    req.class = foundClass;
    next();
  } else {
    next({
      status: 404,
      message: "Class Not Found",
    });
  }
});

router.get("/", classList);

router.put("/:classId/book", classBook);

module.exports = router;