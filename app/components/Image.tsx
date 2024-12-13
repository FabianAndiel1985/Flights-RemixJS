import { Link } from "@remix-run/react";
import { css } from "styled-system/css"

interface ImageProps {
    imgSrc:string;
    imgLink: string;
  }

const Image = ( {imgSrc,imgLink}:ImageProps) => {

  return (
    <>
    <Link to={imgLink}>
        <img
            src={`${imgSrc}`}
            alt="Responsive Example"
            className={css({
                width: "100%",            // Full width of parent container
                maxWidth: "800px",        // Maximum width constraint
                height: "auto",           // Maintain aspect ratio
                margin: "0 auto",         // Center the image
                objectFit: "cover",       // Crop image to fit container
                display: "block",         // Avoid inline spacing issues
            })}
        />
    </Link>
    </>
  )
}

export default Image