Python 3.8.2 (tags/v3.8.2:7b3ab59, Feb 25 2020, 23:03:10) [MSC v.1916 64 bit (AMD64)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> a = int(input())
5
>>> b = int(input())
6
>>> c = sqrt(a**2 + b**2)
Traceback (most recent call last):
  File "<pyshell#2>", line 1, in <module>
    c = sqrt(a**2 + b**2)
NameError: name 'sqrt' is not defined
>>> from math import sqrt
>>> a = int(input())
5
>>> b = int(input())
4
>>> c = sqrt(a**2 + b**2)
>>> print(c)
6.4031242374328485
>>> 