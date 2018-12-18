import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }


    return (
        <div>
            <div className='ui embed'>
                <iframe title={video.snippet.title} src={`https://www.youtube.com/embed/${video.id.videoId}`} />
            </div>
            <div className='ui segment'>
                <h4 className='header'>
                    {video.snippet.title}
                </h4>
                <div className='description'>
                    {video.snippet.description}
                </div>
            </div>
        </div >
    )
}


export default VideoDetail;