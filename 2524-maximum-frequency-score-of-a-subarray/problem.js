window.PROBLEM = {
 "id": "2524",
 "title": "Maximum Frequency Score of a Subarray",
 "level": "Hard",
 "topic": "Sliding Window",
 "question": "",
 "why": "[1,1,1,2,1,2], k=3: the window [2,1,2] scores 2² + 1 = 5; [1,1,1] scores 1.",
 "idea": "The score of a window is Σ value^frequency over its distinct values, taken modulo 1e9+7, and we maximise that modded value. Slide a window of size k keeping the frequency map and the score: adding x changes its term from x^f to x^(f+1); removing x changes it from x^f to x^(f−1).",
 "input": "nums = [1,1,1,2,1,2], k = 3",
 "output": "5",
 "notes": [],
 "best": "The score of a window is Σ value^frequency over its distinct values, taken modulo 1e9+7, and we maximise that modded value. Slide a window of size k keeping the frequency map and the score: adding x changes its term from x^f to x^(f+1); removing x changes it from x^f to x^(f−1).",
 "variants": [
  {
   "name": "Sliding window with a modular running score",
   "code": "class Solution:\n    def maxFrequencyScore(self, nums, k):\n        MOD = 10**9 + 7\n        freq = Counter()\n        score = 0\n        best = 0\n        def add(x):\n            nonlocal score\n            f = freq[x]\n            score += pow(x, f + 1, MOD) - (pow(x, f, MOD) if f else 0)\n            freq[x] = f + 1\n        def remove(x):\n            nonlocal score\n            f = freq[x]\n            score += (pow(x, f - 1, MOD) if f > 1 else 0) - pow(x, f, MOD)\n            freq[x] = f - 1\n        for i, x in enumerate(nums):\n            add(x)\n            if i >= k:\n                remove(nums[i - k])\n            if i >= k - 1:\n                best = max(best, score % MOD)\n        return best",
   "time": "O(n log k)",
   "space": "O(k)",
   "explain": "The score of a window is Σ value^frequency over its distinct values, taken modulo 1e9+7, and we maximise that modded value. Slide a window of size k keeping the frequency map and the score: adding x changes its term from x^f to x^(f+1); removing x changes it from x^f to x^(f−1).",
   "frames": []
  }
 ]
};
