window.PROBLEM = {
 "id": "1797",
 "title": "Design Authentication Manager",
 "level": "Medium",
 "topic": "Design",
 "question": "Design an AuthenticationManager. Every token is valid for timeToLive seconds after it is generated or renewed. generate(tokenId, t) creates a token at time t; renew(tokenId, t) extends an UNEXPIRED token to expire timeToLive seconds after t (nothing happens if it is unknown or already expired); countUnexpiredTokens(t) returns how many tokens are still valid at time t (a token that expires exactly at time t is already expired). Example (ttl 5): renew('aaa',1) → nothing; generate('aaa',2); count(6) → 1; generate('bbb',7); renew('aaa',8) → nothing (expired at 7); renew('bbb',10) → expires 15; count(15) → 0.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Ordered dictionary, expire lazily",
   "tag": "Alternative",
   "code": "class AuthenticationManager:\n    def __init__(self, timeToLive):\n        self.ttl = timeToLive\n        self.tokens = OrderedDict()\n    def _expire(self, t):\n        while self.tokens and next(iter(self.tokens.values())) <= t:\n            self.tokens.popitem(last=False)\n    def generate(self, tokenId, currentTime):\n        self._expire(currentTime)\n        self.tokens.pop(tokenId, None)\n        self.tokens[tokenId] = currentTime + self.ttl\n    def renew(self, tokenId, currentTime):\n        self._expire(currentTime)\n        if tokenId in self.tokens:\n            del self.tokens[tokenId]\n            self.tokens[tokenId] = currentTime + self.ttl\n    def countUnexpiredTokens(self, currentTime):\n        self._expire(currentTime)\n        return len(self.tokens)",
   "time": "O(1) amortised",
   "space": "O(n)",
   "explain": "Tokens are kept in expiry order; expired ones are dropped from the front when needed.",
   "frames": [],
   "alt": true
  }
 ]
};
