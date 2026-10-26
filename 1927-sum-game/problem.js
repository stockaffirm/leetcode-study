window.PROBLEM = {
 "id": "1927",
 "title": "Sum Game",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "'?3295???' → Bob wins... the answer is true or false.",
 "idea": "The string has even length; the first half is Alice's side and the second half Bob's. Alice moves first and wants the halves to be unequal. If the total number of '?' is odd Alice wins (she makes the last choice). Otherwise Bob wins exactly when the difference of the known sums equals 9 · (question marks in the right half − in the left half) / 2.",
 "input": "num = \"5023\"",
 "output": "false",
 "notes": [],
 "best": "The string has even length; the first half is Alice's side and the second half Bob's. Alice moves first and wants the halves to be unequal. If the total number of '?' is odd Alice wins (she makes the last choice). Otherwise Bob wins exactly when the difference of the known sums equals 9 · (question marks in the right half − in the left half) / 2.",
 "variants": [
  {
   "name": "Compare the question marks and the sum gap",
   "code": "class Solution:\n    def sumGame(self, num):\n        n = len(num)\n        left, right = num[:n // 2], num[n // 2:]\n        sum_l = sum(int(c) for c in left if c != '?')\n        sum_r = sum(int(c) for c in right if c != '?')\n        q_l, q_r = left.count('?'), right.count('?')\n        if (q_l + q_r) % 2:\n            return True\n        return (sum_l - sum_r) * 2 != 9 * (q_r - q_l)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The string has even length; the first half is Alice's side and the second half Bob's. Alice moves first and wants the halves to be unequal. If the total number of '?' is odd Alice wins (she makes the last choice). Otherwise Bob wins exactly when the difference of the known sums equals 9 · (question marks in the right half − in the left half) / 2.",
   "frames": []
  }
 ]
};
