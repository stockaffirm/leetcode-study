window.PROBLEM = {
 "id": "1375",
 "title": "Number of Times Binary String Is Prefix-Aligned",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "flips [3,2,4,1,5] → aligned after steps 2? ... answer 2.",
 "idea": "After k flips the bits 1…k are all on exactly when the largest index flipped so far is k (then every position up to k has been flipped). Count the steps where the running maximum equals the step number.",
 "input": "flips = [3,2,4,1,5]",
 "output": "2",
 "notes": [],
 "best": "After k flips the bits 1…k are all on exactly when the largest index flipped so far is k (then every position up to k has been flipped). Count the steps where the running maximum equals the step number.",
 "variants": [
  {
   "name": "Prefix aligned when the maximum flipped index equals the count",
   "code": "class Solution:\n    def numTimesAllBlue(self, flips):\n        top = count = 0\n        for step, f in enumerate(flips, 1):\n            top = max(top, f)\n            if top == step:\n                count += 1\n        return count",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "After k flips the bits 1…k are all on exactly when the largest index flipped so far is k (then every position up to k has been flipped). Count the steps where the running maximum equals the step number.",
   "frames": []
  }
 ]
};
