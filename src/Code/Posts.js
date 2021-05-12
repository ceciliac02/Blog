import React from 'react';
import Upvote from './Vote.js';
import Share from './Share.js';

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            header: "",
            body: "",
        }
    }
    firstPostBody = <p>This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post.This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post.This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post.This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post. This is the content of the first post.This is the content of the first post. This is the content of the first post. This is the content of the first post.</p>

    secondPostBody = <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum reiciendis laboriosam nostrum deleniti? At a non architecto quibusdam repellendus animi beatae expedita numquam sit, recusandae veritatis harum minus sed molestias? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero provident assumenda quisquam fuga enim consectetur sequi dolorum repellendus, debitis dignissimos aliquam! Eum tempore mollitia, inventore id ex sint! Saepe, possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic esse similique non nihil magnam repellendus, amet, consequatur, dolore ipsam itaque porro unde dolores sapiente at aliquam voluptatem quas asperiores.</p>
    render () {
        return (
            <>
                <div className="post">
                    <div className="postHeader">{this.header="First Post"}</div>
                    <div className="postBody">{this.body=this.firstPostBody}</div>
                    <div className="postFooter">
                    <Upvote />
                    <Share />
                    </div>
                </div>
                <div className="post">
                    <div className="postHeader">{this.header="Second Post"}</div>
                    <div className="postBody">{this.body=this.secondPostBody}</div>
                    <div className="postFooter">
                    <Upvote />
                    <Share />
                    </div>
                </div>
            </>
        )
    }
}

export default Post;

/*function Posts () {
    return (
        <div className="post">
            <div className="postHeader">Hello</div>
            <div className="postBody">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ducimus. Totam dolorum sunt error itaque nostrum in excepturi ipsum sapiente, aspernatur dignissimos mollitia, id ea, facere quo numquam quia atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ducimus. Totam dolorum sunt error itaque nostrum in excepturi ipsum sapiente, aspernatur dignissimos mollitia, id ea, facere quo numquam quia atque.Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ducimus. Totam dolorum sunt error itaque nostrum in excepturi ipsum sapiente, aspernatur dignissimos mollitia, id ea, facere quo numquam quia atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ducimus. Totam dolorum sunt error itaque nostrum in excepturi ipsum sapiente, aspernatur dignissimos mollitia, id ea, facere quo numquam quia atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ducimus. Totam dolorum sunt error itaque nostrum in excepturi ipsum sapiente, aspernatur dignissimos mollitia, id ea, facere quo numquam quia atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ducimus. Totam dolorum sunt error itaque nostrum in excepturi ipsum sapiente, aspernatur dignissimos mollitia, id ea, facere quo numquam quia atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ducimus. Totam dolorum sunt error itaque nostrum in excepturi ipsum sapiente, aspernatur dignissimos mollitia, id ea, facere quo numquam quia atque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, ducimus. Totam dolorum sunt error itaque nostrum in excepturi ipsum sapiente, aspernatur dignissimos mollitia, id ea, facere quo numquam quia atque.</div>
            <div className="postFooter">
                <Upvote />
                <Share />
            </div>
        </div>
        
    )
}

export default Posts;*/