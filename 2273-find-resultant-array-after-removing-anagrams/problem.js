window.PROBLEM = {
 "id": "2273",
 "title": "Find Resultant Array After Removing Anagrams",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "Repeatedly delete a word that is an anagram of the word directly before it. Return the remaining words. Example: ['abba','baba','bbaa','cd','cd'] → ['abba','cd'].",
 "why": "['abba','baba','bbaa','cd','cd'] → 'baba' and 'bbaa' are anagrams of the previous kept word, the second 'cd' too → ['abba','cd'].",
 "idea": "Whenever a word is an anagram of the word before it, remove it; comparing against the last kept word is enough. Anagrams have equal sorted letters.",
 "input": "words = [\"abba\",\"baba\",\"bbaa\",\"cd\",\"cd\"]",
 "output": "['abba', 'cd']",
 "notes": [],
 "best": "Whenever a word is an anagram of the word before it, remove it; comparing against the last kept word is enough. Anagrams have equal sorted letters.",
 "variants": [
  {
   "name": "Drop a word that is an anagram of its predecessor",
   "code": "class Solution:\n    def removeAnagrams(self, words):\n        res = []\n        for w in words:\n            if not res or sorted(res[-1]) != sorted(w):\n                res.append(w)\n        return res",
   "time": "O(n·L log L)",
   "space": "O(n·L)",
   "explain": "Whenever a word is an anagram of the word before it, remove it; comparing against the last kept word is enough. Anagrams have equal sorted letters.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Letter-count signature",
   "tag": "Alternative",
   "code": "class Solution:\n    def removeAnagrams(self, words):\n        res = []\n        last = None\n        for w in words:\n            sig = tuple(sorted(Counter(w).items()))\n            if sig != last:\n                res.append(w)\n                last = sig\n        return res",
   "time": "O(n·L)",
   "space": "O(n·L)",
   "explain": "Compare words by their letter counts instead of sorting.",
   "frames": [],
   "alt": true
  }
 ]
};
