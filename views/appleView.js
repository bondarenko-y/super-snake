import FieldView from './fieldView.js';

export default class AppleView {
    static draw(ctx, apple) {
        const cellX = FieldView.centeringShiftX + apple.x * FieldView.cellWidth;
        const cellY = FieldView.centeringShiftY + apple.y * FieldView.cellHeight;
    
        ctx.fillStyle = apple.color;
        ctx.beginPath();
        ctx.rect(cellX, cellY, FieldView.cellWidth - 1, FieldView.cellHeight - 1);
        ctx.fill();
    }
}