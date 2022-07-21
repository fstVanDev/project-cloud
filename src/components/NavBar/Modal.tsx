import React from 'react'
import styled from 'styled-components'

const BlockModal = styled.div`
   display: absolute;
   padding: 10px;
   width: 100px;
   height: 200px;
   margin-left: 15px;
   background: #ccc;
   border-radius: 6px;
   z-index: 0;

   p {
      align-items: center;
      text-align: center;
      margin: auto;
      font-size: 16px;
   }
`



const Modal = () => {
  return (
     <BlockModal>
        <p>Modal</p>
    </BlockModal>
  )
}

export default Modal