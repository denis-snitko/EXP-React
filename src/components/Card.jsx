import React from "react"

export const Card = ({title, body}) =>
  <div className="col-xl-3 col-md-4 col-sm-6 mb-3 mb-sm-3 mb-xl-3">
    <div className="card h-100">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
      </div>
    </div>
  </div>
