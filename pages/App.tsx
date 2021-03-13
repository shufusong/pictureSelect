import React, { useRef, useEffect, useState, useCallback } from "react";
import { PictureSelect } from "./PictureSelect";

const pictures = [
  {
    id: "1",
    name: "foo",
    url:
      "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ",
  },
  {
    id: "2",
    name: "foo",
    url:
      "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ",
  },
  {
    id: "3",
    name: "foo",
    url:
      "https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ",
  },
];
const { Fragment } = React;
export default () => {
  const [value, setValue] = React.useState([]);
  return (
    <Fragment>
      <PictureSelect pictures={pictures} value={value} setValue={setValue} />
      <div style={{marginTop: 24}}>
        你已经选择了: <span style={{ color: "#f00" }}>{value.join(",")}</span>
      </div>
    </Fragment>
  );
};
