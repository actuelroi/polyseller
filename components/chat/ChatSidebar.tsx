import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"

const chats = [
  {
    id: 1,
    name: "UNJong International",
    lastMessage: "Le MOQ est de 100 unités.",
    avatar: "https://github.com/maxleiter.png",
    online: true,
  },
  {
    id: 2,
    name: "Beijing Trade Co.",
    lastMessage: "Nous pouvons livrer sous 10 jours.",
    avatar: "https://github.com/shadcn.png",
    online: false,
  },
]

const ChatSidebar = () => {
  return (
    <div className="border-r bg-muted/30">
      <h2 className="p-4 font-semibold">Messages</h2>

      <div className="space-y-1">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-muted"
          >
            <div className="relative">
              <Avatar>
                <AvatarImage src={chat.avatar} />
                <AvatarFallback>{chat.name[0]}</AvatarFallback>
              </Avatar>
              {chat.online && (
                <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium">{chat.name}</p>
              <p className="text-xs text-muted-foreground truncate">
                {chat.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChatSidebar
