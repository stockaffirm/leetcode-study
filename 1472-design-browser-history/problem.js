window.PROBLEM = {
 "id": "1472",
 "title": "Design Browser History",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "A browser with visit, back and forward. Visiting a new page erases the 'forward' pages.",
 "idea": "Keep a list of pages and an index for the current page. visit cuts the list after the current page and appends; back/forward just move the index (clamped to the list).",
 "input": "home leetcode.com; visit google, facebook, youtube; back 1, back 1, forward 1, visit linkedin, forward 2, back 2, back 7",
 "output": "facebook, google, facebook, linkedin, google, leetcode",
 "notes": [],
 "best": "Keep a list of pages and an index for the current page. visit cuts the list after the current page and appends; back/forward just move the index (clamped to the list).",
 "variants": [
  {
   "name": "List of pages + current index",
   "code": "class BrowserHistory:\n    def __init__(self, homepage):\n        self.pages = [homepage]\n        self.cur = 0\n    def visit(self, url):\n        self.pages = self.pages[:self.cur + 1] + [url]\n        self.cur += 1\n    def back(self, steps):\n        self.cur = max(0, self.cur - steps)\n        return self.pages[self.cur]\n    def forward(self, steps):\n        self.cur = min(len(self.pages) - 1, self.cur + steps)\n        return self.pages[self.cur]",
   "time": "O(1) per move",
   "space": "O(pages)",
   "explain": "Keep a list of pages and an index for the current page. visit cuts the list after the current page and appends; back/forward just move the index (clamped to the list).",
   "frames": []
  }
 ]
};
