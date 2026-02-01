'use client'

import { Search } from "lucide-react"
import { useState } from "react"
import { Input } from "../ui/input"

const Searchbar = () => {
    const [query, setQuery] = useState("")
  return (
    <div className=" w-2xl  max-w-4xl p-2">
      <div className="relative">
        <Search
          className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />

        <Input
          type="search"
          placeholder="Rechercher un article..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="pl-9 "
          aria-label="Search sellers"
        />
      </div>
    </div>
  )
}

export default Searchbar
