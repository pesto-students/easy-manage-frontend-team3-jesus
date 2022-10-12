import React from 'react'
import './loader.css'
import Loading from '../../assets/loading.gif'

function Loader() {
    return <img className='loader' src={Loading} alt="loader" />
}

export default Loader