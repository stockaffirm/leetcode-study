window.PROBLEM = {
 "id": "1797",
 "title": "Design Authentication Manager",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "Login tokens expire timeToLive seconds after they are created or renewed. Support generate, renew (only if not yet expired) and counting the unexpired tokens.",
 "idea": "Store each token's expiry time. Renew only if its expiry is still in the future; counting means counting expiries greater than the current time.",
 "input": "ttl 5: renew aaa@1, generate aaa@2, count@6, generate bbb@7, renew aaa@8, renew bbb@10, count@15",
 "output": "1, 0",
 "notes": [],
 "best": "Store each token's expiry time. Renew only if its expiry is still in the future; counting means counting expiries greater than the current time.",
 "variants": [
  {
   "name": "Dictionary of expiry times",
   "code": "class AuthenticationManager:\n    def __init__(self, timeToLive):\n        self.ttl = timeToLive\n        self.exp = {}\n    def generate(self, tokenId, currentTime):\n        self.exp[tokenId] = currentTime + self.ttl\n    def renew(self, tokenId, currentTime):\n        if tokenId in self.exp and self.exp[tokenId] > currentTime:\n            self.exp[tokenId] = currentTime + self.ttl\n    def countUnexpiredTokens(self, currentTime):\n        return sum(1 for e in self.exp.values() if e > currentTime)",
   "time": "O(n) per count",
   "space": "O(n)",
   "explain": "Store each token's expiry time. Renew only if its expiry is still in the future; counting means counting expiries greater than the current time.",
   "frames": []
  }
 ]
};
