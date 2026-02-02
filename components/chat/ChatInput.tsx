import { Button } from "../ui/button"
import { Send } from "lucide-react"

const ChatInput = () => {
  return (
    <div className="border-t p-3 flex gap-2">
      <input
        type="text"
        placeholder="Écrire un message..."
        className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none"
      />
      <Button size="sm">
        <Send size={16} />
      </Button>
    </div>
  )
}

export default ChatInput
