class Kettle(object):
    
    power_source = "electricity"
    
    def __init__(self, make, price):
        self.make = make
        self.price = price
        self.on = False
        
    def switch_on(self):
        self.on = True
        
        
kenwood = Kettle("Kenwood", 8.99)
print(kenwood.make)
print(kenwood.price)

kenwood.price = 12.75
print(kenwood.price)

hamilton = Kettle("Hamilton", 14.55)

print(Kettle.power_source)
print(kenwood.power_source)
print(hamilton.power_source)