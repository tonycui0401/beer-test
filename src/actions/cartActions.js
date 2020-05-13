
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY} from './action-types/cart-actions'
import axios from 'axios';
const API_ENDPOINT = 'https://api.punkapi.com/v2/beers';

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

export const fetchBeersSuccess = (beers) => {
    return {
      type: 'FETCH_BEERS_SUCCESS',
      beers:beers
    }
};

function compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }


//fetch all Beers
export const fetchAllBeers = () => {

    return (dispatch) => {
        //  dispatch(fetchBeers());
    return axios.get(API_ENDPOINT)
      .then(response => {
         dispatch(fetchBeersSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
 };
};

//sort the beers
export const sortBy = (sort, items) =>{
      let arrayCopy = [...items];
      arrayCopy.sort(compareBy(sort));
    return {
        type: 'SORT_BEERS_SUCCESS',
        beers:arrayCopy
      }
}

//show the cart
export const showCart= () =>{
  return {
      type: 'SHOW_CART',
      cart:true
    }
}