import './Post.css'
export default function Post({post}){
    const {title, userId, id, body }=post
return(
    <div className='post'>
        <h2>
            Title:{title}
        </h2>
        <p>User ID: {userId}</p>
        <p> ID:{id}</p>
        <p>{body}</p>
    </div>
)
}