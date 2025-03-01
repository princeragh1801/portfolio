'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from './mode-toggle'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      let current = ''

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && element.getBoundingClientRect().top <= 100) {
          current = section
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="px-4 sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold gradient-text">Prince Raghuwanshi</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="hidden md:flex items-center space-x-4 text-sm font-medium">
            <NavLink href="#about" active={activeSection === 'about'}>About</NavLink>
            <NavLink href="#skills" active={activeSection === 'skills'}>Skills</NavLink>
            <NavLink href="#projects" active={activeSection === 'projects'}>Projects</NavLink>
            <NavLink href="#contact" active={activeSection === 'contact'}>Contact</NavLink>
          </nav>
          <ModeToggle />
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="container md:hidden">
          <nav className="flex flex-col space-y-4 pb-4">
            <NavLink href="#about" active={activeSection === 'about'}>About</NavLink>
            <NavLink href="#skills" active={activeSection === 'skills'}>Skills</NavLink>
            <NavLink href="#projects" active={activeSection === 'projects'}>Projects</NavLink>
            <NavLink href="#contact" active={activeSection === 'contact'}>Contact</NavLink>
          </nav>
        </div>
      )}
    </header>
  )
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link
      href={href}
      className={`transition-colors hover:text-primary ${
        active ? 'text-primary font-semibold' : 'text-muted-foreground'
      }`}
    >
      {children}
    </Link>
  )
}

