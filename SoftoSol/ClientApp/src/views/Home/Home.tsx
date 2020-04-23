import * as React from "react";
import { render } from "react-dom";
import NavBar from "../NavBar/NavBar";
import Blog from "../Blog/Blog";

export default () => {
  return (
    <React.Fragment>
      {Blog({
        Title: "How to Connect SqlServer",
        Author: "Arham Anees",
        Date: Date.now().toString(),
        Description: "this is some description",
        Link: "link",
        Image:
          "https://image.shutterstock.com/image-vector/abstract-lines-dots-connect-background-600w-1492332182.jpg",
      })}
      {Blog({
        Title: "How to Connect SqlServer",
        Author: "Arham Anees",
        Date: Date.now().toString(),
        Description: "this is some description",
        Link: "link",
        Image:
          "https://image.shutterstock.com/image-vector/abstract-lines-dots-connect-background-600w-1492332182.jpg",
      })}
      {Blog({
        Title: "How to Connect SqlServer",
        Author: "Arham Anees",
        Date: "jan 25,2020",
        Description: "this is some description",
        Link: "link",
        Image:
          "https://image.shutterstock.com/image-vector/abstract-lines-dots-connect-background-600w-1492332182.jpg",
      })}
    </React.Fragment>
  );
};
