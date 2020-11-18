import React, {useState} from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: 'Eung',
            username: "eung12",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://avatars3.githubusercontent.com/u/54208914?s=460&amp;u=425aa8d5d2421828268f07206f9299d83ec20149&amp;v=4"
        });

        setTweetMessage("");
        setTweetImage("")
    };

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars3.githubusercontent.com/u/54208914?s=460&amp;u=425aa8d5d2421828268f07206f9299d83ec20149&amp;v=4" />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's happening?" 
                        type="text"
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput" 
                    placeholder="Optional: Enter image URL" 
                    type="text"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;