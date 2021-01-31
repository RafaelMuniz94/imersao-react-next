import styled from 'styled-components'

interface IQuestion{
    image: string,
    image_title: string,
}

let Image = styled.img`
    width:100%;
    height: 150px;
    object-fit: cover;
`

export default function ImageContainer({image,image_title}:IQuestion){

    return(
        <Image
        alt={image_title}
        src={image ? image: "https://placehold.it/400x400"}/>
    )
}