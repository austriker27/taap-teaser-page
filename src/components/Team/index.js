import React from 'react'
import Link from 'gatsby-link'

// david - importing images
import davidHeadshot from "../../assets/david-twitter.jpg";
import mattHeadshot from "../../assets/matt-twitter.jpg";
import kerryHeadshot from "../../assets/kerry-twitter.jpg";

const Team = () => (
  <div className="p-3">
	  <p className="mb-8">A Project By:</p>
      <div className="font-body flex justify-around">
        
		<div className="flex items-center">
		  <img className="h-12 rounded-full" src={davidHeadshot} alt=""></img>
		  
		  <p className="font-body ml-2">David Lindahl <a href="#" target="_blank" className="font-body">@austriker27</a></p>
		  
		</div>
		<div className="flex items-center">
		  <img className="h-12 rounded-full" src={mattHeadshot} alt=""></img>
		  
		  <p className="font-body ml-2">Matt Lawrence <a href="#" target="_blank" className="font-body">@MLProductions01</a></p>
		  
		</div>
		<div className="flex items-center">
		  <img className="h-12 rounded-full" src={kerryHeadshot} alt=""></img>
		  <p className="font-body ml-2">Kerry Morrison <a href="#" target="_blank" className="font-body">@kmore</a></p>
		  
		</div>
		
      </div>
    
  </div>
)

export default Team;