import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

class Covid extends Component {
    constructor(){
        super()
        this.state = {
            confirmed: 0,
            recovered: 0,
            deaths: 0
        }
    }

    componentWillMount(){
        const url = 'https://covid19.mathdro.id/api/countries/id'
        axios.get(url)
            .then((response) => {
                const data = response.data;
                this.setState({ confirmed: data.confirmed.value });
                this.setState({ recovered: data.recovered.value });
                this.setState({ deaths: data.deaths.value });
                console.log(response);
                console.log(data);
            });
    }

    render(){
        return (
            <Grid className="background">
                <div className="banner">
                    <h4 class="judul">Update Kasus COVID-19 Indonesia</h4>
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th style={{ width: 20 }}>Kasus</th>
                                <th style={{ width: 20 }}>Sembuh</th>
                                <th style={{ width: 20 }}>Meninggal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.confirmed}</td>
                                <td>{this.state.recovered}</td>
                                <td>{this.state.deaths}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Grid>    
        );
    }
}

export default Covid;