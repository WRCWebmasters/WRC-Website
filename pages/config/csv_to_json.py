import csv
import json
import sys


BASIC_ENTRY_JSON_NAME = "people.json"
PAA_JSON_NAME = "paa.json"
FELLOWS_JSON_NAME = "fellows.json"
STRIVE_JSON_NAME = "strive.json"

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

class PaaEntry:
    def __init__(self, name, email, subjects ):
        self.subjects = ", ".join(filter(lambda x: x != '', subjects))
        self.email = email if len(email) > 0 else None
        self.name = name

def generatePaaEntries(inputFile):
    headEntries = []
    yearlongEntries = []

    # CSV columns are: [name] [email] [subject] [subject] ...
    with open(inputFile) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        is_head_paa = True
        for row in csv_reader:
            if line_count > 0:
                if row[0] == "BREAK":
                    is_head_paa = False
                    continue
                if is_head_paa: 
                    headEntries.append(PaaEntry(row[0], row[1], [x for x in row[2:]]))
                else:
                    yearlongEntries.append(PaaEntry(row[0], row[1], [x for x in row[2:]]))
            
            line_count += 1

    # Export all entries to dictionary 
    finalDict = {}
    headDict = {}
    yearlongDict = {}
    
    for entry in yearlongEntries:
        val = {'subjects': entry.subjects, 'email': entry.email}
        yearlongDict[entry.name] = val
    
    for entry in headEntries:
        val = {'subjects': entry.subjects, 'email': entry.email}
        headDict[entry.name] = val

    finalDict["head"] = headDict
    finalDict["yearlong"] = yearlongDict

    with open(PAA_JSON_NAME, 'w') as fp:
        json.dump(finalDict, fp)
    
    print("Created {} with {} entries".format(PAA_JSON_NAME, len(list(finalDict.keys()))))

class FellowEntry:
    def __init__(self, name, email, major, classes, category):
        self.name = name
        self.email = email if len(email) > 0 else None
        self.classes = classes
        self.major = major
        self.category = category

def generateFellowEntries(inputFile):
    allEntries = []

    # CSV columns are: [name] [email] [major] [classes]
    with open(inputFile) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count == 0: 
                if (row[0] != "Name" or row[1] != "Email" or row[2] != "Major" or row[3] != "Classes" or row[4] != "Category"):
                    print("ERROR: " + inputFile + " column names are not in format \"Name, Email, Major, Classes, Category\"")
                    return
            else:
                allEntries.append(FellowEntry(row[0], row[1], row[2], row[3], row[4]))
            
            line_count += 1

    # Export all entries to dictionary 
    finalDict = {}
    for entry in allEntries:
        val = {'email': entry.email, 'major': entry.major, 'classes': entry.classes, 'category': entry.category}
        finalDict[entry.name] = val

    with open(FELLOWS_JSON_NAME, 'w') as fp:
        json.dump(finalDict, fp)
    
    print("Created {} with {} entries".format(FELLOWS_JSON_NAME, len(list(finalDict.keys()))))

class StriveEntry:
    def __init__(self, name, email):
        self.name = name
        self.email = email

def generateStriveEntries(inputFile):
    allEntries = []

    # CSV columns are: [name] [email]
    with open(inputFile) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count > 0:
                allEntries.append(StriveEntry(row[0], row[1]))
            
            line_count += 1

    # Export all entries to dictionary 
    finalDict = {}
    for entry in allEntries:
        finalDict[entry.name] = {"email": entry.email}

    with open(STRIVE_JSON_NAME, 'w') as fp:
        json.dump(finalDict, fp)
    
    print("Created {} with {} entries".format(STRIVE_JSON_NAME, len(list(finalDict.keys()))))




if len(sys.argv) == 1 or "-h" in sys.argv:
    print("-b [filename.csv] for basic people generation (student leadership, a-team)")
    print("-p [filename.csv] for PAAs")
    print("-f [filename.csv] for fellows")
    print("-s [filename.csv] for STRIVE")
else:
    if "-b" in sys.argv:
        # name of file must follow 
        generateBasicEntries(sys.argv[1 + sys.argv.index("-b")])
    
    if "-p" in sys.argv:
        # name of file must follow 
        generatePaaEntries(sys.argv[1 + sys.argv.index("-p")])

    if "-f" in sys.argv:
        # name of file must follow
        generateFellowEntries(sys.argv[1 + sys.argv.index("-f")])

    if "-s" in sys.argv:
        # name of file must follow
        generateStriveEntries(sys.argv[1 + sys.argv.index("-s")])



