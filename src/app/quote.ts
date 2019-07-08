export class Quote {
    public showDetail: boolean;
    constructor(public id: number, public name: string, public quoteOffer: string, public quoteDetail: string) {
        this.showDetail = false;
    }
}






