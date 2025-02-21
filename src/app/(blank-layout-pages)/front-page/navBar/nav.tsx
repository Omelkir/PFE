'use client'

import { useState } from 'react'
import Logo from '@/components/layout/shared/Logo'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { href: '/front-page/home-page', label: 'Home' },
    { href: '#section2', label: 'About' },
    { href: '/front-page/medecin', label: 'Médecins' },
    { href: '/front-page/laboratoire', label: 'Laboratoires' }
  ]

  return (
    <nav className='navbar'>
      <div className='container'>
        <Logo />

        {/* Menu Burger pour Mobile */}
        <button className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* Liens de navigation */}
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={pathname === href ? 'active' : ''}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Boutons d'authentification */}
        <div className='auth-buttons'>
          <Link href='/login' className='button-login'>
            Se connecter
          </Link>
          <Link href='/register' className='button-signup'>
            S'inscrire
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
