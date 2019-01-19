// [注释匹配](https://blog.csdn.net/sodino/article/details/51386113)

const commentMath = /(\/\/.*)|(\/\*[\s\S]*?\*\/)/g;
// const argsMath = /function.*?\(([^)]*)\)/; //
const argsMath = /.*?\(([^)]*)\)/;
const argMath = /[a-z0-9A-Z_]+/;

export default function argnames(func: Function): string[] {
    const funcStr = func.toString().replace(commentMath, ""); // 去除注释
    const matchArray = funcStr.match(argsMath) as RegExpMatchArray; // 匹配左右括号获取所有参数
    return matchArray[1]
        .split(",") // 分割参数
        .filter(function(arg: string) {
            return arg.trim(); // 过滤掉空的字段
        })
        .map(function(arg: string) {
            return (arg.match(argMath) as RegExpMatchArray)[0]; // 匹配参数名
        });
}
