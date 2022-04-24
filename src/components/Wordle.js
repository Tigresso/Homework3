import '../css/Wordle.css'
import Box from './Box';
import Keyboard from './Keyboard';

function Wordle() {
    return(
<body>

    <div class="game-container">

    <div class="title-container">         
        <header>
            <h1 class="title">WORDLE</h1>
        </header>
    </div>

            <Box />
            <Keyboard />

    </div>   
</body>

    );
}

export default Wordle;