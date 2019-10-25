import React from 'react';
// import { useSelector } from 'react-redux'
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
    flex-wrap: nowrap;
    vertical-align: center;
    border-top: 15px solid ;
    padding: 0;
    margin-left: 25rem
    `;

    const Caption = styled.div`
    text-align: justify;
    max-width:50%;
    margin-left: 25rem
    `

    const Title = styled.p`
    background-color: none;
    padding-right: 5px;
    `;

    return(
        <div>
            <Tile primaryimageurl={props.primaryimageurl} />
                <Caption><Title>{`Title: ${props.title}`} <br /> {`Creditline: ${props.creditline}`}<br /> {props.period} {props.culture} <br /> {`Medium:${props.medium}`}<a target='_blank' rel='noopener noreferrer' href={props.url}>{props.objectnumber}</a></Title></Caption>
           
        </div>
    )
}

export default Image