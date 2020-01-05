import React, { useState, useEffect } from 'react';
import FileItem from './FileItem'

function FileList() {
  const [fileList, setFileList] = useState([])

  useEffect(() => {
    const list = [
      {
        id: 1,
        name: '终结者'
      },
      {
        id: 2,
        name: '伪装者'
      },
      {
        id: 3,
        name: '误杀'
      }
    ]
    setFileList(list)
  }, [])

  return (
    <div>
      {
        fileList.map(item => (
          <FileItem id={item.id} name={item.name}/>
        ))
      }
    </div>
  )
}

export default FileList