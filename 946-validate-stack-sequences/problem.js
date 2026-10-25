window.PROBLEM = {
 "id": "946",
 "title": "Validate Stack Sequences",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "Numbers are pushed onto an empty stack in the order of the list 'pushed' (all different). Pops may happen at any moment. Could the popped values have come out in exactly the order of the list 'popped'? Example: pushed [1,2,3,4,5], popped [4,5,3,2,1] → True; popped [4,3,5,1,2] → False.",
 "why": "Numbers are pushed onto a stack in the order 'pushed' and popped in some moments. Could the pops have happened in exactly the order 'popped'?",
 "idea": "Push the numbers one by one; whenever the top equals the next number that must be popped, pop it. At the end the stack must be empty.",
 "input": "pushed [1,2,3,4,5], popped [4,5,3,2,1]",
 "output": "True",
 "notes": [],
 "best": "Push the numbers one by one; whenever the top equals the next number that must be popped, pop it. At the end the stack must be empty.",
 "variants": [
  {
   "name": "Simulate with a stack",
   "code": "class Solution:\n    def validateStackSequences(self, pushed, popped):\n        st, j = [], 0\n        for x in pushed:\n            st.append(x)\n            while st and st[-1] == popped[j]:\n                st.pop()\n                j += 1\n        return not st",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Push the numbers one by one; whenever the top equals the next number that must be popped, pop it. At the end the stack must be empty.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Reuse the pushed list as the stack",
   "tag": "Alternative",
   "code": "class Solution:\n    def validateStackSequences(self, pushed, popped):\n        i = j = 0\n        for x in pushed:\n            pushed[i] = x\n            i += 1\n            while i and pushed[i - 1] == popped[j]:\n                i -= 1\n                j += 1\n        return j == len(popped)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The same simulation but the already-used front of 'pushed' serves as the stack.",
   "frames": [],
   "alt": true
  }
 ]
};
