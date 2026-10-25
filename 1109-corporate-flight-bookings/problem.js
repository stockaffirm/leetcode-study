window.PROBLEM = {
 "id": "1109",
 "title": "Corporate Flight Bookings",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "bookings[i] = [first, last, seats] reserves seats on every flight from first to last (1-indexed). Return the total seats reserved on each of the n flights. Example: [[1,2,10],[2,3,20],[2,5,25]], n=5 → [10,55,45,25,25].",
 "why": "[[1,2,10],[2,3,20],[2,5,25]], n=5 → seats per flight [10,55,45,25,25].",
 "idea": "A booking adds seats to a range of flights. Add the seats at the first flight and subtract them just after the last; a prefix sum then gives every flight's total.",
 "input": "bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5",
 "output": "[10, 55, 45, 25, 25]",
 "notes": [],
 "best": "A booking adds seats to a range of flights. Add the seats at the first flight and subtract them just after the last; a prefix sum then gives every flight's total.",
 "variants": [
  {
   "name": "Difference array",
   "code": "class Solution:\n    def corpFlightBookings(self, bookings, n):\n        diff = [0] * (n + 1)\n        for first, last, seats in bookings:\n            diff[first - 1] += seats\n            diff[last] -= seats\n        return list(accumulate(diff[:n]))",
   "time": "O(n + b)",
   "space": "O(n)",
   "explain": "A booking adds seats to a range of flights. Add the seats at the first flight and subtract them just after the last; a prefix sum then gives every flight's total.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Add to every booked flight",
   "tag": "Brute force",
   "code": "class Solution:\n    def corpFlightBookings(self, bookings, n):\n        res = [0] * n\n        for first, last, seats in bookings:\n            for i in range(first - 1, last):\n                res[i] += seats\n        return res",
   "time": "O(b·n)",
   "space": "O(n)",
   "explain": "Loop over each booking and add its seats to each flight in the range.",
   "frames": [],
   "alt": true
  }
 ]
};
