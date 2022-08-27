import React from 'react'
import { Button, Icon } from 'semantic-ui-react'


const Navbar = () => {
  return (
    <header className=' mt-3 d-flex justify-content-between'>
      <section className='d-flex align-items-center'>
      <Icon name='home' size='large' />
      <h3 className='mt-0 ms-2'>  Book-Me</h3>
      </section>
      <section>
      <nav className="navbar navbar-expand-lg navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Hotels</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
</nav>
      </section>
      <section>
      <Button content='Sign in' secondary />
      <Button content='Sign up' secondary />

      </section>
      
    </header>
  )
}

export default Navbar