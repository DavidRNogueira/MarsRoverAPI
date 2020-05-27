import React , {FC, useReducer} from 'react';
import Search from './Components/Search/Search';
import ImageSlideshow from './Components/ImageSlideshow/ImageSlideshow';
import { IPhoto, IActionInterface } from './Interfaces';

const initState :(string|number)[] = []
export const Context = React.createContext<any>(initState);

const reducer = (state:IPhoto, action:IActionInterface) => {
  const {type, payload} = action;
  
  switch (type){
      case "SET_IMAGES":
          return [...payload]
      default:
          return state;
  }
}
const App:FC = ():JSX.Element => {

  const [state,dispatch] = useReducer<any>(reducer, initState)
  return (
    <Context.Provider value ={{state , dispatch}}>
      <Search/>
      <ImageSlideshow/>
    </Context.Provider>
  )
}

export default App;
