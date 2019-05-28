import React, {Component} from "react";

export default class Filter extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }
  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (
      <section id="filter">
        <div className="inside">

          <h4> Filter </h4>
          <select name="neighbourhood" className="filters neighbourhood" onChange={this.props.change}>
            <option hidden>Choose a city</option>
            <option value="all">all</option>
            <option value="north york">north york</option>
            <option value="etobicoke">etobicoke</option>
            <option value="scarborough">scarborough</option>
            <option value="brampton">brampton</option>
          </select>

          <select name="homeType" className="filters homeType" onChange={this.props.change}>
            <option hidden>What type of house</option>
            <option value="all">all types</option>
            <option value="detached">detached</option>
            <option value="semi detached">semi detached</option>
            <option value="condo">condo</option>
          </select>

          <select name="bedRooms" className="filters bedRooms" onChange={this.props.change}>
            <option hidden>how much rooms</option>
            <option value="0">0+</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4+">4+</option>
            <option value="5+">5+</option>
          </select>

          <div className="filters price">
            <span className="title">price</span>
            <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalstate.min_price}/>
            <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalstate.max_price}/>
          </div>

          <div className="filters floor-space">
            <span className="title">floor space</span>
            <input
              type="text" name="min_floor_space" className="min-floor-space" onChange={this.props.change} value={this.props.globalstate.min_floor_space}/>
            <input type="text" name="max_floor_space" className="max-floor-space" onChange={this.props.change} value={this.props.globalstate.max_floor_space}/>
          </div>
          <div className="filters extras">
            <span className="title">Extras</span>
            <label htmlFor="extras">
              <span>elavators</span>
              <input name="elavator" value="elavator" type="checkbox" onChange={this.props.change}/>
            </label>
            <label htmlFor="extras">
              <span>swimming pool</span>
              <input name="swimming_pool" value="swimming_pool" type="checkbox" onChange={this.props.change}/>
            </label>
            <label htmlFor="extras">
              <span>finshed basement</span>
              <input
                name="finished_basement" value="finished_basement" type="checkbox" onChange={this.props.change}/>
            </label>
            <label htmlFor="extras">
              <span>gym</span>
              <input name="gym" value="gym" type="checkbox" onChange={this.props.change}/>
            </label>
          </div>
        </div>
      </section>
    );
  }
}
