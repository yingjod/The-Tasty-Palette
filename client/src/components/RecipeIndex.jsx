import { useLoaderData, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Bootstrap components
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function Recipes() {
  const recipe = useLoaderData()

  //! State
  const [ filters, setFilters ] = useState({
    category: 'All',
    search: ''
  })

  const [ categories, setCategories ] = useState([])
  const [ filteredCategories, setFilteredCategories ] = useState([])

  //! Functions
  function handleChange(e){
    const newObj = {
      ...filters,
      [e.target.name]: e.target.value
    }
    setFilters(newObj)
  }

  //! Effects
  useEffect(() => {

    const pattern = new RegExp(filters.search, 'i')
    const filteredArray = recipe.filter(rec => {
      return pattern.test(rec.title) && (rec.category === filters.category || filters.category === 'All')
    })
    setFilteredCategories(filteredArray)

    if (recipe.length > 0 && categories.length === 0) {
      const categoriesArr = [...new Set(recipe.map(rec => rec.category))].filter(Boolean)
      setCategories(categoriesArr)
    }
  }, [filters])

  return (
    <>
      <h1 className='text-center bold display-3 mb-4'>Recipes</h1>
      <Container>
        <Row>
          <Col xs={6} md={4} lg={3}>
            <div className="custom-select">
              {/* ... (your select options) */}
            </div>
          </Col>
          <Col xs={6} md={4} lg={3}>
            <input id="search" name="search" placeholder='Search...' value={filters.search} onChange={handleChange} />
          </Col>
        </Row>
        <Row className='recipe-list'>
          { filteredCategories.length > 0 &&
          filteredCategories.map(rec => {
            const { id, title, poster } = rec
            return (
              <Col 
                as={Link}
                key={id} 
                xs={6} 
                md={4} 
                lg={3}
                style={ { backgroundImage: `url(${poster})` } }
                to={`/recipes/${id}`}
              >
                
                {title}
                
              </Col>
            )
          })}
        </Row>
      </Container>
    </>
  );
}
