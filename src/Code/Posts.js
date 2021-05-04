import React from 'react';
import Upvote from './Vote.js';

function Posts () {
    return (
        <div className="post">
            <a href="">
                <div className="postHeader">Hello</div>
            </a>
            <div className="postBody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ducimus. Totam dolorum sunt error itaque nostrum in excepturi ipsum sapiente, aspernatur dignissimos mollitia, id ea, facere quo numquam quia atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ducimus. Totam dolorum sunt error itaque nostrum in excepturi ipsum sapiente, aspernatur dignissimos mollitia, id ea, facere quo numquam quia atque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ducimus. Totam dolorum sunt error itaque nostrum in excepturi ipsum sapiente, aspernatur dignissimos mollitia, id ea, facere quo numquam quia atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ducimus. Totam dolorum sunt error itaque nostrum in excepturi ipsum sapiente, aspernatur dignissimos mollitia, id ea, facere quo numquam quia atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ducimus. Totam dolorum sunt error itaque nostrum in excepturi ipsum sapiente, aspernatur dignissimos mollitia, id ea, facere quo numquam quia atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ducimus. Totam dolorum sunt error itaque nostrum in excepturi ipsum sapiente, aspernatur dignissimos mollitia, id ea, facere quo numquam quia atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ducimus. Totam dolorum sunt error itaque nostrum in excepturi ipsum sapiente, aspernatur dignissimos mollitia, id ea, facere quo numquam quia atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ducimus. Totam dolorum sunt error itaque nostrum in excepturi ipsum sapiente, aspernatur dignissimos mollitia, id ea, facere quo numquam quia atque.</div>
            <div className="postFooter">
                <Upvote />
                <div className="share">Share</div>
            </div>
        </div>
        
    )
}

export default Posts;