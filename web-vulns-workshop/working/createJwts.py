import jwt

def createJwt(username, secret):
    encoded_jwt = jwt.encode({"username": f"{username}"}, secret, algorithm="HS256")
    return encoded_jwt

if __name__ == "__main__":
    username = 'conrad'
    secret = 'json-server-auth-123456'
    print("created JWT:")
    print(createJwt(username, secret))
