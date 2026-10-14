import { useEffect, useState } from 'react'
import './Header.css'

const links = [
  { href: '#inicio', texto: 'Página Inicial' },
  { href: '#trabalho', texto: 'Meu Trabalho' },
  { href: '#produtos', texto: 'Meus Produtos' },
  { href: '#contatos', texto: 'Contatos' },
]

function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const [rolou, setRolou] = useState(false)

  useEffect(() => {
    function aoRolar() {
      setRolou(window.scrollY > 60)
    }

    aoRolar()
    window.addEventListener('scroll', aoRolar)
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuAberto ? 'hidden' : ''
  }, [menuAberto])

  const classes = ['header']
  if (rolou) classes.push('header--rolou')
  if (menuAberto) classes.push('header--menu-aberto')

  return (
    <header className={classes.join(' ')}>
      <a href="#inicio" className="header__logo" onClick={() => setMenuAberto(false)}>
        Al Oli
      </a>

      <nav id="menu-principal" className="header__menu">
        {links.map((link, indice) => (
          <a
            key={link.href}
            href={link.href}
            style={{ '--ordem': indice }}
            onClick={() => setMenuAberto(false)}
          >
            {link.texto}
          </a>
        ))}
      </nav>

      <button
        type="button"
        className="header__botao-menu"
        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={menuAberto}
        aria-controls="menu-principal"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  )
}

export default Header
