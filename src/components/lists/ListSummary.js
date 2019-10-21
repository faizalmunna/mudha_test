import React from 'react'
//attributes

const listBody = {
  padding: '0',  
  border: '1px solid #dbdbdb',
  borderRadius: '4px',
  minHeight: '180px',
  boxSizing: 'border-box',
  padding: '0',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start'
}

const listBodyTitle = {
  fontFamily: 'Roboto',
  fontSize: '12px',
  color: '#4d4d4d',
  lineHeight: '16px',
  fontWeight: '500',
  padding: '8px',

}

const priceTag = {
  color:'#E01A1A',
  fontWeight: 'bold',
  fontFamily: '"Roboto", sans-serif',
  fontSize: '14px',
  lineHeight: '16px',
  padding: '8px',
  margin: 'auto 0 0',
}

const single_list_item = {
  height: '100%',
}

const ListSummary = ({listItem, key}) => {
  return (
    <div className="list single_list_item" style={single_list_item}>
      <div className="list__body" style={listBody}>
        <img className="img-fluid" src={listItem.attributes.links.image} width="140" height="78" alt="Listing Thumbnail"/>
        <h5 className="list__body__title" style={listBodyTitle}>{listItem.attributes.title}</h5>
        <p className="list__body_price_tag" style={priceTag}>{listItem.attributes.price}</p>
      </div>
    </div>
  )
}

export default ListSummary
