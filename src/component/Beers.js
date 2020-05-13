import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { addToCart } from '../actions/cartActions'


const propTypes = {
  view: PropTypes.string.isRequired,
  id: PropTypes.number,
  image_url: PropTypes.string,
  name: PropTypes.string,
  abv: PropTypes.number,
  first_brewed: PropTypes.string,
};

class Beers extends Component {

handleClick = (id)=>{
    this.props.addToCart(id); 
}

onHandleModal(image,text, food_pairing, description, tagline, abv){
  this.props.handlingModal(image,text, food_pairing, description, tagline, abv);
};

  render() {
    const { view, id, name, image_url, abv, tagline, food_pairing, first_brewed, description} = this.props;
    const flexClass = `flex-item card ${view}`;
    const infoClass = ' beer-info beer-brewed'
    return (
      <li id={id} className={flexClass} key={id}>
         <div className={infoClass}> {first_brewed}</div>
         
            <img className="beer-img" onClick={(event) => this.onHandleModal({image_url},{name},{food_pairing},{description},{tagline},{abv})} src={image_url} alt={tagline}/>
            <div className="beer-info">
                <span className="beer-name"> {name}</span>
                <span className="beer-abv"> {abv}%</span>
            </div>
              <button onClick={()=>{this.handleClick(id)}}>Add to Cart</button>
      </li>
    );
  }
}

Beers.propTypes = propTypes;


const mapDispatchToProps= (dispatch)=>{
  
  return{
      addToCart: (id)=>{dispatch(addToCart(id))},
  }
}

export default connect(null, mapDispatchToProps)(Beers)
