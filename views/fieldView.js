import AppleView from './appleView.js';

export default class FieldView {    
    static cellWidth = 20;
    static cellHeight = 20;
    static centeringShiftX;
    static centeringShiftY;

    
    static recalculateDrawingSizes(screenWidth, screenHeight, field) {
        const fieldPixelWidth = field.width * this.cellWidth;
        const fieldPixelHeight = field.height * this.cellWidth;
        this.centeringShiftX = (screenWidth - fieldPixelWidth) / 2;
        this.centeringShiftY = (screenHeight - fieldPixelHeight) / 2;
    }

    static draw(ctx, field) {
        for (let i = 0; i < filed.height; i++) {
            for (let j = 0; j < field.width; j++) {
                const cellX = centeringShiftX + j * cellWidth;
                const cellY = centeringShiftY + i * cellHeight;
            
                ctx.fillStyle = field.color;
                ctx.beginPath();
                ctx.rect(cellX, cellY, cellWidth - 1, cellHeight - 1);
                ctx.fill();
            }
        }

        if (field.apple) {
            AppleView.draw(ctx, filed.apple)
        }
    }
}