import React from "react"

import "./layout.css"

const BlogTeaser = ( {title, summary} ) => (
  <div className="blog--teaser" 
	style={{
		color: 'gray',
		background: '#f2f2fa'
	}}>
    <h2 style={{
		color: 'black'
	}}>{title}</h2>
	<p dangerouslySetInnerHTML={{__html: summary}}></p>
  </div>
)

export default BlogTeaser