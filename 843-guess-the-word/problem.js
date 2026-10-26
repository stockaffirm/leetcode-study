window.PROBLEM = {
 "id": "843",
 "title": "Guess the Word",
 "level": "Hard",
 "topic": "Array / String",
 "question": "A hidden 6-letter secret word is one of the given words. You may call master.guess(word), which returns how many letters of word match the secret in the same position. Find the secret using at most 10 guesses. Example: words ['acckzz','ccbazz','eiowzz','abcczz'], secret 'acckzz' → found.",
 "why": "A secret word is among a list of words. master.guess(word) tells how many letters match in position. Find the secret in at most 10 guesses.",
 "idea": "Keep the list of candidates consistent with all answers so far. Guess the word whose worst-case group of equal match counts is smallest (minimax); then keep only candidates with the same match count against that guess.",
 "input": "words ['acckzz','ccbazz','eiowzz','abcczz'], secret 'acckzz'",
 "output": "found within 10 guesses",
 "notes": [],
 "best": "Keep the list of candidates consistent with all answers so far. Guess the word whose worst-case group of equal match counts is smallest (minimax); then keep only candidates with the same match count against that guess.",
 "variants": [
  {
   "name": "Pick the guess that splits candidates best",
   "code": "class Solution:\n    def findSecretWord(self, words, master):\n        match = lambda a, b: sum(x == y for x, y in zip(a, b))\n        cand = words[:]\n        for _ in range(10):\n            best = min(cand, key=lambda w: max(Counter(match(w, x) for x in cand).values()))\n            m = master.guess(best)\n            if m == len(best): return\n            cand = [x for x in cand if match(best, x) == m]",
   "time": "O(10·n²)",
   "space": "O(n)",
   "explain": "Keep the list of candidates consistent with all answers so far. Guess the word whose worst-case group of equal match counts is smallest (minimax); then keep only candidates with the same match count against that guess.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Guess the first candidate",
   "tag": "Alternative",
   "code": "class Solution:\n    def findSecretWord(self, words, master):\n        match = lambda a, b: sum(x == y for x, y in zip(a, b))\n        cand = words[:]\n        for _ in range(10):\n            w = cand[0]\n            m = master.guess(w)\n            if m == len(w): return\n            cand = [x for x in cand if match(w, x) == m]",
   "time": "O(10·n)",
   "space": "O(n)",
   "explain": "Simpler strategy: guess any remaining candidate and filter by the match count (usually enough, but without a worst-case guarantee).",
   "frames": [],
   "alt": true
  }
 ]
};
