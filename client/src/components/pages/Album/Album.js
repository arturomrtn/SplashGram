import React, { Component } from 'react'
import AlbumService from '../../../service/album.service'
import AlbumsList from './AlbumsList'
import AlbumForm from './AlbumForm'


class Album extends Component {
    constructor() {
        super()
        this.state = {
            albums: [],
            //user: this.props.storeUser
        }

        this.albumService = new AlbumService()
    }

    componentDidMount() {

            this.refreshAlbums()
    
    }

    refreshAlbums() {
        this.albumService
            //.getAlbumsByOwner(this.props.storeUser.userId)
            .getAlbumsByOwner('604378e1b1e00ba51c9408d1')
            .then(response => {
                console.log( '*******', response )
                this.setState({ albums: response.data })
            })
            .catch(err => console.log(err))
    }
    

    render() {
        
        const { albums } = this.state


        return (
            <div>
                <h1>Mis albums</h1>
                 <AlbumForm storeUser={this.props.storeUser} onNewAlbum={ ()=> this.refreshAlbums()}/>
                 <AlbumsList albums={this.state.albums}/>
            </div>
        )
    }
}

export default Album