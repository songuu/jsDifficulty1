// 去除字符串中出现次数最少的字符
// 例如：输入：'ababac' 输出：'ababac'
// 例如：输入：'ababaccc' 输出：'ababac'
// 例如：输入：'ababacccc' 输出：'ababac'
// 例如：输入：'ababaccccc' 输出：'ababac'
// 例如：输入：'ababacccccc' 输出：'ababac'

// 思路：先统计每个字符出现的次数，然后找出出现次数最少的字符，最后再遍历一遍字符串，把出现次数最少的字符去掉
const removeMinChar = (str) => {
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  let minCount = str.length;
  for (const [key, value] of map) {
    minCount = Math.min(minCount, value);
  }

  /* return str.replace(
    new RegExp(
      `[${[...map]
        .filter(([key, value]) => value === minCount)
        .map(([key, value]) => key)
        .join("")}]`,
      "g"
    ),
    ""
  ); */
  /* let result = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (map.get(char) !== minCount) {
      result += char;
    }                    
  }
  return result; */
  return [...str].filter((char) => map.get(char) !== minCount).join("");
};

// 测试
console.log(removeMinChar("ababac")); // ababac
console.log(removeMinChar("ababaccc")); // ababac