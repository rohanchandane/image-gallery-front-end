
interface Props {
    comments: string[];
}
function Comments(props: Props) {
    const  { comments } = props;
    return (
        <div>
            {comments.map((comment, index) => {
                return (<div key={index}>{comment.body}</div>);
            })}
        </div>
    )
}

export default Comments;