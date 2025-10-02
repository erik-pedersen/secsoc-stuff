import jwt

encoded_jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIiLCJpYXQiOjE3NTM5MjA2MTksImV4cCI6MTc1MzkyNDIxOX0.6TTx-oIRE4GazPSVb_heFPUGRNSMBThcR-4IDPk_0Tg"


def trySecret(secret_key, encoded_jwt):
    print("Trying: ", secret_key)
    try:
        decoded_payload = jwt.decode(encoded_jwt, secret_key, algorithms=["HS256"])
        return secret_key
    except Exception as e:
        return False

resKey = False
with open('secrets-list.txt') as file:
    for line in file.readlines():
        resKey = trySecret(line.strip(), encoded_jwt)
        if (resKey):
            print("Found secret key:", resKey)
            break
