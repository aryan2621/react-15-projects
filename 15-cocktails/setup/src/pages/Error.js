import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
      <section className="error-page section">
        <div className="error-container">
          <h1>A dead End</h1>
          <Link to="/" className="btn btn-primary">
            Back Home
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Error
