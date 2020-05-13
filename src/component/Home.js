import React, { Component } from 'react';
import Loader from './Loader';
import HeaderButtons from './HeaderButtons';
import Beers from './Beers';
import Modal from './Modal';
import Tabs from './Tabs';
import { connect } from 'react-redux'
import { addToCart, fetchAllBeers, sortBy } from '../actions/cartActions'

class App extends Component {

 constructor(props) {
    super(props);
    
    this.state = {
      isLoading: false,
      view: 'flex-25',
    };

  }

  fetchAllBeers = () => {
    this.props.fetchAllBeers();
    
    }
  
  sortAllBeers = (sort, items) => {
    this.props.sortBy(sort, items);
  }
    

  showModal = () => {
    this.setState({
      show: !this.state.show
    });
  }

// Sort once by month, then by year. Date Format: MM/YYYY
  beerDateSort(key, slicer){
    return function(a,b){
      if (a[key].slice(slicer) < b[key].slice(slicer)) return -1;
      if (a[key].slice(slicer) > b[key].slice(slicer)) return 1;
      return 0;
    };
  }

  showCart() {
    this.setState({ cart : true} );
  }

  // update sorted list
  onChangeSort(newSort, items) {
        this.sortAllBeers(newSort, items);
  }

  onHandleChange(event) {
    this.setState({
      sort: event.target.value});
      this.onChangeSort(event.target.value, this.props.items);
  }  
  
  //Modal Activator and swap modal content
  onModalActivate(image, name, food_pairing, description, tagline, abv){
    console.log(this.state);
      console.log(image.image_url);
      console.log(name.name);
      this.setState({
        modalImage: image.image_url,
        flavorText: name.name,
        food_pairing:food_pairing.food_pairing,
        description:description.description,
        tagline:tagline.tagline,
        abv:abv.abv
      })
      console.log(this.state.modalImage);
      console.log(this.state.flavorText);
      this.showModal();
    }

  renderCart(){
    return (
      <div>dddd</div>
    );
  }

  renderPizza(){
    const { view } = this.state;
    const pizza = this.props.items.filter((beer, i) => beer.food_pairing.some(function(v){ return v.indexOf('pizza')>=0 }));
    return pizza.map((beer, i)=>{
    return (
      <Beers
        key = {beer.id}
        view = {view}
        index= {i}
        handlingModal = {this.onModalActivate.bind(this)}
        {...beer}
      />
    );
  });
  }

  renderSteak(){
    const { view } = this.state;
    const pizza = this.props.items.filter((beer, i) => beer.food_pairing.some(function(v){ return v.indexOf('steak')>=0 }));
    return pizza.map((beer, i)=>{
    return (
      <Beers
        key = {beer.id}
        view = {view}
        index= {i}
        handlingModal = {this.onModalActivate.bind(this)}
        {...beer}
      />
    );
  });
  }

  renderBeers(value) {
      const { view } = this.state;   
      return this.props.items.map((beer, i) => {
        return (
          <Beers
            key = {beer.id}
            view = {view}
            index= {i}
            handlingModal = {this.onModalActivate.bind(this)}
            {...beer}
          />
        );
      });
  }
    render() {
      const { isLoading } = this.state;
      const { view } = this.props;      
      if (isLoading) {
       return <Loader/>;
      }
      
      return (

        <div>
          <HeaderButtons 
              view = {view}
              />
          <div className="flex-container">
       
          <Tabs>
        <div label="All">
        <p className="note">pick your sort: </p>
            <div className="dropdown">
              <select sorthandler={this.state.sort} onChange={(event) => this.onHandleChange(event)}>
              <option value="nosort"></option>
                <option value="name">Name</option>
                <option value="abv">abv</option>
              </select>
            </div>
           {this.renderBeers()}
        </div>
        <div label="Pizza">
          {this.renderPizza()}
        </div>
        <div label="Steak">
          {this.renderSteak()}
        </div>
      </Tabs>
          </div>
        <Modal onClose={this.showModal} show={this.state.show}>
              <img className="modal-image" src={this.state.modalImage} alt={this.state.flavorText}></img>
              <p className="modal-text">{this.state.flavorText}</p>
              <p className="modal-text">{this.state.abv}</p>
              <p className="modal-text">{this.state.tagline}</p>
              <p className="modal-text">{this.state.food_pairing}</p>
              <p className="modal-text">{this.state.description}</p>
        </Modal>
        </div>
      );
    }
}

const mapStateToProps = (state)=>{
  return {
    items: state.items,
    cart: state.cart
  }
}
const mapDispatchToProps= (dispatch)=>{
  
  return{
      addToCart: (id)=>{dispatch(addToCart(id))},
      fetchAllBeers: ()=> {dispatch(fetchAllBeers())},
      sortBy: (sort, items)=> {dispatch(sortBy(sort, items))}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)