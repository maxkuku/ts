import { Product } from './product.js';
export class Notepad extends Product {
    // name: string
    constructor(name, price) {
        super(price);
        this.name = name;
        this.price = price;
        // this.name = name
    }
    getProductDescription() {
        return `Notepad ${this.name} - ${this.price}`;
    }
    calculateDiscount() {
        return 0;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZXBhZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ub3RlcGFkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxjQUFjLENBQUE7QUFJdEMsTUFBTSxPQUFPLE9BQVEsU0FBUSxPQUFPO0lBQ2xDLGVBQWU7SUFFZixZQUNTLElBQVksRUFDWixLQUFhO1FBRXBCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUhMLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBR3BCLG1CQUFtQjtJQUNyQixDQUFDO0lBRUQscUJBQXFCO1FBQ25CLE9BQU8sV0FBVyxJQUFJLENBQUMsSUFBSSxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUMvQyxDQUFDO0lBRVMsaUJBQWlCO1FBQ3pCLE9BQU8sQ0FBQyxDQUFBO0lBQ1YsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4vcHJvZHVjdC5qcydcbmltcG9ydCB7IFB1cmNoYXNlQ29udGV4dCB9IGZyb20gJy4vcHVyY2hhc2UtY29udGV4dC5qcydcblxuXG5leHBvcnQgY2xhc3MgTm90ZXBhZCBleHRlbmRzIFByb2R1Y3Qge1xuICAvLyBuYW1lOiBzdHJpbmdcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nLCBcbiAgICBwdWJsaWMgcHJpY2U6IG51bWJlclxuICApIHtcbiAgICBzdXBlcihwcmljZSlcbiAgICAvLyB0aGlzLm5hbWUgPSBuYW1lXG4gIH1cblxuICBnZXRQcm9kdWN0RGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYE5vdGVwYWQgJHt0aGlzLm5hbWV9IC0gJHt0aGlzLnByaWNlfWBcbiAgfVxuXG4gIHByb3RlY3RlZCBjYWxjdWxhdGVEaXNjb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiAwXG4gIH1cbn0iXX0=