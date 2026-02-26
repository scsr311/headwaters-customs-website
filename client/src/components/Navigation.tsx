import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663161469845/GOLdLLbaEEdpdWGF.png" 
              alt="Headwaters Customs" 
              className="h-10 w-auto cursor-pointer hover:opacity-90 transition-opacity"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/about">
              <span className="text-foreground hover:text-accent transition-colors cursor-pointer font-medium">
                About
              </span>
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-accent transition-colors font-medium flex items-center gap-1">
                Services <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/services">
                    <span className="cursor-pointer">Services Offered</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/process">
                    <span className="cursor-pointer">Our Process</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-foreground hover:text-accent transition-colors font-medium flex items-center gap-1">
                AI Tools <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/dream-build">
                    <span className="cursor-pointer">Dream Build</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/quote">
                    <span className="cursor-pointer">Cost Calculator</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link href="/gallery">
              <span className="text-foreground hover:text-accent transition-colors cursor-pointer font-medium">
                Gallery
              </span>
            </Link>
            
            <Link href="/marketplace">
              <span className="text-foreground hover:text-accent transition-colors cursor-pointer font-medium">
                Marketplace
              </span>
            </Link>
            
            <Link href="/store">
              <span className="text-foreground hover:text-accent transition-colors cursor-pointer font-medium">
                Store
              </span>
            </Link>
            
            <Link href="/builds">
              <span className="text-foreground hover:text-accent transition-colors cursor-pointer font-medium">
                Follow Builds
              </span>
            </Link>
            
            <Link href="/contact">
              <span className="text-foreground hover:text-accent transition-colors cursor-pointer font-medium">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
