import React, { Component } from 'react';
import List from '../lists/Lists';
import { connect } from 'react-redux';
import {getAllList, getSimilarItems} from '../../store/actions/listActions';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './../../index.css';

class ListDetails extends Component {
  constructor(props) {
        super(props);
    }
    componentDidMount() {
            this.props.getAllList()
            this.props.getSimilarItems(this.props.match.params.id)
        }
  render() {
    const {similerItems} = this.props
    const id = this.props.match.params.id;
    const singleList = this.props.listItems && this.props.listItems.find(f => f.id === id)
    let itemDesc = []
    if (singleList) {
       itemDesc = singleList.attributes && singleList.attributes.description && `${singleList.attributes.description}`.split("\\n\\n")
            .map(s => `${s}`.split("\\n1"))
            .map(a => a.map(s => s.trim()));
    }




    return singleList ? (
    <div className="container section list-details">
      <div className="row">
      <Breadcrumb>
        <BreadcrumbItem> <Link to={'/'} >Home</Link></BreadcrumbItem>
        <BreadcrumbItem active>{singleList.attributes.title}</BreadcrumbItem>
      </Breadcrumb>
      </div>
      <div className="row">
        <div className="col-lg-8">
        <h4>{singleList.attributes.title}</h4>
            <img src={singleList.attributes.links.image} />
            <p className="description">Description <span className="report_btn normal_font"><i class="fas fa-flag"></i> report</span></p>
            <p className="normal_font base_font_color">{itemDesc[0]}</p>
            <p className="normal_font base_font_color">{itemDesc[1]}</p>
          <div className="grey-text">
            
            <br/>
                   <ul className={`list-items`}>{itemDesc[2].map((m) => {
                return(
                    <li className="normal_font base_font_color">{m}</li>
                )
              })}</ul>
          </div>
        </div>
        <div className="col-lg-4 single_item_side_bar">
          <div className="row">
              <div className="col-6 small_block_padd"><i class="far fa-heart"></i> Wishlist</div>
              <div className="col-6 small_block_padd"><i class="fas fa-share-alt"></i> Share</div>
              <div className="col-12 single_item_small_font">Price:</div>
              <div className="col-12 single_item_price small_block_padd"> {singleList.attributes.price}</div>
              <div className="col-12 single_item_small_font ">Item Condition:</div>
              <div className="col-12 single_item_big_font small_block_padd">{singleList.attributes.condition}</div>
              <div className="col-12 single_item_small_font">Item Location:</div>
              <div className="col-12 single_item_big_font small_block_padd">{singleList.attributes.location}</div>
              <div className="col-12 seller_infor single_item_small_font">Seller Info</div>
              <div className="col-12 small_block_padd">
                <div className="row">
                  <div className="col-2 image_avatar"><img  src="./../image/avatar.jpg" /></div>
                    <div className="col-10">
                      <div className="col-12 single_item_big_font">{singleList.attributes.seller_name}</div>
                    <div className="col-12">{singleList.attributes.seller_type}</div>
                  </div>
                </div>
              </div>
          </div>
          <div className="row">
              <div className="col-12 small_block_padd">
              Interested with the ad? Contct the seller
              </div>
              <div  className="col-12 align_bottom">
              <Button className="top_btns"  size="lg" ><i class="fas fa-phone"></i> {singleList.attributes.phone}</Button>
              <Button className="top_btns"  size="lg " ><i class="fas fa-envelope"></i>  E-mail</Button>
              <Button className="bottom_btn" size="lg"><i class="far fa-comment-alt"></i>  Chat</Button>
              </div>
          </div>
        </div>
      </div>
      <div className="row">
          <div className="similar_title">Similar Products</div>
          <div className="col-12 nopad">
            <div className={`random-items`}>{similerItems && similerItems.map((m) => {
                return(
                  
                    <div className="random-item">
                    <Link to={'/list/' + m.id} >
                        <img src={m.attributes.image} />                    
                        <h4>{m.attributes.title}</h4>
                      <span>{m.attributes.price}</span>
                    </Link>
                    </div>
                  
                )
              })}
            </div>
          </div>
      </div>


    </div>
  ) : null
  }
}

const mapStateToProps = (state) => {
  return {
    listItems: state.list.listItems.data,
    similerItems: state.list.similerItems.data
  }
}

export default connect(mapStateToProps, { getAllList, getSimilarItems })(ListDetails)