const Card = (props) => {
    return (
        <div className='card'>
            <span class="material-symbols-outlined">close</span>
            <p id='cardName'>Name: {props.name}</p>
            <p id='cardType'>Type: {props.type}</p>
            <img src={props.img} alt="picture"  />
            <p id='cardLikes'><span class="material-symbols-outlined">thumb_up</span>
            Placeholder for likes
            <span class="material-symbols-outlined">thumb_down</span></p>

        </div>
    )
}

export default Card;

