import styled from "styled-components";

export const SearchBox = styled.div`
    margin: 30px auto 0px;
    position: relative;
    width: fit-content;
    input{
        width: 500px;
        padding: 10px;
    }
    .dropdown{
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 10;
        background: #FFF;
        padding: 0;
        max-height: 300px;
        overflow-y: scroll;
        margin: 0;
        box-shadow: 1px 1px 5px #CCC;
        a{
            display: flex;
            gap: 10px;
            text-align: start;
            padding: 5px;
            text-decoration: none;
            color: #000;
            img{
                max-width: 50px;
                height: 70px;
            }
        }
    }
`