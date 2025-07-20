import { ChatLogEvent, type ChatLogInfoType } from "$lib/types/chatlogs";

class ChatLogObjectFactory {

    createChatLogObject(event: ChatLogEvent, info: ChatLogInfoType) {
        switch (event) {
            case ChatLogEvent.AchievementUnlocked:
                return {
                    type: ChatLogEvent.AchievementUnlocked,
                    achievement: info.achievement!
                };
            case ChatLogEvent.MinerHired:
                return {
                    type: ChatLogEvent.MinerHired,
                    miner: info.miner!
                };
            case ChatLogEvent.MinerExpired:
                return {
                    type: ChatLogEvent.MinerExpired,
                    miner: info.miner!
                };
        }
    }
}

export const chatLogObjectFactory = new ChatLogObjectFactory();