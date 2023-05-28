import "./comments.scss";

import Avatar from "../../assets/avatar.webp";

interface Comment {
  id: string;
  desc: string;
  name: string;
  userId: string;
  profilePicture: string;
}

const Comments = () => {
  //Temporary
  const comments: Comment[] = [
    {
      id: "1",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: "1",
      profilePicture:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: "2",
      profilePicture:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={Avatar} alt="" />
        <input type="text" placeholder="Write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => {
        return (
          <div className="comment">
            <img src={comment.profilePicture} alt="" />
            <div className="info">
              <span>{comment.name}</span>
              <span>{comment.desc}</span>
            </div>
            <div className="date">1 hour ago</div>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
