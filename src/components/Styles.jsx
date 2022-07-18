import styled from "styled-components";

export const Tarjeta = styled.div`
        font-family: 'Montserrat', sans-serif;
        width: 300px;
        height: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1vh 0.5vw;
        border: 2px solid #f4f3fe;
        background-color: #f4f3ee;
        margin: 20px;

        h2{
            margin: 0px;
            text-transform: uppercase;
        }

        button {
            background-color: #ED6A5E;
            border-radius: 4px;
            color: white;
        }

        .button {
            align-self: flex-end;
            background: transparent;
        }

        button:hover{
            color: white;
            background-color: #FC440F;
        }

        .details {
            font-size: 14px;
        }
        
        .bottomBox {
            max-width: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .image {
            max-width: 50%;
        }
        
        .temps {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
    `