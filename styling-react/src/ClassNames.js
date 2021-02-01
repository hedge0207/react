import classNames from "classnames";

classNames("one", "two"); // one two
classNames("one", { two: true }); // one two
classNames("one", { two: false }); // one
classNames("one", ["two", "three"]); // one two three

const myClass = "Hello";
classNames("one", myClass); // one Hello
