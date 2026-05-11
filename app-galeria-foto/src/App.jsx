import photosArr from "./data/photos"
import PhotoHolder from "./components/Photos"
import PhotoModal from "./components/PhotoModal"
import { useState } from "react"

function App() {
  let [showModal, setShowModal] = useState(false)
  let [selectedIdx, setSelectedIdx] = useState(null)

  // Se ejecuta cuando hacemos click en una foto
  function onImgClick(idx) {
    setSelectedIdx(idx)
    setShowModal(true)
  }

  // Cerrar modal
  function closeModal() {
    setShowModal(false)
  }

  // Foto anterior
  function prevPhoto() {
    if (selectedIdx > 0) {
      setSelectedIdx(selectedIdx - 1)
    }
  }

  // Foto siguiente
  function nextPhoto() {
    if (selectedIdx < photosArr.length - 1) {
      setSelectedIdx(selectedIdx + 1)
    }
  }

  return (
    <>
      {showModal ? (
        <PhotoModal
          imgObj={photosArr[selectedIdx]}
          closeModalCallback={closeModal}
          prevPhotoCallback={prevPhoto}
          nextPhotoCallback={nextPhoto}
        />
      ) : null}

      <div className="container">
        {photosArr.map((el, idx) => {
          return (
            <PhotoHolder
              key={idx}
              imgObj={el}
              onImgClickCallback={() => onImgClick(idx)}
            />
          )
        })}
      </div>
    </>
  )
}

export default App