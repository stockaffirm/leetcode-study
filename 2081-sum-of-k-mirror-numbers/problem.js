window.PROBLEM = {
 "id": "2081",
 "title": "Sum of k-Mirror Numbers",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "k=2, n=5: the smallest numbers that are palindromes in base 10 and base 2 are 1, 3, 5, 7, 9 → 25.",
 "idea": "Instead of testing every integer, generate base-10 palindromes in increasing order (by length, then by their first half mirrored). For each, check whether its base-k digits form a palindrome, collect the first n that do, and add them up.",
 "input": "k = 2, n = 5",
 "output": "25",
 "notes": [],
 "best": "Instead of testing every integer, generate base-10 palindromes in increasing order (by length, then by their first half mirrored). For each, check whether its base-k digits form a palindrome, collect the first n that do, and add them up.",
 "variants": [
  {
   "name": "Generate decimal palindromes, test base k",
   "code": "class Solution:\n    def kMirror(self, k, n):\n        def pal_in_base(x):\n            d = []\n            while x:\n                d.append(x % k)\n                x //= k\n            return d == d[::-1]\n        found = []\n        length = 1\n        while len(found) < n:\n            half = (length + 1) // 2\n            for h in range(10 ** (half - 1), 10 ** half):\n                s = str(h)\n                p = int(s + s[::-1][length % 2:])\n                if pal_in_base(p):\n                    found.append(p)\n                    if len(found) == n:\n                        break\n            length += 1\n        return sum(found)",
   "time": "depends on n",
   "space": "O(1)",
   "explain": "Instead of testing every integer, generate base-10 palindromes in increasing order (by length, then by their first half mirrored). For each, check whether its base-k digits form a palindrome, collect the first n that do, and add them up.",
   "frames": []
  }
 ]
};
