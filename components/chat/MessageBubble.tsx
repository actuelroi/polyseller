type MessageBubbleProps = {
  message: {
    sender: string
    content: string
    time: string
  }
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isBuyer = message.sender === "buyer"

  return (
    <div className={`flex ${isBuyer ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
          isBuyer
            ? "bg-primary text-white"
            : "bg-muted"
        }`}
      >
        <p>{message.content}</p>
        <span className="block text-[10px] opacity-70 text-right">
          {message.time}
        </span>
      </div>
    </div>
  )
}

export default MessageBubble
