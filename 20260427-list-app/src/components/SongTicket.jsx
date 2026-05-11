function SongTicket({songObj}) {

    function sayHello() {
        alert('¡Hola!')
    }

    function handleClick(e) {
        console.log(e)
    }

    function onLikeBtnClick(songName) {
        alert('Me gusta la canción ' + songName)
    }
    // Esta funcion espera a un parametro - el nombre de la cancion 1
    return (
        <div className="song-ticket">
            <strong>Title:</strong> {songObj.title} <br />
            <strong>Autor:</strong> {songObj.autor} <br />
            <strong>Year:</strong> {songObj.year} <br />
            <a href={songObj.videoUrl} target="_blank">
            Ver video
           </a>
           <br />

           {/* El evento no necesita ningun parametro*/}
            <button onClick={handleClick}>Click here</button>

           {/* El evento no necesita ningun parametro*/}
           <button onClick={sayHello}>Di hola</button>

           {/* Para pasar un parametro a la funcion del evento necestamos usar una funcion flecha*/}
           <button onClick={() => { onLikeBtnClick (songObj.title) }}>Me gusta</button>
        </div>
    )
}
// function SongTicket(props) {
//     return (
//         <div className="song-ticket">
//             Title: {props.title} <br />
//             Author: {props.author} <br />
//             Year: {props.year} <br />
//             Video Url: {props.videoUrl} <br />
//         </div>
//     )
// }
export default SongTicket