window.PROBLEM = {
 "id": "2296",
 "title": "Design a Text Editor",
 "level": "Hard",
 "topic": "Design",
 "question": "Build a text editor with a cursor. addText(text) inserts at the cursor, deleteText(k) deletes up to k characters left of the cursor and returns how many were deleted, cursorLeft(k) / cursorRight(k) move the cursor (not past the ends) and return the last up to 10 characters left of the cursor. Example: add 'leetcode', delete 4, add 'practice', cursorRight(3) → 'etpractice'.",
 "why": "After 'leetcode' → delete 4 → 'leet' → add 'practice' → 'leetpractice'. Moving right does nothing (the cursor is at the end), and the last 10 characters left of it are 'etpractice'.",
 "idea": "Keep the text left of the cursor in one stack and the text right of it in another. Moving the cursor just moves characters between the two stacks; adding and deleting only touch the left stack.",
 "input": "addText('leetcode'), deleteText(4), addText('practice'), cursorRight(3)",
 "output": "'etpractice'",
 "notes": [],
 "best": "Keep the text left of the cursor in one stack and the text right of it in another. Moving the cursor just moves characters between the two stacks; adding and deleting only touch the left stack.",
 "variants": [
  {
   "name": "Two stacks around the cursor",
   "code": "class TextEditor:\n    def __init__(self):\n        self.left = []\n        self.right = []\n    def addText(self, text):\n        self.left.extend(text)\n    def deleteText(self, k):\n        k = min(k, len(self.left))\n        del self.left[len(self.left) - k:]\n        return k\n    def cursorLeft(self, k):\n        for _ in range(min(k, len(self.left))):\n            self.right.append(self.left.pop())\n        return \"\".join(self.left[-10:])\n    def cursorRight(self, k):\n        for _ in range(min(k, len(self.right))):\n            self.left.append(self.right.pop())\n        return \"\".join(self.left[-10:])",
   "time": "O(k) per call",
   "space": "O(n)",
   "explain": "Keep the text left of the cursor in one stack and the text right of it in another. Moving the cursor just moves characters between the two stacks; adding and deleting only touch the left stack.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "One string and a cursor index",
   "tag": "Brute force",
   "code": "class TextEditor:\n    def __init__(self):\n        self.s = \"\"\n        self.c = 0\n    def addText(self, text):\n        self.s = self.s[:self.c] + text + self.s[self.c:]\n        self.c += len(text)\n    def deleteText(self, k):\n        k = min(k, self.c)\n        self.s = self.s[:self.c - k] + self.s[self.c:]\n        self.c -= k\n        return k\n    def cursorLeft(self, k):\n        self.c = max(0, self.c - k)\n        return self.s[max(0, self.c - 10):self.c]\n    def cursorRight(self, k):\n        self.c = min(len(self.s), self.c + k)\n        return self.s[max(0, self.c - 10):self.c]",
   "time": "O(n) per call",
   "space": "O(n)",
   "explain": "Keep the whole text and the cursor position and slice around the cursor on every call.",
   "frames": [],
   "alt": true
  }
 ]
};
