import React from 'react'

export default function Search() {
  return (
    <form className="col s12">
      <div className="row">
      <h2 className="center-align">Search for movies</h2>
        <div className="input-field col s12">
          <input id="password" type="password" className="validate" />
          <label htmlFor="password">Password</label>
        </div>
      </div>
    </form>

  )
}
