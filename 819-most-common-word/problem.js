window.PROBLEM = {
 "id": "819",
 "title": "Most Common Word",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "'Bob hit a ball, the hit BALL flew far after it was hit.', banned ['hit'] → 'ball'.",
 "idea": "Lowercase the paragraph, replace punctuation by spaces, split into words, count those not in the banned set, and return the most frequent.",
 "input": "paragraph = \"Bob hit a ball, the hit BALL flew far after it was hit.\", banned = [\"hit\"]",
 "output": "\"ball\"",
 "notes": [],
 "best": "Lowercase the paragraph, replace punctuation by spaces, split into words, count those not in the banned set, and return the most frequent.",
 "variants": [
  {
   "name": "Normalise, count, skip the banned words",
   "code": "class Solution:\n    def mostCommonWord(self, paragraph, banned):\n        text = ''.join(c.lower() if c.isalpha() else ' ' for c in paragraph)\n        ban = set(banned)\n        words = [w for w in text.split() if w not in ban]\n        return Counter(words).most_common(1)[0][0]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Lowercase the paragraph, replace punctuation by spaces, split into words, count those not in the banned set, and return the most frequent.",
   "frames": []
  }
 ]
};
