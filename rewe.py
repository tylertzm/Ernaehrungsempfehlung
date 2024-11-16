import requests
# https://github.com/AroPix/pyrewe rewe api wrapper

# Create a session to reuse settings across requests
session = requests.Session()

# Define the cookies you provided
cookies = {
    "AMCVS_65BE20B35350E8DE0A490D45%40AdobeOrg": "1",
    "AMCV_65BE20B35350E8DE0A490D45%40AdobeOrg": "179643557%7CMCMID%7C55402040470017058532091260150374296473%7CMCAID%7CNONE%7CMCOPTOUT-1731714220s%7CNONE%7CvVersion%7C5.5.0",
    "MRefererUrl": "direct",
    "__cf_bm": "Hw1Q3gyZPCJj8KLxQbZz8wpAlTdNJeIyRMD..HVRQxY-1731792769-1.0.1.1-Y6NMJ8EYR7o.kx6cxDeM4nRZemic2fASqkuH.F4VFanlNVe0CcAU6CJ0rldlFoRKpAP0CsTWEf_2PF9vFW.xIA",
    "__eoi": "ID=2412da82d3194036:T=1731707020:RT=1731792770:S=AA-AfjYLFFgMrbBR6CMIX_FW3Vh3",
    # Add other cookies as necessary...
}

# Set the cookies in the session
session.cookies.update(cookies)

# Define the URL you're making the request to
url = "https://www.rewe.de"

# Make a GET request to the URL
response = session.get(url)

# Check the status and content of the response
print(response.status_code)
