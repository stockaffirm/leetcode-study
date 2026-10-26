window.PROBLEM = {
 "id": "636",
 "title": "Exclusive Time of Functions",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "From start/end log lines of function calls, how much time did each function spend running itself (not counting the functions it called)?",
 "idea": "Keep a stack of running functions. When something starts, charge the time since the last event to the function that was running; when something ends, charge it the time since the last event (+1 because the end second counts).",
 "input": "n=2, [0:start:0, 1:start:2, 1:end:5, 0:end:6]",
 "output": "[3, 4]",
 "notes": [],
 "best": "Keep a stack of running functions. When something starts, charge the time since the last event to the function that was running; when something ends, charge it the time since the last event (+1 because the end second counts).",
 "variants": [
  {
   "name": "Call stack with a clock",
   "code": "class Solution:\n    def exclusiveTime(self, n, logs):\n        res = [0] * n\n        st = []\n        prev = 0\n        for log in logs:\n            fid, kind, t = log.split(':')\n            fid, t = int(fid), int(t)\n            if kind == 'start':\n                if st: res[st[-1]] += t - prev\n                st.append(fid)\n                prev = t\n            else:\n                res[st.pop()] += t - prev + 1\n                prev = t + 1\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep a stack of running functions. When something starts, charge the time since the last event to the function that was running; when something ends, charge it the time since the last event (+1 because the end second counts).",
   "frames": []
  }
 ]
};
