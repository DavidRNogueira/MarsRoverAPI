import React , {FC} from 'react';
import Search from './Components/Search/Search';
import ImageSlideshow from './Components/ImageSlideshow/ImageSlideshow';

const App:FC = ():JSX.Element => {
  return (
    <>
      <Search/>
      <ImageSlideshow/>
    </>
  )
}

export default App;
