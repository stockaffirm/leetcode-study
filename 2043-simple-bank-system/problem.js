window.PROBLEM = {
 "id": "2043",
 "title": "Simple Bank System",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "A bank with numbered accounts: transfer, deposit and withdraw. Each action succeeds only if the account numbers are valid and there is enough money.",
 "idea": "Keep balances in a list. Before each action check the account number is in range and (for money leaving an account) that the balance is enough; only then change the balances.",
 "input": "Bank([10,100,20,50,30]); withdraw(3,10), transfer(5,1,20), deposit(5,20), transfer(3,4,15), withdraw(10,50)",
 "output": "True, True, True, False, False",
 "notes": [],
 "best": "Keep balances in a list. Before each action check the account number is in range and (for money leaving an account) that the balance is enough; only then change the balances.",
 "variants": [
  {
   "name": "List of balances with checks",
   "code": "class Bank:\n    def __init__(self, balance):\n        self.bal = balance\n    def _ok(self, acct):\n        return 1 <= acct <= len(self.bal)\n    def transfer(self, account1, account2, money):\n        if not (self._ok(account1) and self._ok(account2)) or self.bal[account1 - 1] < money: return False\n        self.bal[account1 - 1] -= money\n        self.bal[account2 - 1] += money\n        return True\n    def deposit(self, account, money):\n        if not self._ok(account): return False\n        self.bal[account - 1] += money\n        return True\n    def withdraw(self, account, money):\n        if not self._ok(account) or self.bal[account - 1] < money: return False\n        self.bal[account - 1] -= money\n        return True",
   "time": "O(1) per op",
   "space": "O(n)",
   "explain": "Keep balances in a list. Before each action check the account number is in range and (for money leaving an account) that the balance is enough; only then change the balances.",
   "frames": []
  }
 ]
};
