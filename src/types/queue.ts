import { Edge } from "./edge"

export class Queue {
    items: Edge[] = [];

    add(e: Edge): void {
        this.items = [e, ...this.items];
    }

    isEmpty(): boolean {
        return this.items.length == 0;
    }

    length(): number {
        return this.items.length;
    }

    dequeue(): Edge | undefined {
        
        return this.items.pop();
    }
}