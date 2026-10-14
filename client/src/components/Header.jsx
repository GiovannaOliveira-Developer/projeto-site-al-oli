import './Header.css'

const links = [
  { href: '#inicio', texto: 'Página Inicial' },
  { href: '#trabalho', texto: 'Meu Trabalho' },
  { href: '#produtos', texto: 'Meus Produtos' },
  { href: '#contatos', texto: 'Contatos' },
]

function Header() {
  return (
    <header className="header">
      <a href="#inicio" className="header__logo">
        Al Oli
      </a>

      <nav className="header__menu">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.texto}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
