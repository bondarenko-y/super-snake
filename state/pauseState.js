import State from './state.js';

export default class PauseState extends State {
    constructor(previousState) {
        super({
            ' ': () => state = previousState() 
        });
    }
    onDraw(ctx, screenWidth, screenHeight) {
        super.onDraw(ctx, screenWidth, screenHeight);
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center';
        ctx.font = '50px sans-serif';
        ctx.fillText(`PAUSE`, screenWidth / 2, screenHeight / 2)
        ctx.font = '30px sans-serif';
        ctx.fillText(`Press Space to Continue`, screenWidth / 2, screenHeight / 2 + 70);
    }
}
