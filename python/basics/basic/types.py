# data types

a = "Hello World"	 	
b = 20	 	
c = 20.5	 	
d = 1j	 	
e = ["apple", "banana", "cherry"]	 	
f = ("apple", "banana", "cherry")	 	
g = range(6)	 	
h = {"name" : "John", "age" : 36}	 	
i = {"apple", "banana", "cherry"}	 	
j = frozenset({"apple", "banana", "cherry"})	 	
k = True	 	
l = b"Hello"	 	
m = bytearray(5)	 	
n = memoryview(bytes(5))	 

order = [a, b, c, d, e, f, g, h, i, j, k, l, m, n]

for char in order:
    print(char, 'is type ', type(char))