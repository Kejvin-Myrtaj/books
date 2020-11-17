import React from 'react';


class Gallery extends React.Component {

    dataFetch (search_text) {
        fetch("https://www.googleapis.com/books/v1/volumes?q=" + search_text)
            .then((data) => {
                return data;
            });
    }

    render() {
        return (
            <h1>Galleria libri</h1>
        );
    }

}

export default Gallery;