import React , { useEffect, useState} from 'react'
import axios from 'axios' ;
import Tracks from './components/Tracks/Tracks';

export const Context = React.createContext() ;

const Contextfun = () => { 
  const [myvalue, setMyValue] = useState(
      {
        track_list : [] ,
        heading : 'Top 10 Tracks'
      }
  ) ;

  useEffect(() =>{
    axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${
      process.env.REACT_APP_MM_KEY}`)
       .then(res => {
        //console.log(res.data) ;
        setMyValue({track_list: res.data.message.body.track_list ,
                    heading : 'Top 10 Tracks'
        });
      })
       .catch(error => console.log(error))

       
  }
  
  ,[]) ;
  
  return (
    <Context.Provider value={myvalue}>
      <Tracks />  
    </Context.Provider>
  )
}

export default Contextfun ;
