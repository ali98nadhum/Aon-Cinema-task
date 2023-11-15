import React from 'react'
import { Col } from 'react-bootstrap'
import { Link  } from "react-router-dom";


const CardMovis = ({mov}) => {
  return (
     
      <Col xs="6" sm="6" md="4" lg="3" className="my-1 d-flex">
      <Link to={`/movie/${mov.id}`}> 
        <div className='card'>
          <img src={`https://image.tmdb.org/t/p/w500` + mov.poster_path} className='card__image' alt="" />
          <div className="card__overlay">
            <div className="overlay__text text-center w-100 p-2">
              <p>اسم الفلم : {mov.title}</p>
              <p>تاريخ الاصدار : {mov.release_date}</p>
              <p>عدد المقيمين :{mov.vote_count}</p>
              <p>التقيم : {mov.vote_average}</p>
            </div>
          </div>
        </div>
        </Link>
      </Col>
      
  )
}


export default CardMovis
