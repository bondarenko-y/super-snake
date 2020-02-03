import State from './state.js';
import FieldModel from '../gameObjects/fieldModel.js';
import SnakeModel from '../gameObjects/snakeModel.js';
import GameOverState from './gameOverState.js';
import PauseState from './pauseState.js';
import FieldView from '../views/fieldView.js';
import SnakeView from '../views/snakeView.js';

export default class GameState extends State {
    constructor() {
        let field = new FieldModel(25, 25);
        let snake = new SnakeModel (0, 0, 3, field);
        field.createApple(snake);
        
        super({
            'w' : () =>  snake.turnUp(),
            'a' : () =>  snake.turnLeft(),
            's' : () =>  snake.turnDown(),
            'd' : () =>  snake.turnRight(),
            ' ' : () => state = new PauseState(this)
        });

        this._field = field;
        this._snake = snake;
    }

    onDraw(ctx, screenWidth, screenHeight) {
        super.onDraw(ctx, screenWidth, screenHeight);


        this._snake.move();  
        if(this._snake.isDead) {
            state = new GameOverState();
        } 
        
        FieldView.recalculateDrawingSizes(screenWidth, screenHeight, this._field);
        FieldView.draw(ctx, this._field);
        SnakeView.draw(ctx, this._snake);

        const[x, y] = 
        ctx.fillStyle = 'white';
        ctx.textAlign = 'center'; 
        ctx.font = '38px sans-serif';
        ctx.fillText(`Score: ${this._snake.score}`, screenWidth / 2, 55);

    }
}