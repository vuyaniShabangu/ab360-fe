import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

export function Header() {
    return <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-end border-b bg-background px-6 shadow-sm">
      <nav className="flex items-center gap-6">
        <Button variant="link" className="text-foreground">
          Client
        </Button>
        <Button variant="link" className="text-foreground">
          Project
        </Button>
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </nav>
    </header>
  }