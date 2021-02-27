import React, { useEffect, useState } from 'react';

import Gallery from './Gallery';
import ImgInfoWindow from './ImgInfoWindow';

import '../style/App.scss';

function App() {
  const apiUrl = 'https://boiling-refuge-66454.herokuapp.com/images';

  const [images, setImages] = useState([]);
  const [activatedImgID, setActivatedImgID] = useState(null);
  /* const [xCoord, setXCoord] = useState(0); */

  const activateImg = (e) => {
    /* console.log(e.target.getClientRects()[0].y);
    setXCoord(e.target.getClientRects()[0].y) */
    setActivatedImgID(e.target.getAttribute('data-id'));

    window.scroll(0, 0)



  }

  const deactivateImg = () => {
    setActivatedImgID(null);
    /* window.scrollTo(0, {xCoord}) */
  }

  useEffect(() => {
    fetch(apiUrl)
      .then(resp => resp.json())
      .then(resp => setImages(resp))
  }, [])

  return (
    <div className="App">
      <h1 className='app-title'>Test app</h1>
      <Gallery
        data={images}
        apiUrl={apiUrl}
        activateImg={activateImg}
      />
      {activatedImgID !== null && <ImgInfoWindow imgId={activatedImgID} apiUrl={apiUrl} deactivateImg={deactivateImg} />}
    </div>
  );
}

export default App;
