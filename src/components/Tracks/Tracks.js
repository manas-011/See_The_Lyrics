import React from 'react';
import { Context } from '../../context';
import Spinner from '../layout/Spinner';
import Track from "../Tracks/Track";

const Tracks = () => {
  return (
    <Context.Consumer>
        {
         value  => { 
          const { track_list , heading } = value ;
          if(track_list === undefined || track_list.length === 0 ){
            return <Spinner/>
          }
          else{
            return (
              <React.Fragment>
                  <h3 className="text-center mb-4">{heading}</h3>
                  <div className="row">
                    {track_list.map(item => (
                       <Track key={item.track.track_id} track={item.track}/>
                    ))}
                  </div>
              </React.Fragment>
            )
          }
           
         }
        }
    </Context.Consumer>
  )
}

export default Tracks ;
