# The goal is to print all possible winning cases (US election style)

winning_threshold = 200

provinces = {
    "ON": 70,
    "BC": 70,
    "QC": 70,
    "PE": 70,
    "SK": 70
}

# take the names of provinces
prov_list = list(provinces.keys())

def permute(remaining, candidate=[]):
    # check if sum of candidates is over winning_threshold
    if candidate:
        sum = 0
        for c in candidate:
            sum += provinces[c]
        if sum > winning_threshold:
            print(candidate)
            return
    
    for i in range(len(remaining)):
        newCandidate = candidate + [remaining[i]]
        newRemaining = remaining[i+1:]
    
        permute(newRemaining, newCandidate)

if __name__ == "__main__":
	permute(prov_list)
