import React from 'react';
import LinkWrapper from '../../utils/LinkWrapper';



const Header = () => {
  return (
    <nav>
      <div class="nav-wrapper #3f51b5 indigo">
        <LinkWrapper to='/' class="brand-logo" activeStyle=''>Casa do Código</LinkWrapper>
        <ul className="right">
          <li><LinkWrapper to='/autores'>Autores</LinkWrapper></li>
          <li><LinkWrapper to='/livros'>Livros</LinkWrapper></li>
          <li><LinkWrapper to='/sobre'>Sobre</LinkWrapper></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header;