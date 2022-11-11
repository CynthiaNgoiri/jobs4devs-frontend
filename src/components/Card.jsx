import React from 'react'

function Card( {cards,handleSearch}) {
  console.log(cards)
  return (
    <div>
       <div className='searchbar-container'>
                <h1>Find Your Dream Job Here</h1>
                <input type='text' className='search' placeholder='Job title or keyword' onChange={handleSearch}/>
                <button>Search</button>
            </div>

      {cards.map((card) => (
        <div key={card.id} className='card'>
          <h2 className='title'>{card.title}</h2>
          <h2 className='organization'>{card.id}</h2>
          <div className='btn'>
            <button className='delete'>Delete</button>
            <button className='edit'>Edit</button>
            <button className='update'>update</button>
            <button className='apply'>Apply Now!</button>
          </div>
        </div>
        
      ))}
      
    </div>
  )
}

export default Card