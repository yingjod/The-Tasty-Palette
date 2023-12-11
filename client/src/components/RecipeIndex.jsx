import { useLoaderData, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

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
        <div className='search-container'>
          <div className="custom-select">
            <select id="dropdown" name="category" value={filters.category} onChange={handleChange}>
              <option value="All">All</option>
              { categories.length > 0 &&
                categories.map(category => {
                  return <option key={category} value={category}>{category}</option>
                })
              }
            </select>
          </div>
          <input id="search" name="search" placeholder='Search...' value={filters.search} onChange={handleChange} />
        </div>
        <div className="recipe-cards">
        {filteredCategories.sort((a, b) => a.title < b.title ? -1 : 1).map(rec => {
          const { id, title, poster, prepTime } = rec
          return (
              <Link key={id} to={`/recipes/${id}`} className="card-layout">
                <div className="card" style={{width: '20rem'}}>
                  <img className="card-img-top" src={poster} alt={title} style={{height: '150px', objectFit: 'cover'}}/>
                  <div className="card-body">
                    <h5 className="text-center bold card-title">{title}</h5>
                    <p className="text-center card-text">Total Time: {prepTime}</p>
                  </div>
                </div> 
              </Link>
          )
        })}
        </div> 
      </>
    )
  }

