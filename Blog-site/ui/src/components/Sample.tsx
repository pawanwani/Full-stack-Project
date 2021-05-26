import React, { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "./actions/blogs";
interface Props {}

export default function Sample({}: Props): ReactElement {
  const dispatch = useDispatch();
  const blogs = useSelector((state: any) => state.blogs);
  useEffect(() => {
    dispatch(getdata());
  }, [dispatch]);
  console.log(blogs);
  return (
    <div>
      <h1>hi there!</h1>
    </div>
  );
}
