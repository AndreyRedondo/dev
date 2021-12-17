# text = open("sample.txt",'r')
# for line in text:
#     if "jabberwock" in line.lower():
#         print(line, end='')
    
# text.close()

with open("sample.txt", 'r') as text:
    for line in text:
        # if "JAB" in line.upper():
        print(line, end='')

# with open("sample.txt", 'r') as text:
#     line = text.readline()
#     while line:
#         print(line, end='')
#         line = text.readline()

# with open("sample.txt", 'r') as text:
#     lines = text.readlines()
# print(lines)

# for line in lines:
#     print(line, end='')

# with open("sample.txt", 'r') as text:
#     lines = text.readlines()
# print(lines)

# for line in lines[::-1]:
#     print(line, end='')