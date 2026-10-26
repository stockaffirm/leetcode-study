window.PROBLEM = {
 "id": "946",
 "title": "Validate Stack Sequences",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
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
   "frames": []
  }
 ]
};
