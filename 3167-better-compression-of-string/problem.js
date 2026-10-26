window.PROBLEM = {
 "id": "3167",
 "title": "Better Compression of String",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "A compressed string is a list of (letter, count) pairs like 'a3c9b2c1' (counts can have several digits and letters can repeat). Return the better compression: each letter once, in alphabetical order, with its total count. Example: 'a3c9b2c1' → 'a3b2c10'.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Regex-free split on letters",
   "tag": "Alternative",
   "code": "class Solution:\n    def betterCompression(self, compressed):\n        counts = {}\n        letter = None\n        num = ''\n        for ch in compressed + 'A':\n            if ch.isdigit():\n                num += ch\n            else:\n                if letter is not None:\n                    counts[letter] = counts.get(letter, 0) + int(num)\n                letter, num = ch, ''\n        return ''.join(c + str(counts[c]) for c in sorted(counts))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Insert separators before each letter, split, and add the numbers.",
   "frames": [],
   "alt": true
  }
 ]
};
