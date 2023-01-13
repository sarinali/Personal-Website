import { db } from "../firebase-config.js";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import Mode from "../Mode.js";
import Collapsible from 'react-collapsible';


function BlogPosts() {
    const [blogPosts, setBlogPosts] = useState([]);
    const blogPostsRef = collection(db, "blogposts");

    useEffect(() => {
        const getBlogs = async () => {
            const data = await getDocs(blogPostsRef);
            setBlogPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getBlogs();

    }, []);

    blogPosts.sort(function (a, b) {
        return b.index - a.index;
    });

    return (
        <div className="bloglist-body">
            {blogPosts.map((post, index) => {
                const text = post.body;
                const newText = text.split('/n').map(str => <p className="blog-body">{str}<br></br></p>);
                console.log(newText)
                return (
                    <Collapsible trigger={<div className="blogpost-wrapper">
                        <div className="blogpost" id="blog">
                            <div className="blog-title">{post.title}</div>
                            <div className="blog-details">
                                {index === 0 ? <div className="new-indicator">new</div> : <div></div>}
                                <div className="blog-date">{post.date + " - " + post.readtime + " read"}</div>
                            </div>
                            <hr className="blogpost-separator"></hr>

                        </div>
                    </div>}>
                        <div>
                            {newText}
                        </div>
                    </Collapsible>
                );
            })}
        </div>
    )
}





export default BlogPosts;