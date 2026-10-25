window.PROBLEM = {
 "id": "2197",
 "title": "Replace Non-Coprime Numbers in Array",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "You get a list of numbers. While two NEIGHBOURING numbers are not coprime (they share a divisor greater than 1), replace them by their least common multiple. Repeat until no such neighbours exist and return the final list (it does not depend on the order of merges). Example: [6,4,3,2,7,6,2] → [12,7,6].",
 "why": "While two neighbouring numbers share a factor greater than 1 (gcd > 1), replace them by their least common multiple. Return the final array.",
 "idea": "Push numbers on a stack; while the new number and the top are not coprime, pop the top and replace the new number by their lcm; then push it. The result does not depend on the merge order.",
 "input": "[6,4,3,2,7,6,2]",
 "output": "[12,7,6]",
 "notes": [],
 "best": "Push numbers on a stack; while the new number and the top are not coprime, pop the top and replace the new number by their lcm; then push it. The result does not depend on the merge order.",
 "variants": [
  {
   "name": "Stack with gcd/lcm merging",
   "code": "class Solution:\n    def replaceNonCoprimes(self, nums):\n        st = []\n        for x in nums:\n            while st and gcd(st[-1], x) > 1:\n                x = lcm(st.pop(), x)\n            st.append(x)\n        return st",
   "time": "O(n log V)",
   "space": "O(n)",
   "explain": "Push numbers on a stack; while the new number and the top are not coprime, pop the top and replace the new number by their lcm; then push it. The result does not depend on the merge order.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Repeat full passes",
   "tag": "Brute force",
   "code": "class Solution:\n    def replaceNonCoprimes(self, nums):\n        a = list(nums)\n        changed = True\n        while changed:\n            changed = False\n            for i in range(len(a) - 1):\n                if gcd(a[i], a[i + 1]) > 1:\n                    a[i:i + 2] = [lcm(a[i], a[i + 1])]\n                    changed = True\n                    break\n        return a",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Scan for any non-coprime neighbours, merge them and start again.",
   "frames": [],
   "alt": true
  }
 ]
};
