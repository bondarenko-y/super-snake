import FieldView from './fieldView.js';

export default class SnakeView {
    static draw(ctx, snake) {
        for (const segment of snake.body) {
        const cellX = FieldView.centeringShiftX + segment.x * FieldView.cellWidth;
        const cellY = FieldView.centeringShiftY + segment.y * FieldView.cellHeight;
        
        ctx.fillStyle = snake.color;
        ctx.beginPath();
        ctx.rect(cellX, cellY, FieldView.cellWidth - 1, FieldView.cellHeight - 1);
        ctx.fill();
        }
    }
}