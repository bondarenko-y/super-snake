import State from './state.js';
import GameState from './gameState.js';

export default class MenuState extends State {
    constructor() {
        super({
            'enter': () => state = new GameState()
        });
    }

    onDraw(ctx, screenWidth, screenHeight) {
        super.onDraw(ctx, screenWidth, screenHeight);
       
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center'; 
        ctx.font = '50px sans-serif';
        ctx.fillText(`Super Snake`, screenWidth / 2, screenHeight / 2);
        ctx.font = '20px sans-serif';
        ctx.fillText('Press Enter to Start', screenWidth / 2, screenHeight / 2 + 70)

    }
}