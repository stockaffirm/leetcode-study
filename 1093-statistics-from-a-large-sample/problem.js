window.PROBLEM = {
 "id": "1093",
 "title": "Statistics from a Large Sample",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
 "why": "count[v] = how many times v occurs → [min, max, mean, median, mode].",
 "idea": "count[k] is how many samples equal k (k = 0…255). The minimum and maximum are the first and last non-zero index; the mean is Σ k·count / total; the mode is the index with the biggest count; the median is the middle value (or the average of the two middle values) found by walking the cumulative counts.",
 "input": "count = [0,1,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]",
 "output": "[1.0, 3.0, 2.375, 2.5, 3.0]",
 "notes": [],
 "best": "count[k] is how many samples equal k (k = 0…255). The minimum and maximum are the first and last non-zero index; the mean is Σ k·count / total; the mode is the index with the biggest count; the median is the middle value (or the average of the two middle values) found by walking the cumulative counts.",
 "variants": [
  {
   "name": "One pass over the counts",
   "code": "class Solution:\n    def sampleStats(self, count):\n        total = sum(count)\n        values = [k for k in range(256) if count[k]]\n        mean = sum(k * c for k, c in enumerate(count)) / total\n        mode = max(range(256), key=lambda k: count[k])\n        def kth(pos):\n            seen = 0\n            for k in range(256):\n                seen += count[k]\n                if seen > pos:\n                    return k\n        if total % 2:\n            median = float(kth(total // 2))\n        else:\n            median = (kth(total // 2 - 1) + kth(total // 2)) / 2\n        return [float(values[0]), float(values[-1]), mean, median, float(mode)]",
   "time": "O(256)",
   "space": "O(1)",
   "explain": "count[k] is how many samples equal k (k = 0…255). The minimum and maximum are the first and last non-zero index; the mean is Σ k·count / total; the mode is the index with the biggest count; the median is the middle value (or the average of the two middle values) found by walking the cumulative counts.",
   "frames": []
  }
 ]
};
