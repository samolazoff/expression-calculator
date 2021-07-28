function eval() {
    // Do not use eval!!!
    return;
}
function expressionCalculator(expr) {
  expr=expr.replace(/\s/g,'');
  function delition(expr){
    if(/\d/.test(expr)){
      while(/\//.test(expr)){
        let arr=expr.match(/(\d+\.\d+|\d+)\/(\-?\d+\.\d+|\-?\d+)/);
        if(arr[2]==0){
        throw "TypeError: Division by zero.";
     }
        expr=expr.replace(/(\d+\.\d+|\d+)\/(\-?\d+\.\d+|\-?\d+)/,Number(arr[1])/Number(arr[2]))
      }
    }
    return expr.replace(/\-\-/g,'+')
  }
  function mult(expr){
    if(/\d/.test(expr)){
      while(/\*/.test(expr)){
        let arr=expr.match(/(\d+\.\d+|\d+)\*(\-?\d+\.\d+|\-?\d+)/);
        expr=expr.replace(/(\d+\.\d+|\d+)\*(\-?\d+\.\d+|\-?\d+)/,Number(arr[1])*Number(arr[2]))
    }
  }
  
  return expr.replace(/\-\-/g,'+')
  }
  function sum(expr){
    if(/\d/.test(expr)){
      let rez=0;
      expr.match(/\-?\d+\.\d+|\-?\d+/g)
        .forEach(element => {
            rez+=Number(element)
          });
      expr=rez;
      }
      return expr;
  }
  function action(expr){
    return sum(mult(delition(expr)));
  }
  function brck(expr){
    while(/\(.+\)/.test(expr)){
      expr.match(/\(([^()]+)\)/)
        expr=expr.replace(/\(([^()]+)\)/,action(expr.match(/\(([^()]+)\)/)[0].replace(/\(/,'').replace(/\)/,'')))
    }
    return expr
  }
  function run(expr){
    if(expr.match(/\(/g)!=null&&expr.match(/\)/g)!=null){
      if(expr.match(/\(/g).length==expr.match(/\)/g).length){
        return action(brck(expr));
      }else{
        throw "ExpressionError: Brackets must be paired";
      }
    }else{if(expr.match(/\(/g)===null&&expr.match(/\)/g)==null){
          return action(expr);
    }else{
      throw "ExpressionError: Brackets must be paired";
    };
  }
  }
  if(/\d/.test(run(expr))){
    return Number(run(expr));
  }else{ return run(expr);}
}
module.exports = {
    expressionCalculator
}