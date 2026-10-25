window.PROBLEM = {
 "id": "535",
 "title": "Encode and Decode TinyURL",
 "level": "Medium",
 "topic": "Design",
 "question": "TinyURL is a service that turns a long web address into a short one. Design encode(longUrl), which returns a short URL, and decode(shortUrl), which returns the original long URL. How you create the short URL is up to you; decode(encode(url)) must give back url. Example: 'https://leetcode.com/problems/design-tinyurl' → something like 'http://tinyurl.com/1' → back to the long address.",
 "why": "Turn a long URL into a short one and be able to turn it back.",
 "idea": "Hand out increasing numbers as short codes and store code → long URL in a dictionary; decode just looks the code up.",
 "input": "https://leetcode.com/problems/design-tinyurl",
 "output": "decode(encode(url)) == url",
 "notes": [],
 "best": "Hand out increasing numbers as short codes and store code → long URL in a dictionary; decode just looks the code up.",
 "variants": [
  {
   "name": "Counter-based short codes",
   "code": "class Codec:\n    def __init__(self):\n        self.urls = {}\n        self.n = 0\n    def encode(self, longUrl):\n        self.n += 1\n        self.urls[self.n] = longUrl\n        return 'http://tinyurl.com/' + str(self.n)\n    def decode(self, shortUrl):\n        return self.urls[int(shortUrl.rsplit('/', 1)[1])]",
   "time": "O(1)",
   "space": "O(urls)",
   "explain": "Hand out increasing numbers as short codes and store code → long URL in a dictionary; decode just looks the code up.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Hash-based code",
   "tag": "Alternative",
   "code": "class Codec:\n    def __init__(self):\n        self.urls = {}\n    def encode(self, longUrl):\n        code = format(abs(hash(longUrl)) % (62 ** 6), 'x')\n        self.urls[code] = longUrl\n        return 'http://tinyurl.com/' + code\n    def decode(self, shortUrl):\n        return self.urls[shortUrl.rsplit('/', 1)[1]]",
   "time": "O(1)",
   "space": "O(urls)",
   "explain": "Derive the short code from a hash of the URL.",
   "frames": [],
   "alt": true
  }
 ]
};
