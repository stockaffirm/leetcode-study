window.PROBLEM = {
 "id": "2489",
 "title": "Number of Substrings With Fixed Ratio",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "'0110011', ratio 1:2: four substrings have exactly one 0 per two 1s → 4.",
 "idea": "A substring has zeros:ones = num1:num2 exactly when zeros·num2 = ones·num1. Let key(i) = zeros·num2 − ones·num1 over the prefix of length i. A substring qualifies when the keys at its ends are equal. Count equal key pairs with a hash map (substrings with only zeros or only ones never match because num1, num2 > 0).",
 "input": "s = \"0110011\", num1 = 1, num2 = 2",
 "output": "4",
 "notes": [],
 "best": "A substring has zeros:ones = num1:num2 exactly when zeros·num2 = ones·num1. Let key(i) = zeros·num2 − ones·num1 over the prefix of length i. A substring qualifies when the keys at its ends are equal. Count equal key pairs with a hash map (substrings with only zeros or only ones never match because num1, num2 > 0).",
 "variants": [
  {
   "name": "Equal prefix keys z·num2 − o·num1",
   "code": "class Solution:\n    def fixedRatio(self, s, num1, num2):\n        seen = Counter({0: 1})\n        z = o = 0\n        res = 0\n        for c in s:\n            if c == '0':\n                z += 1\n            else:\n                o += 1\n            key = z * num2 - o * num1\n            res += seen[key]\n            seen[key] += 1\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A substring has zeros:ones = num1:num2 exactly when zeros·num2 = ones·num1. Let key(i) = zeros·num2 − ones·num1 over the prefix of length i. A substring qualifies when the keys at its ends are equal. Count equal key pairs with a hash map (substrings with only zeros or only ones never match because num1, num2 > 0).",
   "frames": []
  }
 ]
};
