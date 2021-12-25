number = 0
prime =[]
while number < 100:
  divider =[]
  for i in range(1, number+1):
    if number % i == 0:
      divider.append(i)
  if len(divider) == 2: 
    prime.append(number)
  number += 1
print(prime)   
