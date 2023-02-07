const { Routes } = require("express");
const {  addConversation } = require("../controllers/conversation.controler")  
const router = Router();

router.post("/", addConversation);

module.exports = router;