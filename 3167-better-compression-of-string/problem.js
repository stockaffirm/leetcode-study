window.PROBLEM = {
 "id": "3167",
 "title": "Better Compression of String",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "'a3c9b2c1' → a:3, b:2, c:9+1=10 → 'a3b2c10'.",
 "idea": "The compressed string is pairs of a letter and a (possibly multi-digit) count. Parse the pairs, add counts per letter, and write the letters alphabetically with their totals.",
 "input": "compressed = \"a3c9b2c1\"",
 "output": "\"a3b2c10\"",
 "notes": [],
 "best": "The compressed string is pairs of a letter and a (possibly multi-digit) count. Parse the pairs, add counts per letter, and write the letters alphabetically with their totals.",
 "variants": [
  {
   "name": "Sum the counts per letter, print in alphabetical order",
   "code": "class Solution:\n    def betterCompression(self, compressed):\n        cnt = Counter()\n        i = 0\n        while i < len(compressed):\n            ch = compressed[i]\n            i += 1\n            j = i\n            while j < len(compressed) and compressed[j].isdigit():\n                j += 1\n            cnt[ch] += int(compressed[i:j])\n            i = j\n        return ''.join(c + str(cnt[c]) for c in sorted(cnt))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The compressed string is pairs of a letter and a (possibly multi-digit) count. Parse the pairs, add counts per letter, and write the letters alphabetically with their totals.",
   "frames": []
  }
 ]
};
