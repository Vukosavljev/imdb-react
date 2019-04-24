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
    // setting state for every type in search 
    changeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({ filmTitle:  event.currentTarget.value });

    }

    // calling function from MovieApp component and clearing filmTitle in state
    sumbitHandler = () => {
        this.props.sumbitFilm(event, this.state.filmTitle)
        this.setState({ filmTitle: '' })
    }

    render() {

        return (
            <div className="row card" style={{ margin: '20px auto' }}>

                <form className="col s12" onSubmit={this.sumbitHandler} >

                    <div className="input-field col s12">
                    <h5>Type a title of movie: </h5>
                        <input id="search-film" value={this.state.filmTitle}
                        type="text" name="film"
                        placeholder="film title"
                        onChange={this.changeHandler} />
                    </div>

                    <div className="row">
                        <div className="col s12 center-align">
                            <button className="btn waves-effect waves-light hoverable" type="submit" >Search
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>

                </form>

            </div>
    
        )
    }
}