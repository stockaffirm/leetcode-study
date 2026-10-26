window.PROBLEM = {
 "id": "2197",
 "title": "Replace Non-Coprime Numbers in Array",
 "level": "Hard",
 "topic": "Stack / Monotonic Stack",
 "question": "",
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
   "frames": []
  }
 ]
};
