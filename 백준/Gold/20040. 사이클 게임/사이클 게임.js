const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './ex.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(item => item.replace('\r', ''));

class Union {
    constructor (n){
        this.arr = new Array(n).fill(0).map((_,idx) => idx);
    }

    getParent(idx) {
        if(idx === this.arr[idx]) return idx;
        else return (this.arr[idx] = this.getParent(this.arr[idx]));
    }

    unionParent (a,b) {
        a = this.getParent(a);
        b = this.getParent(b);

        if(a>b) this.arr[a] = b;
        else this.arr[b] = a;
    }

    connected (a,b) {
        return this.getParent(a) === this.getParent(b);
    }
}

const [N,M] = input.shift().split(' ').map(Number);
const union = new Union(N);
let answer = 0;

for(let i=0; i<M; i++) {
    const [a,b] = input[i].split(' ').map(Number);
    if(union.connected(a,b)) {
        answer = i+1;
        break;
    } else {
        union.unionParent(a,b)
    }
}

console.log(answer);