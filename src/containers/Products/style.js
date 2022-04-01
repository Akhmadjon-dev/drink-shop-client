import styled from "styled-components"
import colors from "../../style/colors"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    .product__head {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .product__title{
        font-size: 2rem;
        color: ${colors.text}
    }

    .product__search {
        display: flex;
        width: 400px;
        align-items: center;
        border: 1px solid ${colors.sidebar_border};
        border-radius: 5px;
        input{
            border: none;
            padding: 0.5rem;
            width: 100%;
            font-size: 1rem;
            background: transparent ;
        }
        button{
            display: none;
        }
    }
    .product__actions{
        display: flex;
        align-items: center;
        span{
            margin-left: 5px;
        }
        svg{
            font-size: 20px;
        }
    }
    .product__toggle{
        width: 100px;
    }
    .product__toggle-grid{
        display: flex;
        align-items: center;
    }
`

export default Wrapper