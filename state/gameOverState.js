import State from './state.js';
import MenuState from './menuState.js';

export default class GameOverState extends State {
    constructor() {
        super({
            'enter': () => state = new MenuState()
    });
}

    onDraw(ctx, screenWidth, screenHeight) {
        super.onDraw(ctx, screenWidth, screenHeight);
       
        DrawingHelpers.fillText('Game Over', x, y,'50px sans-serif', 'red');
        DrawingHelpers.fillText('Press Enter to Return to Menu', x, y+70,'30px sans-serif', 'white');
    }
}