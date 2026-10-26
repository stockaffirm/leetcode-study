window.PROBLEM = {
 "id": "3440",
 "title": "Reschedule Meetings for Maximum Free Time II",
 "level": "Medium",
 "topic": "Intervals",
 "question": "",
 "why": "eventTime 5, meetings [1,2] and [3,5]: moving [1,2] to the end leaves a free stretch of 2 → 2.",
 "idea": "Compute the n+1 gaps between meetings (and the event edges). Removing meeting i merges the two gaps around it. Its duration can be put back either inside the merged hole (then the free time is both gaps) or, if some other gap is at least its duration long, anywhere else (then the free time is both gaps plus the duration). Use prefix/suffix maxima of the gaps to know the largest other gap.",
 "input": "eventTime = 5, startTime = [1,3], endTime = [2,5]",
 "output": "2",
 "notes": [],
 "best": "Compute the n+1 gaps between meetings (and the event edges). Removing meeting i merges the two gaps around it. Its duration can be put back either inside the merged hole (then the free time is both gaps) or, if some other gap is at least its duration long, anywhere else (then the free time is both gaps plus the duration). Use prefix/suffix maxima of the gaps to know the largest other gap.",
 "variants": [
  {
   "name": "Gaps: slide a meeting out, or move it into another gap",
   "code": "class Solution:\n    def maxFreeTime(self, eventTime, startTime, endTime):\n        n = len(startTime)\n        gaps = [startTime[0]] + [startTime[i] - endTime[i - 1] for i in range(1, n)] + [eventTime - endTime[-1]]\n        pre = list(accumulate(gaps, max))\n        suf = list(accumulate(reversed(gaps), max))[::-1]\n        best = 0\n        for i in range(n):\n            dur = endTime[i] - startTime[i]\n            other = max(pre[i - 1] if i - 1 >= 0 else 0, suf[i + 2] if i + 2 <= n else 0)\n            free = gaps[i] + gaps[i + 1] + (dur if other >= dur else 0)\n            best = max(best, free)\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Compute the n+1 gaps between meetings (and the event edges). Removing meeting i merges the two gaps around it. Its duration can be put back either inside the merged hole (then the free time is both gaps) or, if some other gap is at least its duration long, anywhere else (then the free time is both gaps plus the duration). Use prefix/suffix maxima of the gaps to know the largest other gap.",
   "frames": []
  }
 ]
};
