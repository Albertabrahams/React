number = int(input("Enter a number:"))
divider =[]
for m in range (1,(number+1)):
      if number % m == 0:
        divider.append(m)
if len(divider) == 2 :
  print(number, "is a prime number")
else :
  print(number, "is not prime number")
  
