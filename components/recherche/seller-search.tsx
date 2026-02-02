'use client'

import { Search } from "lucide-react"
import { useState } from "react"
import { Input } from "../ui/input"
import { useExtend } from "@/hooks/useExtend"

const SellerSearch = () => {
    const [query, setQuery] = useState("")
   
  return (
    <div className={" p-2"}>
      <div className="relative">
        <Search
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />

        <Input
          type="search"
          placeholder="Rechercher un vendeur..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9"
          aria-label="Search sellers"
        />
      </div>
    </div>
  )
}

export default SellerSearch
