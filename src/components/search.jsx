import '../css/style.css'
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'

function Search() {


  return (
    <div>
     <div className='centrar' >
      <div className='entrada_cont' >
     <button><i class="fa-solid fa-magnifying-glass"></i> </button>
        <input type="text" placeholder="Buscar"></input>

        <div className='cont1'>

        </div>
      </div>
      </div>
    </div>
  );
}

export default Search

