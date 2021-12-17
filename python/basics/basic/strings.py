def reverseSentence(str):
    separated = str.split()
    reverse = list(reversed(separated))
    result = "".join(reverse)
    return (result)


def Reverse(word):
    return word[::-1] == word


def ReverseArray(sentence):
    result = sentence.split()
    res2 = list(reversed(result))
    print(res2)
    return(res2)


def Fibonacci(n):
    if  0 <= n <=1:
        return n
    
    n_minus1 = 1 
    n_minus2 = 0
    
    result = None
    for f in range(n - 1):
        result = n_minus2 + n_minus1
        n_minus2 = n_minus1
        n_minus1 = result
    
    return result

for i in range(10):
    print(i, Fibonacci(i))