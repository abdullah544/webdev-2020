n = int(input())
arr = []

arr = [int(i) for i in input().split()]

# even_x = [num for num in x if num%2==0]
# print(even_x)

for i in range(n):
    if i%2==0:
        print(arr[i], end=" ")
