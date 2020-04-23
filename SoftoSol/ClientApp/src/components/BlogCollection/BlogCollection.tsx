import * as React from "react";
import Blog from "../../views/Blog/Blog";

export interface BlogsCollectionProps {}

export interface BlogsCollectionState {}

class BlogsCollection extends React.Component<
  BlogsCollectionProps,
  BlogsCollectionState
> {
  render() {
    return (
      <React.Fragment>
        {" "}
        <p>Blog collection</p>
        <div className="row">
          {/* {Blog()} 
            {Blog()} 
            {Blog()}  */}
        </div>
      </React.Fragment>
    );
  }
}

export default BlogsCollection;
