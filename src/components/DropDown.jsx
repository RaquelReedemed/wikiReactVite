import React from 'react'
import { useApi } from '../hooks/useApi';





function DropDown() {

    const { loading, data: category } = useApi(`https://serviceone.onrender.com/apiWikiIdeasV1d/getCategory`)
    console.log(category)


  return (
    <div class="dropdown">
  <button class="butons dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Sección
  </button>
  <ul class="dropdown-menu">
  {category.map((categorias) => {
    return(
        <li key={category._id}><a class="dropdown-item" href="#">{categorias.nameCategory}</a></li>
    )
  })}
  </ul>
</div>
  )
}

export default DropDown;