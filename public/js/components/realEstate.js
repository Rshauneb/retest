webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  address: '20-34 Grand Ave',
  city: 'north york',
  province: 'ON',
  rooms: 3,
  price: 820000,
  floorSpace: 3862,
  extras: ['elevator', 'pool'],
  homeType: 'detached',
  image: 'https://i.postimg.cc/sgwZt6KW/home-purp.jpg'
}, {
  address: '15 winchester st',
  city: 'etobicoke',
  province: 'ON',
  rooms: 2,
  price: 220000,
  floorSpace: 1506,
  extras: ['elevator', 'gym'],
  homeType: 'condo',
  image: 'https://i.postimg.cc/QMzKMF2x/home1.jpg'
}, {
  address: '35 gilmore crst',
  city: 'scarborough',
  province: 'ON',
  rooms: 3,
  price: 590000,
  floorSpace: 2008,
  extras: ['gym'],
  homeType: 'semi detached',
  image: 'https://i.postimg.cc/fby0Zcgr/LHouse.jpg'
}, {
  address: '1008 nickby dr',
  city: 'brampton',
  province: 'ON',
  rooms: 4,
  price: 412300,
  floorSpace: 1398,
  extras: ['elevator', 'gym', 'pool', 'finished basement'],
  homeType: 'semi detached',
  image: 'https://i.postimg.cc/28NvvBV1/home4.jpg'
}, {
  address: '1 rachel rd',
  city: 'brampton',
  province: 'ON',
  rooms: 5,
  price: 850312,
  floorSpace: 4018,
  extras: ['gym', 'finished basement'],
  homeType: 'detached',
  image: 'https://i.postimg.cc/XqbJZdQ3/home5-min.jpg'
}, {
  address: '1738 mishy  crst',
  city: 'scarborough',
  province: 'ON',
  rooms: 4,
  price: 568300,
  floorSpace: 2508,
  extras: ['pool'],
  homeType: 'detached',
  image: 'https://i.postimg.cc/GhPDjhyq/home6.jpg'
}, {
  address: '1 suxes st ',
  city: 'etobicoke',
  province: 'ON',
  rooms: 2,
  price: 375665,
  floorSpace: 1710,
  extras: ['elevator', 'gym', 'pool'],
  homeType: 'condo',
  image: 'https://i.postimg.cc/sfh7vJDF/home7.jpg'
}, {
  address: '14 lemonus crst ',
  city: 'toronto',
  province: 'ON',
  rooms: 7,
  price: 4561274,
  floorSpace: 5513,
  extras: ['elevator', 'gym', 'pool'],
  homeType: 'condo',
  image: 'https://i.postimg.cc/sgwZt6KW/home-purp.jpg'
}];

exports.default = listingsData;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(99);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(100);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Joe',
      listingsData: _listingsData2.default,
      city: "all",
      homeType: "all",
      rooms: "0",
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 50000,
      finished_basement: false,
      gym: false,
      swimming_pool: false,
      elavator: false,
      filteredData: _listingsData2.default
    };
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
      // console.log(event.target.value);  logs city only
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.floorSpace >= _this3.state.min_floor_space && item.floorSpace <= _this3.state.max_floor_space && item.rooms >= _this3.state.bedRooms;
      });

      if (this.state.city != "all") {
        newData = newData.filter(function (item) {
          return item.city == _this3.state.city;
        });
      }
      if (this.state.homeType != "all") {
        newData = newData.filter(function (item) {
          return item.homeType == _this3.state.homeType;
        });
      }

      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalstate: this.state }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: "Joe"
    };
    return _this;
  }

  _createClass(Filter, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { id: "filter" },
        _react2.default.createElement(
          "div",
          { className: "inside" },
          _react2.default.createElement(
            "h4",
            null,
            " Filter "
          ),
          _react2.default.createElement(
            "select",
            { name: "neighbourhood", className: "filters neighbourhood", onChange: this.props.change },
            _react2.default.createElement(
              "option",
              { hidden: true },
              "Choose a city"
            ),
            _react2.default.createElement(
              "option",
              { value: "all" },
              "all"
            ),
            _react2.default.createElement(
              "option",
              { value: "north york" },
              "north york"
            ),
            _react2.default.createElement(
              "option",
              { value: "etobicoke" },
              "etobicoke"
            ),
            _react2.default.createElement(
              "option",
              { value: "scarborough" },
              "scarborough"
            ),
            _react2.default.createElement(
              "option",
              { value: "brampton" },
              "brampton"
            )
          ),
          _react2.default.createElement(
            "select",
            { name: "homeType", className: "filters homeType", onChange: this.props.change },
            _react2.default.createElement(
              "option",
              { hidden: true },
              "What type of house"
            ),
            _react2.default.createElement(
              "option",
              { value: "all" },
              "all types"
            ),
            _react2.default.createElement(
              "option",
              { value: "detached" },
              "detached"
            ),
            _react2.default.createElement(
              "option",
              { value: "semi detached" },
              "semi detached"
            ),
            _react2.default.createElement(
              "option",
              { value: "condo" },
              "condo"
            )
          ),
          _react2.default.createElement(
            "select",
            { name: "bedRooms", className: "filters bedRooms", onChange: this.props.change },
            _react2.default.createElement(
              "option",
              { hidden: true },
              "how much rooms"
            ),
            _react2.default.createElement(
              "option",
              { value: "0" },
              "0+"
            ),
            _react2.default.createElement(
              "option",
              { value: "1" },
              "1+"
            ),
            _react2.default.createElement(
              "option",
              { value: "2" },
              "2+"
            ),
            _react2.default.createElement(
              "option",
              { value: "3" },
              "3+"
            ),
            _react2.default.createElement(
              "option",
              { value: "4+" },
              "4+"
            ),
            _react2.default.createElement(
              "option",
              { value: "5+" },
              "5+"
            )
          ),
          _react2.default.createElement(
            "div",
            { className: "filters price" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "price"
            ),
            _react2.default.createElement("input", { type: "text", name: "min_price", className: "min-price", onChange: this.props.change, value: this.props.globalstate.min_price }),
            _react2.default.createElement("input", { type: "text", name: "max_price", className: "max-price", onChange: this.props.change, value: this.props.globalstate.max_price })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters floor-space" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "floor space"
            ),
            _react2.default.createElement("input", {
              type: "text", name: "min_floor_space", className: "min-floor-space", onChange: this.props.change, value: this.props.globalstate.min_floor_space }),
            _react2.default.createElement("input", { type: "text", name: "max_floor_space", className: "max-floor-space", onChange: this.props.change, value: this.props.globalstate.max_floor_space })
          ),
          _react2.default.createElement(
            "div",
            { className: "filters extras" },
            _react2.default.createElement(
              "span",
              { className: "title" },
              "Extras"
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "elavators"
              ),
              _react2.default.createElement("input", { name: "elavator", value: "elavator", type: "checkbox", onChange: this.props.change })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "swimming pool"
              ),
              _react2.default.createElement("input", { name: "swimming_pool", value: "swimming_pool", type: "checkbox", onChange: this.props.change })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "finshed basement"
              ),
              _react2.default.createElement("input", {
                name: "finished_basement", value: "finished_basement", type: "checkbox", onChange: this.props.change })
            ),
            _react2.default.createElement(
              "label",
              { htmlFor: "extras" },
              _react2.default.createElement(
                "span",
                null,
                "gym"
              ),
              _react2.default.createElement("input", { name: "gym", value: "gym", type: "checkbox", onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'header',
          null,
          _react2.default.createElement(
            'div',
            { className: 'logo' },
            'logo'
          ),
          _react2.default.createElement(
            'nav',
            null,
            _react2.default.createElement(
              'a',
              { href: '#' },
              'Create ads'
            ),
            _react2.default.createElement(
              'a',
              { href: '#' },
              'about us'
            ),
            _react2.default.createElement(
              'a',
              { href: '#' },
              'log in'
            ),
            _react2.default.createElement(
              'a',
              { href: '#', className: 'register-btn' },
              'register'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: 'Joe'
    };
    _this.looplistings = _this.looplistings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'looplistings',
    value: function looplistings() {
      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry your filter did not match and listing";
      }

      return listingsData.map(function (listing, index) {
        return _react2.default.createElement(
          'div',
          { className: 'col-md-3', key: index },
          _react2.default.createElement(
            'div',
            { className: 'listing' },
            _react2.default.createElement(
              'div',
              { className: 'listing-img', style: { background: 'url("' + listing.image + '") no-repeat center center' } },
              _react2.default.createElement(
                'span',
                { className: 'address' },
                listing.address
              ),
              _react2.default.createElement(
                'div',
                { className: 'details' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-3' },
                  _react2.default.createElement('div', { className: 'user-img' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-md-9' },
                  _react2.default.createElement(
                    'div',
                    { className: 'user-details' },
                    _react2.default.createElement(
                      'span',
                      { className: 'user-name' },
                      'john doe'
                    ),
                    _react2.default.createElement(
                      'span',
                      { className: 'post-date' },
                      '6th/10/2018'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'listing-details' },
                    _react2.default.createElement(
                      'div',
                      { className: 'floor-space' },
                      _react2.default.createElement('i', { className: 'far fa-square' }),
                      _react2.default.createElement(
                        'span',
                        { className: '' },
                        '1000 m\xB2'
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'bedrooms' },
                      _react2.default.createElement('i', { className: 'fas fa-bed' }),
                      _react2.default.createElement(
                        'span',
                        { className: '' },
                        listing.rooms,
                        ' Bedroom(s)'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'view-btn' },
                    'view listing'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'bottom-info' },
              _react2.default.createElement(
                'span',
                { className: 'price' },
                '$',
                listing.price
              ),
              _react2.default.createElement(
                'span',
                { className: 'location' },
                _react2.default.createElement('i', { className: 'fas fa-map-marker' }),
                listing.city,
                ', ',
                listing.province
              )
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', placeholder: 'search...' })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortBy-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            '390 results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortBy' },
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'highest price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'lowest price>'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fas fa-th-list', 'aria-hidden': 'default' }),
              _react2.default.createElement('i', { className: 'fas fa-th', 'aria-hidden': 'true' })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listing-results' },
          this.looplistings()
        ),
        _react2.default.createElement(
          'section',
          { id: 'pagination' },
          _react2.default.createElement(
            'ul',
            { className: 'pagination-nums' },
            _react2.default.createElement(
              'li',
              null,
              'prev'
            ),
            _react2.default.createElement(
              'li',
              { className: 'active' },
              '1'
            ),
            _react2.default.createElement(
              'li',
              null,
              '2'
            ),
            _react2.default.createElement(
              'li',
              null,
              '3'
            ),
            _react2.default.createElement(
              'li',
              null,
              '4'
            ),
            _react2.default.createElement(
              'li',
              null,
              '5'
            ),
            _react2.default.createElement(
              'li',
              null,
              'next'
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ })

},[102]);