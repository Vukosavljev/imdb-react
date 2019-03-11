import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props: any) {
        super(props);
        this.state = {
            filmTitle: '',
        }
        
    }

    render() {
        this.props
        return (
            <div className="row">
                <h2 className="center-align">Search for movies</h2>
                <form className="col s12" onSubmit={} >
                    <div className="input-field col s12">
                    <p>Type a title of film: </p>
                        <input id="search-film" type="text" name="film" placeholder="film title" />
                    </div>
                    <div className="row">
                        <div className="col s12 center-align">
                            <button className="btn waves-effect waves-light" type="submit">Search
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
    
        )
    }
}
