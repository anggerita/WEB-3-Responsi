import React, { Component } from 'react';
import { Grid } from 'react-mdl';

class WelcomeBooth extends Component {
    constructor(){
        super();
        this.state = {
            nama: '',
        };
    }
    handleChangeNama = (event) => {
        this.setState({ nama: event.target.value });
    };
    render() {
        return(
            <Grid className="background">
                <div className="banner">
                <form>
                    <div className="mb-3">
                        <label for="nama" class="form-label">
                            Nama
                        </label>
                        <input type="text" className="form-control" onChange={this.handleChangeNama} />
                    </div>
                </form>
                <br></br>
                <div class="berhasil" >
                    <h4>Halo {this.state.nama}!
                    <br/>Jaga kesehatan. Bahagia selalu.
                    <br/>Gusti Mberkahi.
                    </h4>
                </div>
                </div>
            </Grid>
        )
    }
}

export default WelcomeBooth;