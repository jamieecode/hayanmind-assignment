import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { CommentContainer, Comment, CommentBody } from "./CommentCardStyles";

const CommentCard = () => {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const pageEnd = useRef();

  const fetchComments = async (page) => {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/comments?_page=${page}&_limit=10`
      )
      .then(
        (response) => {
          const results = response.data;
          setComments((prev) => [...prev, ...results]);
          setLoading(true);
        },
        (error) => console.log(error)
      );
  };

  const loadMoreComments = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchComments(page);
  }, [page]);

  let count = 1;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entry) => {
        if (entry[0].isIntersecting) {
          count++;
          loadMoreComments();
        }
      },
      { threshold: 1 }
    );

    if (loading) {
      observer.observe(pageEnd.current);
    }
    return () => {
      if (count >= 50) observer.disconnect();
    };
  }, [loading, count]);

  return (
    <>
      {comments.map((comment) => (
        <CommentContainer key={comment.id}>
          <Comment>
            <div>
              Comment Id<span>{comment.id}</span>
            </div>
          </Comment>
          <Comment>
            <div>
              Email<span>{comment.email}</span>
            </div>
          </Comment>
          <CommentBody>
            <div>Comment</div>
            <p>{comment.body}</p>
          </CommentBody>
        </CommentContainer>
      ))}
      <div ref={pageEnd}></div>
    </>
  );
};

export default CommentCard;
