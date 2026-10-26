window.PROBLEM = {
 "id": "2551",
 "title": "Put Marbles in Bags",
 "level": "Hard",
 "topic": "Sorting",
 "question": "",
 "why": "Split a row of marbles into k bags of consecutive marbles; a bag costs (first weight + last weight). Return the difference between the maximum and minimum total cost.",
 "idea": "Each cut between positions i and i+1 adds weights[i] + weights[i+1]. Choosing which k−1 cuts to make: max total = sum of the k−1 largest pair sums, min = sum of the k−1 smallest; the difference is what we want.",
 "input": "weights [1,3,5,1], k=2",
 "output": "4",
 "notes": [],
 "best": "Each cut between positions i and i+1 adds weights[i] + weights[i+1]. Choosing which k−1 cuts to make: max total = sum of the k−1 largest pair sums, min = sum of the k−1 smallest; the difference is what we want.",
 "variants": [
  {
   "name": "Sum of the best and worst cut pairs",
   "code": "class Solution:\n    def putMarbles(self, weights, k):\n        pairs = sorted(a + b for a, b in zip(weights, weights[1:]))\n        return sum(pairs[len(pairs) - (k - 1):]) - sum(pairs[:k - 1])",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Each cut between positions i and i+1 adds weights[i] + weights[i+1]. Choosing which k−1 cuts to make: max total = sum of the k−1 largest pair sums, min = sum of the k−1 smallest; the difference is what we want.",
   "frames": []
  }
 ]
};
