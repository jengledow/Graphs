import { Edge } from "./edge";

export class Stack {
    items: Edge[] = [];

    push(e: Edge): void {
        this.items.push(e);
    }

    pop(): Edge | null {
        let e: any = this.items.pop();

        if(e == undefined){
            return null;
        }
        return e;
    }

    isEmpty(): boolean {
        return this.items.length == 0;
    }

    count(): number {
        return this.items.length;
    }

    print(): void {
        console.log("Printing Stack:");
        let res: string = '';

        for(let i = 0; i < this.items.length; i++){
            res += this.items[i].v.name + "\t";
        }

        console.log(res);
    }
}