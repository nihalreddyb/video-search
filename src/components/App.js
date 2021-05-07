import React from 'react';
import Search from './Search'
import youtube from '../apis/youtube'
import VideoList from './VideoList';
import VideoDetail from './VideoDetails';

class App extends React.Component {

    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.onSearchInputChange('laferrari');
    }
    onSearchInputChange = async (searchKey) => {
        const searchResponse = await youtube.get('/search', {
            params: {
                q: searchKey
            }
        });
        this.setState({ videos: searchResponse.data.items, selectedVideo: searchResponse.data.items[0] });
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return(
            <div>
                <Search searchInput={this.onSearchInputChange} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                        <   VideoDetail video={this.state.selectedVideo}></VideoDetail>
                        </div>
                        <div className="five wide column">
                            <VideoList videoList={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
}

export default App;