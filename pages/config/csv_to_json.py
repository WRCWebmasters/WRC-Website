import csv
import json
import sys

GENERAL_JSON_NAME = "general.json"
PAA_JSON_NAME = "paa.json"
FELLOWS_JSON_NAME = "fellow.json"
STRIVE_JSON_NAME = "strive.json"
LEADERSHIP_JSON_NAME = "leadership.json"
RHA_JSON_NAME = "rha.json"

def exportDict(dict, name):
    with open(name, 'w') as fp:
        json.dump(dict, fp)
    print("Created {} with {} entries".format(name, len(list(dict.keys()))))

class GeneralEntry:
    def __init__(self, role, tag, email, names):
        self.tag = tag
        self.role = role
        self.email = email if len(email) > 0 else None
        self.names = " & ".join(filter(lambda x: x != '', names))

def generateGeneralEntries(inputFile):
    allEntries = []

    # CSV columns are: [role] [tag] [email] [value] [value]...
    with open(inputFile) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count > 0:
                allEntries.append(GeneralEntry(row[0], row[1], row[2], [x for x in row[3:]]))
            
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

    exportDict(finalDict, GENERAL_JSON_NAME)

class PaaEntry:
    def __init__(self, name, major, minor, track, email, year ):
        self.email = email if len(email) > 0 else None
        self.name = name
        self.major = major
        self.minor = minor
        self.track = track
        self.year = year

def generatePaaEntries(inputFile):
    headEntries = []
    yearlongEntries = []

    # CSV columns are: [name] [email] [subject] [subject] ...
    with open(inputFile) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        isHeadPaa = True
        for row in csv_reader:
            if line_count > 0:
                if row[0] == "BREAK":
                    isHeadPaa = False
                    continue
                if isHeadPaa: 
                    headEntries.append(PaaEntry(row[0], row[1], row[2], row[3], row[4], row[5]))
                else:
                    yearlongEntries.append(PaaEntry(row[0], row[1], row[2], row[3], row[4], row[5]))
            
            line_count += 1

    # Export all entries to dictionary 
    finalDict = {}
    headDict = {}
    yearlongDict = {}
    
    for entry in yearlongEntries:
        val = {'email': entry.email, 'major': entry.major, 'minor': entry.minor, 'track': entry.track, 'year': entry.year}
        yearlongDict[entry.name] = val
    
    for entry in headEntries:
        val = {'email': entry.email, 'major': entry.major, 'minor': entry.minor, 'track': entry.track, 'year': entry.year}
        headDict[entry.name] = val

    finalDict["head"] = headDict
    finalDict["yearlong"] = yearlongDict

    exportDict(finalDict, PAA_JSON_NAME)

class FellowEntry:
    def __init__(self, name, netid, year, major, minor, track, category, classes):
        self.name = name
        self.year = year
        self.email = netid + '@rice.edu' if len(netid) > 0 else None
        self.classes = classes
        self.major = major
        self.minor = minor
        self.track = track
        self.category = category

def generateFellowEntries(inputFile):
    allEntries = []

    # CSV columns are: [name] [email] [major] [classes]
    with open(inputFile) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count == 0:
                if (row[0] != "Name" or row[1] != "Net ID" or row[2] != "Grad Year" or row[3] != "Major(s)" or row[4] != "Minor(s)" or row[5] != "Pre-Professional Track" or row[6] != "Category" or row[7] != "Classes"):
                    print("ERROR: " + inputFile + " column names are not in the correct format.")
                    return
            else:
                allEntries.append(FellowEntry(row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7]))
            
            line_count += 1

    # Export all entries to dictionary 
    finalDict = {}
    for entry in allEntries:
        val = {'email': entry.email, 'year': entry.year, 'major': entry.major, 'minor': entry.minor, 'track': entry.track, 'classes': entry.classes, 'category': entry.category}
        finalDict[entry.name] = val

    exportDict(finalDict, FELLOWS_JSON_NAME)

class StriveEntry:
    def __init__(self, name, email, year):
        self.name = name
        self.email = email
        self.year = year

def generateStriveEntries(inputFile):
    allEntries = []

    # CSV columns are: [name] [email]
    with open(inputFile) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count > 0:
                allEntries.append(StriveEntry(row[0], row[1], row[2]))
            
            line_count += 1

    # Export all entries to dictionary 
    finalDict = {}
    for entry in allEntries:
        finalDict[entry.name] = {"email": entry.email, "year": entry.year}

    exportDict(finalDict, STRIVE_JSON_NAME)

class LeadershipEntry:
    def __init__(self, role, email, names):
        self.role = role
        self.email = email if len(email) > 0 else None
        nyDelim = "|" # name-year delimiter
        placeholderName = "TBD"
        names = filter(lambda x: x != '', names)
        # people is a list with everyone in the names list, but transformed from "David Cai | 2019" to "David Cai '19"
        people = [(x.split(nyDelim)[0].strip() + " '" + str(x.split(nyDelim)[1].strip()[2:]) if x.strip() != placeholderName else x) for x in names] # wrap the string concat portion in parenthesis to avoid getting "TBD 'TBD" on TBD cases
        self.names = ", ".join(people)

def generateLeadershipEntries(inputFile):
    allSections = {}
    currentSection = [] # Section headers are marked with a hashtag (#) before the section name
    sectionOrder = [] # Kept track of so we can render the sections in the proper order on the page, since iterating through a dictionary is unordered

    # CSV columns are: [role] [email] [name | year] [name | year]...
    # The names are literally like "David Cai | 2019". The pipe is specified as nyDelim in the LeadershipEntry class
    with open(inputFile) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        currentSectionName = ""
        sectionHasEmail = False
        for row in csv_reader:
            if line_count > 0:
                if "#" in row[0]:
                    if line_count > 1: # Start of new section, avoid adding a blank entry at the beginning
                        currentSection = [{"role": x.role, "email": x.email, "names": x.names} for x in currentSection]
                        # If one of them has an email, fill the rest with empty string emails so the HTML Table can inflate the rest of the rows
                        if sectionHasEmail:
                            currentSection = [{"role": x["role"], "email": " ", "names": x["names"]} if not x["email"] else x for x in currentSection]
                        allSections[currentSectionName] = currentSection
                        sectionOrder.append(currentSectionName)
                        currentSection = []
                        sectionHasEmail = False
                    currentSectionName = row[0].replace("#", "").strip() # Place outside if block so it catches the first title, and doesn't update before it's saved in the allSections dict
                else:
                    currentSection.append(LeadershipEntry(row[0], row[1], [x for x in row[2:]]))
                    sectionHasEmail = row[1] != "" or sectionHasEmail
            
            line_count += 1

        # Add last section
        currentSection = [{"role": x.role, "email": x.email, "names": x.names} for x in currentSection]
        if sectionHasEmail:
            currentSection = [{"role": x["role"], "email": " ", "names": x["names"]} if not x["email"] else x for x in currentSection]
        allSections[currentSectionName] = currentSection
        sectionOrder.append(currentSectionName)            
    
    allSections["order"] = sectionOrder

    exportDict(allSections, LEADERSHIP_JSON_NAME)

class RhaEntry:
    def __init__(self, name, position, year_major, email, phone):
        self.name = name.strip()
        self.email = email if len(email) > 0 else None
        self.phone = phone if len(phone) > 0 else None
        self.year_major = year_major
        self.position = position if len(position) > 0 else None

def generateRhaEntries(inputFile):
    allEntries = []

    # CSV columns are: [name] [position] [year+major] [email] [phone]
    with open(inputFile) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter=',')
        line_count = 0
        for row in csv_reader:
            if line_count > 0:
                allEntries.append(RhaEntry(row[0], row[1], row[2], row[3], row[4]))
            
            line_count += 1

    # Export all entries to dictionary 
    finalDict = {}
    for entry in allEntries:
        val = {'position': entry.position, 'year_major': entry.year_major, 'email': entry.email, 'phone': entry.phone}
        finalDict[entry.name] = val

    exportDict(finalDict, RHA_JSON_NAME)


if len(sys.argv) == 1 or "-h" in sys.argv:
    print("-general [filename.csv] for general information (commonly cited people, links, etc)")
    print("-paa [filename.csv] for PAAs")
    print("-fellow [filename.csv] for Fellows")
    print("-strive [filename.csv] for STRIVE")
    print("-leadership [filename.csv] for Student Leadership")
    print("-rha [filename.csv] for RHA")
else:
    didSomething = False
    if "-general" in sys.argv:
        # name of file must follow 
        generateGeneralEntries(sys.argv[1 + sys.argv.index("-general")])
        didSomething = True
    
    if "-paa" in sys.argv:
        # name of file must follow 
        generatePaaEntries(sys.argv[1 + sys.argv.index("-paa")])
        didSomething = True

    if "-fellow" in sys.argv:
        # name of file must follow
        generateFellowEntries(sys.argv[1 + sys.argv.index("-fellow")])
        didSomething = True

    if "-strive" in sys.argv:
        # name of file must follow
        generateStriveEntries(sys.argv[1 + sys.argv.index("-strive")])
        didSomething = True

    if "-leadership" in sys.argv:
        # name of file must follow
        generateLeadershipEntries(sys.argv[1 + sys.argv.index("-leadership")])
        didSomething = True

    if "-rha" in sys.argv:
        # name of file must follow
        generateRhaEntries(sys.argv[1 + sys.argv.index("-rha")])
        didSomething = True

    if not didSomething:
        print ("Incorrect flag(s) -- nothing was generated.")


