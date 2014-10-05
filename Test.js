var translator=require("latextomathml");

var mathmlstr=translator.LaTeXtoMathML("\\sqrt{x}");

console.log(mathmlstr);