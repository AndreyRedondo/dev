class Account:
    ''' Simmple account class with balance '''
    
    def __init__(self, name, balance):
        self.name = name
        self.balance = balance
        print("Account created for ", self.name)
        
    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            self.show_balance()
            
    def withdraw(self, amount):
        if amount > self.balance:
            print("Not enough money")
        elif amount == 0:
            print("The amount must be greater than zero")
        else:
            self.balance -= amount
        self.show_balance()
            
    def show_balance(self):
        print("Balance is {}".format(self.balance))
        
if __name__ == '__main__':
    tim = Account("Tim", 1000)
    tim.show_balance()
    
    tim.deposit(100)
    # tim.show_balance()
    tim.withdraw(1000)
    # tim.show_balance()
    # tim.withdraw(2000)