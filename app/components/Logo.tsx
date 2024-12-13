import { css } from 'styled-system/css'

const Logo = () => {
  return (
    <div className={css({height:"100px",   display: "flex", justifyContent: "center", alignItems: "center" })}>
        <div className={css({width:"200px",border:"2px solid black",textAlign:"center"}) } >
            <p>Hello Im the Logo</p>
        </div>
    </div>
  )
}

export default Logo