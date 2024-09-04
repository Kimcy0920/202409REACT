var items = ["1", "2", "3"];
function printStuff(a, b, c) {
 console.log("Printing: " + a + " " + b + " " + c);
}

printStuff(items[0], items[1], items[2]);
printStuff(...items);

/* 
<Display color={this.props.color}
num={this.props.num}
size={this.props.size}/>

<Display {...this.props} />

Spread Operator: 컴포넌트를 일일히 다 거쳐서 전달해야하는데 한번에 보낼 수 있게 바꿈.
*/