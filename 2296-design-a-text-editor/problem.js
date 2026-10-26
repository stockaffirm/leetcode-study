window.PROBLEM = {
 "id": "2296",
 "title": "Design a Text Editor",
 "level": "Hard",
 "topic": "Design",
 "question": "",
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
   "frames": []
  }
 ]
};
