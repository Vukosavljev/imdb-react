import React, { Component } from 'react';
interface Props {
    sumbitFilm: any,
}

export default class Search extends Component <Props, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            filmTitle: '',
        }
        
    }

    changeHandler = (event: Event) => {
        this.setState({ filmTitle: event.target.value })
    }

    render() {
        
        return (
            <div className="row">
                <h2 className="center-align">Search for movies</h2>
                <form className="col s12" onSubmit={this.props.sumbitFilm} >
                    <div className="input-field col s12">
                    <p>Type a title of film: </p>
                        <input id="search-film" value={this.state.filmTitle}
                        type="text" name="film"
                        placeholder="film title"
                        onChange={(event) => this.changeHandler} />
                    </div>
                    <div className="row">
                        <div className="col s12 center-align">
                            <button className="btn waves-effect waves-light" type="submit" >Search
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
    
        )
    }
}
