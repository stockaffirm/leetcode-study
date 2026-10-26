window.PROBLEM = {
 "id": "1415",
 "title": "The k-th Lexicographical String of All Happy Strings of Length n",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "A happy string uses only a, b, c and has no two equal neighbours. List all happy strings of length n in alphabetical order and return the k-th (or '' if there are fewer). Example: n=3, k=3 → 'aca'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Generate all happy strings",
   "tag": "Brute force",
   "code": "class Solution:\n    def getHappyString(self, n, k):\n        res = []\n        def go(cur):\n            if len(cur) == n:\n                res.append(cur)\n                return\n            for c in 'abc':\n                if not cur or cur[-1] != c:\n                    go(cur + c)\n        go(\"\")\n        return res[k - 1] if k <= len(res) else \"\"",
   "time": "O(3·2ⁿ)",
   "space": "O(2ⁿ)",
   "explain": "Build the happy strings in order and index the k-th.",
   "frames": [],
   "alt": true
  }
 ]
};
