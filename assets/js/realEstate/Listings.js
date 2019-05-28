import React, {Component} from 'react'

export default class Listings extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Joe'
    }
    this.looplistings = this
      .looplistings
      .bind(this)
  }

  looplistings() {
    var {listingsData} = this.props

    if(listingsData == undefined ||listingsData.length == 0){
      return "Sorry your filter did not match and listing"
    }

    return listingsData.map((listing, index) => {
      return (<div className='col-md-3' key={index}>
        <div className="listing">
          <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
            <span className="address">{listing.address}</span>
            <div className="details">
              <div className="col-md-3">
                <div className="user-img"></div>
              </div>
              <div className="col-md-9">
                <div className="user-details">
                  <span className="user-name">john doe</span>
                  <span className="post-date">6th/10/2018</span>
                </div>
                <div className="listing-details">
                  <div className="floor-space">
                    <i className="far fa-square"></i>
                    <span className="">1000 m²</span>
                  </div>
                  <div className="bedrooms">
                    <i className="fas fa-bed"></i>
                    <span className="">{listing.rooms} Bedroom(s)</span>
                  </div>
                </div>
                <div className='view-btn'>view listing</div>
              </div>
            </div>
          </div>
          <div className="bottom-info">
            <span className='price'>${listing.price}</span>
            <span className='location'><i className="fas fa-map-marker"></i>{listing.city}, {listing.province}</span>
          </div>
        </div>
      </div>)
    })
  }
  render() {
    return (<section id="listings">
      <section className="search-area">
        <input type="text" name="search" placeholder="search..."/>
      </section>

      <section className="sortBy-area">
        <div className="results">390 results found</div>
        <div className="sort-options">
          <select name="sortby" className="sortBy">
            <option value="price-asc">highest price</option>
            <option value="price-dsc">lowest price></option>
          </select>
          <div className="view">
            <i className="fas fa-th-list" aria-hidden='default'></i>
            <i className="fas fa-th" aria-hidden='true'></i>
          </div>
        </div>
      </section>

      <section className="listing-results">
        {this.looplistings()}
      </section>


      <section id="pagination">
        <ul className="pagination-nums">
          <li>prev</li>
          <li className='active'>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>next</li>
        </ul>
      </section>
    </section>
    )
  }
}
