import React, { Component } from 'react';
import auth from '../services/authService'; // this is imported because only authentcated users must have access to certain features on the table
import Table from './common/table';
import { Link } from 'react-router-dom';


import Like from './common/like';




class MoviesTable extends Component {

    columns = [

        {path: 'title', label: 'Title', content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key:"like", content: movie => (<Like liked={movie.liked} onClick= {() =>this.props.onLike(movie)} />)} // for like
        
        


    ];  

    // To delete....which is to be done only by admin
deleteColumn = {
    key:"delete", content: movie=> (<button onClick={() => this.props.onDelete(movie)} className= "btn btn-danger btn-sm" >Delete</button>)} ;




constructor () {

    super();
    const user = auth.getCurrentUser();
    if (user && user.isAdmin)
    this.columns.push(this.deleteColumn);
};
    
    render() { 



        const {movies,  onSort, sortColumn} = this.props;
    return ( <Table columns={this.columns} data={movies} sortColumn= {sortColumn} onSort={onSort} />);
    };
};
 
 
export default MoviesTable ;