window.PROBLEM = {
 "id": "920",
 "title": "Number of Music Playlists",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Build a playlist of `goal` songs using all n songs at least once, where a song can only repeat after k other songs have played. Count the playlists.",
 "idea": "dp[i][j] = playlists of length i using exactly j different songs. The last song is either new ((n−j+1) choices) or a repeat of one of the j songs whose gap is satisfied ((j−k) choices).",
 "input": "n=3, goal=3, k=1",
 "output": "6",
 "notes": [],
 "best": "dp[i][j] = playlists of length i using exactly j different songs. The last song is either new ((n−j+1) choices) or a repeat of one of the j songs whose gap is satisfied ((j−k) choices).",
 "variants": [
  {
   "name": "DP over (length, distinct songs)",
   "code": "class Solution:\n    def numMusicPlaylists(self, n, goal, k):\n        MOD = 10 ** 9 + 7\n        dp = [[0] * (n + 1) for _ in range(goal + 1)]\n        dp[0][0] = 1\n        for i in range(1, goal + 1):\n            for j in range(1, min(i, n) + 1):\n                dp[i][j] = dp[i - 1][j - 1] * (n - j + 1) % MOD\n                if j > k:\n                    dp[i][j] = (dp[i][j] + dp[i - 1][j] * (j - k)) % MOD\n        return dp[goal][n]",
   "time": "O(goal · n)",
   "space": "O(goal · n)",
   "explain": "dp[i][j] = playlists of length i using exactly j different songs. The last song is either new ((n−j+1) choices) or a repeat of one of the j songs whose gap is satisfied ((j−k) choices).",
   "frames": []
  }
 ]
};
