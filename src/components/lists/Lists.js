import React from 'react'
import ListSummary from './ListSummary'
import { Link } from 'react-router-dom'

const ListingTitle = {
  textTransform: 'uppercase',
  fontFamily: "'Roboto', sans-serif",
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '21px',
  color: '#333333',
  marginBottom: '15px'
}

const singleList = {
  float: 'left',
  padding: '5px !important',
  minHeight: '180px',  
  padding: '0 9.5px',
}

const listCol = {
  padding: '0 6.5px',
}

const List = ({listItems}) => {
  return (
    <div className="single-list section">

      <h2 style={ListingTitle}>Listing</h2>

      <div class="row no-gutters align-items-stretch">
      { listItems && listItems.map(listItem => {
        return (
        	<Link className="col-lg-2 col-sm-6 col-xs-6 mb-3" style={listCol} to={'/list/' + listItem.id} key={listItem.id}>
          		<ListSummary style={singleList} className="single_list_item" listItem={listItem} key={listItem.id} />
          </Link>
        )
      })}
      </div>

    </div>
  )
}

export default List

