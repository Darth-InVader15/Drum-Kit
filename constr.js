//for testing constructor fun

function Node(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;

    //Objects can also have functions
    this.alertUsr = function(){
        alert("You have been alerted!")
    }
}

let node1 = new Node(0, null, null);
let node2 = new Node(10, null, node1);
node1.next = node2;


let node3 = node1.next;
console.log(node3.data);
node1.alertUsr();   //For calling these fn, () are used
