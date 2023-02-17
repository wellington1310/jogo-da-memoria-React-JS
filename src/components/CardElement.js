
function CardElement(props) {

    return (
        <div onClick={() => { props.handleFlip(props.card) }} id={props.card.id} className={props.card.flipped ? "card flip" : "card"}>

            <div className="card_front">
                <img className="icon"
                    src={`assets/imagens/${props.card.icon}.png`}
                    alt={props.card.icon}></img>
            </div>

            <div className="card_back">
                {"</>"}
            </div>

        </div>
    )

}

export default CardElement;