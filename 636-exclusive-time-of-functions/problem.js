window.PROBLEM = {
 "id": "636",
 "title": "Exclusive Time of Functions",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "A program runs n functions on a single processor. You are given log lines like 'id:start:time' and 'id:end:time' (a function may call others, even itself). A function starts at the BEGINNING of the given second and ends at the END of the given second. Return, for each function, its EXCLUSIVE time: the time it spent running itself, not counting the functions it called. Example: n=2, ['0:start:0','1:start:2','1:end:5','0:end:6'] → function 0 runs seconds 0–1 and 6 (3), function 1 runs 2–5 (4) → [3,4].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Frames that track child time",
   "tag": "Alternative",
   "code": "class Solution:\n    def exclusiveTime(self, n, logs):\n        res = [0] * n\n        st = []\n        for log in logs:\n            fid, kind, t = log.split(':')\n            fid, t = int(fid), int(t)\n            if kind == 'start':\n                st.append([fid, t, 0])\n            else:\n                f, s, child = st.pop()\n                total = t - s + 1\n                res[f] += total - child\n                if st: st[-1][2] += total\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Each call frame remembers how long its children ran; own time = total − children.",
   "frames": [],
   "alt": true
  }
 ]
};
