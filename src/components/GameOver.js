import { Fragment } from "react"

function GameOver(props) {

    return (props.show ?
        <div id="gameOver">
            <div>
                parabéns, você completou o jogo!
            </div>

            <button id="restart" onClick={props.handleRestart}>jogar novamente</button>
        </div> : <Fragment />
    )

}


export default GameOver