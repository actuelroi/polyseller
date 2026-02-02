import ChatSidebar from "./ChatSidebar"
import ChatConversation from "./ChatConversation"

const ChatLayout = () => {
  return (
    <div className="h-[90vh]   grid grid-cols-1 md:grid-cols-4 overflow-hidden">
      <ChatSidebar />
      <ChatConversation />
    </div>
  )
}

export default ChatLayout
