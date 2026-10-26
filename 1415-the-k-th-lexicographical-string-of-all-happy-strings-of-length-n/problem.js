window.PROBLEM = {
 "id": "1415",
 "title": "The k-th Lexicographical String of All Happy Strings of Length n",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
 "why": "n=3: the happy strings in order start 'aba', 'abc', 'aca' … the 3rd is 'aca'.",
 "idea": "A happy string uses a, b, c with no two equal neighbours. For length n there are 3·2^(n−1) of them: after choosing the first letter each remaining position has 2 choices. Pick each letter greedily: the number of strings beginning with a given prefix is 2^(remaining), so subtract blocks until k falls into one.",
 "input": "n = 3, k = 3",
 "output": "\"aca\"",
 "notes": [],
 "best": "A happy string uses a, b, c with no two equal neighbours. For length n there are 3·2^(n−1) of them: after choosing the first letter each remaining position has 2 choices. Pick each letter greedily: the number of strings beginning with a given prefix is 2^(remaining), so subtract blocks until k falls into one.",
 "variants": [
  {
   "name": "Count branches to skip",
   "code": "class Solution:\n    def getHappyString(self, n, k):\n        total = 3 * 2 ** (n - 1)\n        if k > total:\n            return \"\"\n        k -= 1\n        res = []\n        block = total // 3\n        for i in range(n):\n            choices = [c for c in 'abc' if not res or c != res[-1]]\n            idx, k = divmod(k, block)\n            res.append(choices[idx])\n            if i + 1 < n:\n                block //= 2\n        return ''.join(res)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A happy string uses a, b, c with no two equal neighbours. For length n there are 3·2^(n−1) of them: after choosing the first letter each remaining position has 2 choices. Pick each letter greedily: the number of strings beginning with a given prefix is 2^(remaining), so subtract blocks until k falls into one.",
   "frames": []
  }
 ]
};
