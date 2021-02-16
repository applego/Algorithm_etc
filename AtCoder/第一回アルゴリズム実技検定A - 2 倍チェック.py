result = 0
try:
  for i,s in enumerate(input()):
    n = int(s)
    if i == 0:
      n *= 100
      n *= 2
    elif i == 1:
      n *= 10
      n *= 2
    else:
      n *= 2
    result += n
  print(result)
except:
    print("error")
