function PhotoHolder({imgObj, onImgClickCallback}) {
  return (   // cuando hagamos click        // ejecutamos callback
    <div className="caja" onClick={ () => {onImgClickCallback(imgObj)} }>
        <img src={imgObj.src} alt="" />
    </div>
  )
}

export default PhotoHolder
