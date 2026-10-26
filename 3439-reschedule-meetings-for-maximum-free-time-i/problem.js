window.PROBLEM = {
 "id": "3439",
 "title": "Reschedule Meetings for Maximum Free Time I",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "eventTime 5, k=1, meetings [1,2],[3,5] → move [1,2] to [2,3] → free time 2.",
 "idea": "Free time sits in the n+1 gaps between meetings (including before the first and after the last). Moving k meetings merges k+1 consecutive gaps into one. So the answer is the largest sum of k+1 consecutive gaps.",
 "input": "eventTime = 5, k = 1, startTime = [1,3], endTime = [2,5]",
 "output": "2",
 "notes": [],
 "best": "Free time sits in the n+1 gaps between meetings (including before the first and after the last). Moving k meetings merges k+1 consecutive gaps into one. So the answer is the largest sum of k+1 consecutive gaps.",
 "variants": [
  {
   "name": "Sliding window of k+1 gaps",
   "code": "class Solution:\n    def maxFreeTime(self, eventTime, k, startTime, endTime):\n        n = len(startTime)\n        gaps = [startTime[0]]\n        for i in range(1, n):\n            gaps.append(startTime[i] - endTime[i - 1])\n        gaps.append(eventTime - endTime[-1])\n        window = sum(gaps[:k + 1])\n        best = window\n        for i in range(k + 1, len(gaps)):\n            window += gaps[i] - gaps[i - k - 1]\n            best = max(best, window)\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Free time sits in the n+1 gaps between meetings (including before the first and after the last). Moving k meetings merges k+1 consecutive gaps into one. So the answer is the largest sum of k+1 consecutive gaps.",
   "frames": []
  }
 ]
};
