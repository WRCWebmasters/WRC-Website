import csv
import json
import sys


BASIC_ENTRY_JSON_NAME = "people.json"

class BasicEntry:
    def __init__(self, role, tag, email, names):
        self.tag = tag
        self.role = role
        self.email = email if len(email) > 0 else None
        self.names = " & ".join(filter(lambda x: x != '', names))

def generateBasicEntries(inputFile):
    allEntries = []

    # CSV columns are: [role] [tag] [email] [name] [name]...
    with open(inputFile) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count > 0:
                allEntries.append(BasicEntry(row[0], row[1], row[2], [x for x in row[3:]]))
            
            line_count += 1

    # Export all entries to dictionary 
    finalDict = {}
    for entry in allEntries:
        # First generate the base entry
        baseVal = {'tag': entry.tag, 'value': entry.names}
        finalDict[entry.role] = baseVal

        # Then generate email entry if there is an email
        if entry.email:
            # Email tags are @email-[base tag]
            emailVal = {'tag': entry.tag.replace("@", "@email-"), 'value': entry.email}
            finalDict["email-" + entry.role] = emailVal

    with open(BASIC_ENTRY_JSON_NAME, 'w') as fp:
        json.dump(finalDict, fp)
    
    print("Created {} with {} entries".format(BASIC_ENTRY_JSON_NAME, len(list(finalDict.keys()))))



if len(sys.argv) == 1 or "-h" in sys.argv:
    print("-b [filename.csv] for basic people generation (student leadership, a-team)")
    print("-paa [filename.csv] for PAAs")
    print("-f [filename.csv] for fellows")

else:
    if "-b" in sys.argv:
        # name of file must follow 
        generateBasicEntries(sys.argv[1 + sys.argv.index("-b")])