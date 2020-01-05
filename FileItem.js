import React from 'react'

export default function FileItem({id, name}) {

  function showId(id) {
    alert(id)
  }

  return (
    <div onClick={() => showId(id)}>
      {id}-{name}
    </div>
  )
}