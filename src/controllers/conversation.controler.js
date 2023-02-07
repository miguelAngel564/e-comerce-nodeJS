const participants = require("../models/participants");
const ParticipantService = require("../services/participant.service")
const addConversation = async (req, res) => {
    try{
        const { title, createdBy } = req.body;
        if(!title || !createdBy || !participants) {
            return res.status(400).json({message: "Missing required fields"})
        }
        const conversation = await conversation.add(title, createdBy);

        if(conversation) {
            const {id} = conversation;
            await ParticipantService.add(id, createdBy);
            await ParticipantService.add(id, participant)
            res.status(201).json({message: 'conversation created'})
        }
  
    } catch (error) {
        res.status(400).json({message: ''})
    }
};

module.exports = {
    addConversation,
}