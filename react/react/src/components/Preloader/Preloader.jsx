import React from 'react'
import { TailSpin } from 'react-loader-spinner';
import './loader.css'

const Preloader = () => {
  return (
    <div className="spin-wrapper">
      <div className="spin-content">
        <TailSpin
          height="30"
          width="30"
          color="#333"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass="tail-wrapper"
          visible={true}
        />
        <p>Uploading...</p>
      </div>
    </div>
  )
}

export default Preloader