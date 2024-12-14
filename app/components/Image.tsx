import { Link } from "@remix-run/react";
import { css } from "styled-system/css";

interface ImageProps {
  imgSrc: string;
  imgLink: string;
}

const Image = ({ imgSrc, imgLink }: ImageProps) => {
  return (
    <>
      <Link to={imgLink}>
        <img
          src={`${imgSrc}`}
          alt="Responsive Example"
          className={css({
            width: "100%",
            maxWidth: "800px",
            height: "auto",
            margin: "0 auto",
            objectFit: "cover", // Crop image to fit container
            display: "block",
          })}
        />
      </Link>
    </>
  );
};

export default Image;
