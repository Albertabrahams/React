fibonacci = [1]
count = 0
h1 = 0
h2 = 1
h3 = 0
while h3 < 55:
  h3 = h1 + h2 
  fibonacci.append(h3)
  h1 = h2 
  h2 = h3
print(fibonacci)
