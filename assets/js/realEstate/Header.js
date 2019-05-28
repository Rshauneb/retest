import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render (){
    return(
      <div>
        <header>
          <div className="logo">logo</div>
          <nav>
            <a href="#">Create ads</a>
            <a href="#">about us</a>
            <a href="#">log in</a>
            <a href="#" className="register-btn">register</a>
          </nav>
        </header>
      </div>
    )
  }
}
