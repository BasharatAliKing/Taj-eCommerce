import React from 'react'

const nav = [
  { label: 'Home', href: '#top' },
  { label: 'Menus', href: '#menus' },
  { label: 'Rewards', href: '#rewards' },
  { label: 'Venues', href: '#venues' },
  { label: 'Catering', href: '#catering' },
  { label: 'Contact', href: '#footer' },
]

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 px-4 py-3 shadow">
          
          {/* Logo */}
          <a href="#top" className="flex items-center gap-2">
            <span className="inline-block rounded-lg bg-yellow-400 px-2 py-1 text-xs font-bold">my</span>
            <span className="font-display text-lg font-bold tracking-tight">Lahore</span>
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6">
            {nav.map(n => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium hover:text-pink-600"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* CTA button */}
          <a href="#order" className="btn bg-pink-600 text-white">
            Order Online
          </a>
        </div>
      </div>
    </header>
  )
}
