import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Beranda extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="beranda-grid">
                    <Cell col={12}>
                        <img src="http://pngimg.com/uploads/letter_a/small/letter_a_PNG10.png"
                            alt="logo"
                            className="logo-img"
                            />
                        <div className="banner-text">
                            <h1>Responsi Web 3</h1>
                            <hr/>
                            <p>Knowledge Has a Beginning But No End</p>
                        </div>
                        <div className="social-links">
                            <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true" />
                            </a>
                            <a href="https://www.twitter.com/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-twitter-square" aria-hidden="true" />
                            </a>
                            <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true" />
                            </a>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Beranda;