import React, { useState } from 'react'


const MovieIDContextState = React.createContext(null)


function MovieIDContext(props) {
    const [movieid, setmovieid] = useState(1)
    return (
       <MovieIDContextState.Provider value={[movieid, setmovieid]}>
           {props.children}
       </MovieIDContextState.Provider>
    )
}

export { MovieIDContext, MovieIDContextState }
