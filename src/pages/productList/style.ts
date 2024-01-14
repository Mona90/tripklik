import styled from "styled-components";
import { fixedColor } from "../../Utilites";

export const Section = styled.section`
padding:50px 0;
text-align:center;
padding: 0 30px;
.categories{
    list-style: none;
    display: flex;
    gap: 25px;
    cursor: pointer;
    justify-content: center;
    padding: 0;
    text-transform: capitalize;
    margin-bottom: 40px;
}
`
export const Grid = styled.div`
display: flex;
flex-wrap: wrap;
justify-content:space-between;
.card{
    overflow:hidden;
    width: 22%;
    position: relative;
    .wishlist-icon{
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: -30px;
        z-index: 5;
        width: 30px;
        height: 30px;
        border: 1px solid #ebebeb;
        text-align: center;
        border-radius: 50%;
        transition:all 0.3s ease-in-out;
        display: flex;
        justify-content: center;
        align-items: center;
        svg{
            vertical-align:middle;
        }
        &:hover{
            background:${fixedColor};
            color:#FFF;
            border-color:${fixedColor};
        }
    }
    .card-img-top{
        transition: all 0.3s ease-in-out;
        max-width: 100%;
        padding: 11px;
    height: 200px;
    }
    .card-body{
        text-align:center;
        h4{
            font-size: 0.9rem;
            font-weight: 400;
        }
        .add_to_cart{
            display: block;
            width: 100%;
            background: none;
            border: 1px solid #CCC;
            padding: 6px;
            color: #666;
            text-transform: uppercase;
            font-size: 13px;
            position: relative;
            opacity: 0;
            transition: all 0.3s ease-in-out;
            transform: translateY(100%);
        }
    }
    &:hover{
        border-radius: 5px;
        box-shadow: 0 5px 20px rgb(0 0 0 / 5%);
        position: relative;
        z-index: 10;
        overflow: hidden;
        transition: all 0.3s ease-in-out;
        .wishlist-icon{
            right:10px;
        }
        .add_to_cart{
            opacity:1;
            transform: translateY(0);
            &:hover{
                background:${fixedColor};
                border-color:${fixedColor};
                color:#FFF;
            }
        }
    }
}
`