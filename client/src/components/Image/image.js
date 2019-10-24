import React from 'react';
import styled from 'styled-components'

const Image = (props) => {
    console.log('Image props', props)
    const Tile = styled.div`
    background-image: url('${props => props.primaryimageurl}'), url('${props => props.primaryimageurl}');
	background-size: cover, 5% 5%;
    background-position: center;
    height:60vh;
    width: 60%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap: wrap;
    vertical-align: center;
    border-top: 15px solid #c2fe59;
    padding: 0;
    margin-left: 25rem
    `;

    const Caption = styled.div`
    text-align: right;
    max-width:50%;
    `

    const Title = styled.p`
    background-color: #c2fe59;
    padding-right: 5px;
    `;

    return(
        <div>
            <Tile primaryimageurl={props.primaryimageurl}>
                <Caption><Title>{props.title} <a href={props.url}>{props.objectnumber}</a></Title></Caption>
            </Tile>
        </div>
    )
}

export default Image