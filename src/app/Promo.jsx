import React, { Component } from 'react';
import axios from 'axios';


class GetPromos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      promos: []
    };
  }

  componentDidMount() {
    axios.get(`promos.json`)
      .then(res => {
        const promos = res.data
        this.setState({ promos });
      });
  }

  render() {
    return (
        <div className="promocard__wrapper">
          {this.state.promos.map(promo =>
            <div className={"promocard square promo" + promo.id} style={{color: promo.color}} key={promo.id}>
            <div className="promocard__banner" style={{background: promo.banner}}>
                <div className="promocard__price">&euro;{promo.price}</div>
                <div className="promocard__copy">{promo.copy}</div>
                <div className="promocard__contact">contact us</div>
            </div>
        </div>          
        )}
        </div>
    );
  }
}

export default GetPromos;