function eval() {
    // Do not use eval!!!
    return;
}
function expressionCalculator(expr) {
    expr=expr.replace(/\s/g,'');
    function delition(expr){
      while(/\//.test(expr)){
        let arr=expr.match(/(\-?\d+\.\d+|\-?\d+)\/(\-?\d+\.\d+|\-?\d+)/);
        if(arr[2]==0){
        expr="TypeError: Division by zero.";
        break;}
        expr=expr.replace(/(\-?\d+\.\d+|\-?\d+)\/(\-?\d+\.\d+|\-?\d+)/,Number(arr[1])/Number(arr[2]))
    }
    return expr
    }
    function mult(expr){
      while(/\*/.test(expr)){
        let arr=expr.match(/(\-?\d+\.\d+|\-?\d+)\*(\-?\d+\.\d+|\-?\d+)/);
        expr=expr.replace(/(\-?\d+\.\d+|\-?\d+)\*(\-?\d+\.\d+|\-?\d+)/,Number(arr[1])*Number(arr[2]))
    }
    return expr
    }
    function sum(expr){
      while(/\+/.test(expr)){
        let arr=expr.match(/(\-?\d+\.\d+|\-?\d+)\+(\-?\d+\.\d+|\-?\d+)/);
        expr=expr.replace(/(\-?\d+\.\d+|\-?\d+)\+(\-?\d+\.\d+|\-?\d+)/,Number(arr[1])+Number(arr[2]))
    }
    return expr
    }
    function minus(expr){
      while(/\d\-\d/.test(expr)){
        let arr=expr.match(/(\-?\d+\.\d+|\-?\d+)\-(\-?\d+\.\d+|\-?\d+)/);
        expr=expr.replace(/(\-?\d+\.\d+|\-?\d+)\-(\-?\d+\.\d+|\-?\d+)/,Number(arr[1])-Number(arr[2]))
    }
    return expr
    }
    function action(expr){
      return minus(sum(mult(delition(expr))))
    }
    function brck(expr){
      while(/\(.+\)/.test(expr)){
        //   let wrd=expr.match(/\(.+\)/)[0];
        //   wrd=wrd
        expr=expr.replace(/\(.+\)/,action(expr.match(/\(.+\)/)[0].replace(/\(/g,'').replace(/\)/g,'')))
      }
      return expr
    }
    function run(expr){
      if(expr.match(/\(/g)!=null&&expr.match(/\)/g)!=null){
        if(expr.match(/\(/g).length==expr.match(/\)/g).length){
          return action(brck(expr));
        }else{
          return "ExpressionError: Brackets must be paired";
        }
      }else{if(expr.match(/\(/g)===null||expr.match==null){
            return action(expr);
      }else{
        return "ExpressionError: Brackets must be paired";
      };
    }
    }
    return /\d/.test(run(expr))?Number(run(expr)):run(expr)
}
module.exports = {
    expressionCalculator
}