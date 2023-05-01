import './card.css'


const Card = ({id, language, name, link, posterLink}) => {
  return (
    <div className='allSongsContainer'>
        
       <div className='songsContainer'>
          <img className='songsPoster' src={posterLink} alt="photo" />

          <div className='songsDescription'>
            <p className='songsName'>{name}</p>
            <button className='songsPlayAndDownload'><a href={link} className="card-a" target="_blank">Play & Download</a></button>
          </div>
        </div>  


    </div>
  )
}

export default Card