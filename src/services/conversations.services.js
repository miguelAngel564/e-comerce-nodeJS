const { participants } = require("../models");
const conversations = require("../models/conversations");

class conversationService {
    static async add(title, createdBy) {
        try {
            const result = await conversations.create({title, created_by: createdBy,
                title, 
                created_by: createdBy,
            });
            return 
        } catch (error){
            throw error
        }

    }
}

module.exports = conversationService