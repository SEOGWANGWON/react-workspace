import React, {useEffect,useState} from 'react';
import axios from 'axios';

const PostComment = () => {

    const [userData, setUserData] = useState([]);
    const [PostComments, setPostComments] = useState([]);
    const [Posts, setPosts] = useState([]);

    // API를 두 개 이상 가져올 경우
    useEffect(() => {
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/comments')
        ])
        // 데이터를 성공적으로 가져왔을 때
        // axios.spread : 여러가지 응답을 개별 응답으로 나눠서 제공된 set 함수에 전달하는 역할
        .then(axios.spread((usersResponse,postsResponse,commentsResponse) =>{
            setUserData(usersResponse.data);
            setPosts(postsResponse.data);
            setPostComments(commentsResponse.data);
        }))
        .catch(error => console.error(error));  // 여태 쓴것과 다를거없음
    }, []);

    return(
        <div>
        <h2>User 정보</h2>
        {userData.map(user => (
            <p key={user.id}>{user.name}</p>
            ))}
        <h2>post</h2>
        {Posts.map(post =>(
            <div key={post.id}>
                <p>{post.title}</p>
                <p>{post.body}</p>
            </div>
        ))}
        <h2>게시물 댓글</h2>
        {PostComments.map(comment => (
            <p key={comment.id}>{comment.body}</p>
            ))}
        </div>
    )



}

export default PostComment;



