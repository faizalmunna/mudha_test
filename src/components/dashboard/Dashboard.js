import React, { Component } from 'react';
import List from '../lists/Lists';
import { connect } from 'react-redux';
import {getAllList} from '../../store/actions/listActions';

const dashboard = {
  paddingTop: '90px',
  backgroundColor: '#eeeeee'
}

class Dashboard extends Component {
  constructor(props) {
        super(props);
        

    }

    componentDidMount() {
            this.props.getAllList()
        }

  render() {
     
        
    // console.log(this.props);
    const { listItems } = this.props;
    console.log(listItems)
    return (
      <div className="dashboard" style={dashboard}>
        <div className="container bg-white">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1 py-3 py-md-5">
              <List listItems={listItems} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    listItems: state.list.listItems.data
  }
}

export default connect(mapStateToProps, { getAllList })(Dashboard)
