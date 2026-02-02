import MessageBubble from "./MessageBubble"
import ChatInput from "./ChatInput"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const messages = [
    {
        id: 1,
        sender: "seller",
        content: "Bonjour, comment puis-je vous aider ?",
        time: "10:01",
    },
    {
        id: 2,
        sender: "buyer",
        content: "Quel est le MOQ pour ce produit ?",
        time: "10:02",
    },
    {
        id: 3,
        sender: "seller",
        content: "Le MOQ est de 100 unités.",
        time: "10:03",
    },
]

const chats = [
    {
        id: 1,
        name: "UNJong International",
        lastMessage: "Le MOQ est de 100 unités.",
        avatar: "https://github.com/maxleiter.png",
        online: true,
    },

]


const ChatConversation = () => {
    return (
        <div className="col-span-3 flex flex-col">

            {/* Header */}


            <div className="flex items-center justify-end border-b">

                <div className="flex items-center gap-2 flex-row">
                    <div className=" p-4 font-medium">
                        UNJong International
                    </div>
                    <div className=" p-4 font-medium relative">
                        <Avatar>
                            <AvatarImage src={"https://github.com/maxleiter.png"} />
                            <AvatarFallback>SP</AvatarFallback>
                        </Avatar>
                        <span className="absolute  bottom-2 right-1/4 h-3 w-3 bg-green-500 rounded-full border-2 border-white" />
                    </div>
                </div>


            </div>


            {/* Messages */}
            <div className="flex-1 p-4 space-y-3 overflow-y-auto bg-background">
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}
            </div>

            {/* Input */}
            <ChatInput />
        </div>
    )
}

export default ChatConversation
