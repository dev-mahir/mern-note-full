import React from 'react'
import { Link} from 'react-router-dom'

const Home = () => {
  return (
    <div className='mt-5'>
      <div className="container">
        <div className="card p-2">
          <Link to="/cloud-system" className='btn btn-primary'>Cloud System</Link>
        </div>
      </div>

    </div>
  )
}

export default Home