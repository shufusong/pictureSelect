import React, { useState, useEffect } from "react";
import Styles from "./index.less";

interface picturesType {
  id: string;
  name: string;
  url: string;
}

interface PictureSelectProps {
  pictures: picturesType[];
  value: string[];
  setValue: (param: any) => void;
}
const { Fragment } = React;

const deDuplication = (param: string[]) =>
  Array.from(new Set(param)).sort((a, b) => Number(a) - Number(b));

export const PictureSelect: React.FC<PictureSelectProps> = (props) => {
  const [idLength, setIdLength] = useState(0);
  const { pictures, setValue, value } = props;
  const arrSearch = (id: string) => value.indexOf(id) > -1;
  const allId = pictures.map((item) => item.id);

  useEffect(() => {
    setIdLength(allId.length);
  }, []);

  const haddleAllCheck = () => {
    if (value.length !== idLength) {
      setValue(allId);
    } else {
      setValue([]);
    }
  };

  return (
    <Fragment>
      <div onClick={() => haddleAllCheck()}>
        <span
          className={
            value.length === idLength ? `${Styles.allChecked}` : Styles.allCheck
          }
        />
        <span className={Styles.allcheckText}>以选中{value.length}个文件</span>
      </div>
      <div className={Styles.margin16}>
        {pictures.map((item: picturesType) => (
          <span className={Styles.imageMargin} key={item.id}>
            <span
              className={arrSearch(item.id) ? Styles.checked : Styles.noCheck}
              onClick={() => {
                if (!arrSearch(item.id)) {
                  setValue((pre: string[]) => deDuplication([...pre, item.id]));
                } else {
                  const delValue = value.filter((ele) => ele !== item.id);
                  setValue(delValue);
                }
              }}
            />
            <img src={item.url} />
            <br />
            <span className={Styles.wrap}>{item.url}</span>
          </span>
        ))}
      </div>
    </Fragment>
  );
};
