import React from 'react'
import CardMovis from './CardMovis'
import { Row } from 'react-bootstrap'
import PaginationComponet from './Pagination'

 const MoviesList = ({movies , getPage , pageCount}) => {
  return (
    <Row className='mt-3'>
      {movies.length >= 1 ?(movies.map((mov) => {

        return (<CardMovis key={mov.id} mov={mov}/>)
      })):<h2>لايوجد افلام</h2>}
      <PaginationComponet getPage={getPage} pageCount={pageCount}/>
    </Row>
  )
}


export default MoviesList