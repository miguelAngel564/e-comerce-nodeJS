const { participants } = require('../modules');

class ParticipantService {
    static async add(conversationId, userid) {
        try {
            const reslt = participants.create({
                conversation_Id: conversationId,
                user_id: userid,
            })
            return result;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = ParticipantService;