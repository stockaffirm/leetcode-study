window.PROBLEM = {
 "id": "2611",
 "title": "Mice and Cheese",
 "level": "Medium",
 "topic": "Greedy",
 "question": "Two mice eat cheese pieces. Eating piece i gives reward1[i] points for the first mouse or reward2[i] for the second. The first mouse must eat exactly k pieces, the second eats the rest. Return the maximum total points. Example: reward1=[1,1,3,4], reward2=[4,4,1,1], k=2 → 15.",
 "why": "Two mice eat different pieces of cheese with different rewards. Mouse 1 must eat exactly k pieces, mouse 2 the rest. Maximise the total reward.",
 "idea": "Start with everything going to mouse 2. Switching a piece to mouse 1 changes the total by reward1 − reward2; do the k switches with the largest gain.",
 "input": "reward1 [1,1,3,4], reward2 [4,4,1,1], k=2",
 "output": "15",
 "notes": [],
 "best": "Start with everything going to mouse 2. Switching a piece to mouse 1 changes the total by reward1 − reward2; do the k switches with the largest gain.",
 "variants": [
  {
   "name": "Sort by the gain of giving it to mouse 1",
   "code": "class Solution:\n    def miceAndCheese(self, reward1, reward2, k):\n        gain = sorted(range(len(reward1)), key=lambda i: reward1[i] - reward2[i], reverse=True)\n        total = sum(reward2)\n        for i in gain[:k]: total += reward1[i] - reward2[i]\n        return total",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Start with everything going to mouse 2. Switching a piece to mouse 1 changes the total by reward1 − reward2; do the k switches with the largest gain.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Take the k best gains with a heap",
   "tag": "Alternative",
   "code": "class Solution:\n    def miceAndCheese(self, reward1, reward2, k):\n        diffs = [a - b for a, b in zip(reward1, reward2)]\n        return sum(reward2) + sum(nlargest(k, diffs))",
   "time": "O(n log k)",
   "space": "O(n)",
   "explain": "nlargest of the differences instead of a full sort.",
   "frames": [],
   "alt": true
  }
 ]
};
