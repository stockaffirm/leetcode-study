window.PROBLEM = {
 "id": "2306",
 "title": "Naming a Company",
 "level": "Hard",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "['coffee','donuts','time','toffee'] → 6 valid names.",
 "idea": "Swapping the first letters of two ideas gives a valid name when both new words are not in the original list. Group the suffixes by first letter. For two letters a and b, let c = number of suffixes they share; the valid pairs are (|A| − c)·(|B| − c), counted twice for the two orders. Sum over all letter pairs.",
 "input": "ideas = [\"coffee\",\"donuts\",\"time\",\"toffee\"]",
 "output": "6",
 "notes": [],
 "best": "Swapping the first letters of two ideas gives a valid name when both new words are not in the original list. Group the suffixes by first letter. For two letters a and b, let c = number of suffixes they share; the valid pairs are (|A| − c)·(|B| − c), counted twice for the two orders. Sum over all letter pairs.",
 "variants": [
  {
   "name": "Group suffixes by first letter, count swappable pairs",
   "code": "class Solution:\n    def distinctNames(self, ideas):\n        groups = defaultdict(set)\n        for w in ideas:\n            groups[w[0]].add(w[1:])\n        letters = list(groups)\n        total = 0\n        for i in range(len(letters)):\n            for j in range(i + 1, len(letters)):\n                a, b = groups[letters[i]], groups[letters[j]]\n                shared = len(a & b)\n                total += 2 * (len(a) - shared) * (len(b) - shared)\n        return total",
   "time": "O(26²·n)",
   "space": "O(n)",
   "explain": "Swapping the first letters of two ideas gives a valid name when both new words are not in the original list. Group the suffixes by first letter. For two letters a and b, let c = number of suffixes they share; the valid pairs are (|A| − c)·(|B| − c), counted twice for the two orders. Sum over all letter pairs.",
   "frames": []
  }
 ]
};
