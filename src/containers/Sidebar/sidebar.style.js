import styled from "styled-components"
import colors from "../../style/colors"


const Container = styled.div`
    width: 220px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: ${colors.sidebar_bg};


    .logo {
        width: 180px;
        height: 150px;
        margin: auto;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
`

export default Container