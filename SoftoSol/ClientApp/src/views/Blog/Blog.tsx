import * as React from "react";

import "./Blog.scss";
import { Link } from "react-router-dom";
const styles = {
  image: {
    Height: "50px",
    backgroundColor: "blue",
  },
  card: {
    borderRadius: "10px",
    border: "1px solid grey",
    color: "black",
  },
};

export interface BlogProps {
  Title: string;
  Author: string;
  Date: string;
  Description: string;
  Link: string;
  Image: string;
}

export default function Blog(props: BlogProps) {
  return (
    <div className="blog">
      <img src={props.Image} alt="img" className="rounded-circle" />
      <div className="description">
        <h4>{props.Title}</h4>
        <div className="d-flex justify-content-between">
          <h6>{props.Author}</h6>
          <span className="d-none">comments</span>
          <span className="font-small">{props.Date}</span>
        </div>
        <div className="font-small">{props.Description}</div>
        <Link to={props.Link} className="read-more">
          Read More
        </Link>
      </div>
    </div>
    //     <div className="col-md-4 p-0">
    // <Link to="/blogs/blog">
    //     <div className="m-1 p-1" style={styles.card}>
    //     <div className="" style={styles.image}><img height="100"/></div>
    //     <div className="p-1">
    //         <h4>Name</h4>
    //         <div className="d-flex justify-content-between">
    //         <h6>Author</h6>
    //         <span>date </span>
    //         </div>
    //         <span>first 100 words</span>
    //         <div className="bg-light d-flex justify-content-between px-3 py-1">
    //             <span>likes</span>
    //             <span>comments</span>
    //         </div>
    //     </div>
    //     </div>
    // </Link>
    // </div>
  );
}
