var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'film o czarodzieju',
        poster: 'harry-potter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        poster: 'król-lew.jpg'
    },
    {
        id: 3,
        title: 'Władca Pierścieni',
        desc: 'Jak Frodo zniszczył Pierścień',
        poster: 'władca-pierścieni.jpg'
    },
    {
        id: 4,
        title: 'Głupi i głupszy',
        desc: 'Opis zbędny :D',
        poster: 'głupi-i-głupszy.jpg'
    }
];;


//my code

var Movie = React.createClass({
    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },
    render: function() {
        return (
            React.createElement('li', { key: this.props.movie.id },
                React.createElement('img', { src: this.props.movie.poster }),
                React.createElement(MovieTitle, { title: this.props.movie.title }),
                React.createElement(MovieDescription, { desc: this.props.movie.desc })
            )
        )
    }
});

var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function() {
        return (
            React.createElement('h2', {}, this.props.title)
        )
    }
});

var MovieDescription = React.createClass({
    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('p', {}, this.props.desc)
        )
    }
});




var MoviesList = React.createClass({
    propTypes: {
        moviesList: React.PropTypes.array.isRequired,
    },
    render: function() {
        var moviesElements = this.props.moviesList.map(function(movie) {
        return React.createElement(Movie, { movie: movie });
        });
        return (
            React.createElement('div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, moviesElements)
            )
        )
    }
});



var element = React.createElement(MoviesList, { moviesList: movies });
ReactDOM.render(element, document.getElementById('app'));