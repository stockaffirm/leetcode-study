window.PROBLEM = {
 "id": "811",
 "title": "Subdomain Visit Count",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Each entry is 'count domain'; visiting a domain also counts as visiting all its parent domains (discuss.leetcode.com also counts for leetcode.com and com). Return the visit count of every (sub)domain in the same 'count domain' format (any order; sorted here). Example: ['9001 discuss.leetcode.com'] → ['9001 com','9001 discuss.leetcode.com','9001 leetcode.com'].",
 "why": "'9001 discuss.leetcode.com' counts 9001 for discuss.leetcode.com, leetcode.com and com.",
 "idea": "For each entry split the count and the domain. Every suffix after a dot (and the full domain) gets the count added in a dictionary. Format the results as 'count domain'.",
 "input": "cpdomains = [\"9001 discuss.leetcode.com\"]",
 "output": "['9001 com', '9001 discuss.leetcode.com', '9001 leetcode.com']",
 "notes": [],
 "best": "For each entry split the count and the domain. Every suffix after a dot (and the full domain) gets the count added in a dictionary. Format the results as 'count domain'.",
 "variants": [
  {
   "name": "Add the count to every domain suffix",
   "code": "class Solution:\n    def subdomainVisits(self, cpdomains):\n        cnt = Counter()\n        for item in cpdomains:\n            n, domain = item.split()\n            parts = domain.split('.')\n            for i in range(len(parts)):\n                cnt['.'.join(parts[i:])] += int(n)\n        return sorted(str(v) + ' ' + d for d, v in cnt.items())",
   "time": "O(total length)",
   "space": "O(total length)",
   "explain": "For each entry split the count and the domain. Every suffix after a dot (and the full domain) gets the count added in a dictionary. Format the results as 'count domain'.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Recursive suffix splitting",
   "tag": "Alternative",
   "code": "class Solution:\n    def subdomainVisits(self, cpdomains):\n        cnt = defaultdict(int)\n        for item in cpdomains:\n            n, domain = item.split()\n            n = int(n)\n            while True:\n                cnt[domain] += n\n                if '.' not in domain:\n                    break\n                domain = domain[domain.index('.') + 1:]\n        return sorted(\"%d %s\" % (v, d) for d, v in cnt.items())",
   "time": "O(total length)",
   "space": "O(total length)",
   "explain": "Peel the leftmost label off the domain until nothing remains.",
   "frames": [],
   "alt": true
  }
 ]
};
