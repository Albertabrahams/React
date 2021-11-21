num = input("Enter a number")
total = 0

if int(num)<0:
  print("It is an invalid entry. Don't use non-numeric, float, or negative values! try again")
else:
  for i in num:
    total += int(i)**len(num)

  if total==int(num):
    print("{} is a Armstrong number".format(num))
  else:
    print("{} is NOT a Armstrong number".format(num))