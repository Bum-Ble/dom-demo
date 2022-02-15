const div = dom.create("<div>new!</div>")
// console.log(div);

// dom.after(test,div)
// dom.before(test,div)
// dom.append(test,div)
// dom.wrap(test,div)

// dom.remove(test)

// dom.empty(test2)

// console.log(dom.attr(test2, 'title'));
// console.log(dom.attr(test2, 'title'));
// dom.attr(test2, 'title','hihihihihihi')

// console.log(dom.text(test2));
// dom.text(test2_1, 666)

// dom.html(test2,'hello!!!!!')

// console.log(dom.style(test4,'color'));
dom.style(test3,'color','red')
dom.style(test3,{border: '1px solid black'})

dom.class.add(test4, 'fl')

// console.log(dom.class.has(test5,"test55"));

let handleClick = () => {
  console.log("click!!!");
}
dom.class.on(test5, "click", handleClick)
// dom.class.off(test5, "click", handleClick)

// console.log(dom.find("#test6_1")[0]);

let test6 = dom.find("#test6_2")[0]
// console.log(dom.find(".testFind", test6)[0]);

// console.log(dom.parent(test7));
// console.log(dom.children(test07));

// console.log(dom.siblings(test7));
// console.log(dom.next(test8));
console.log(dom.previous(test8));

const t = dom.children(test07)
dom.each(t, (n) => {
  dom.style(n,'color','blue')
})

console.log(dom.index(test9));