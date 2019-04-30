## Dynamic Name Insertion System for the WRC Website

### Last update:
- 5/2019 -- David Cai

### This README describes how the name-population framework of the website works, and how to use it. 

The most regularly updated pages of the website are those containing the names of people in various roles, which changes every school year. Because there are many such people on the site, it's not efficient to go through and edit the actual HTML every year. Instead, a JS based system is in place to automatically generate the HTML associated with those people. 

Below is a quick overview of data flow through the system, before we dive into the specifics of each element.

```
[CSV] --> [transformation script] --> [JSON] --> [dynamic JS insertion on the webpage]
```

## CSV
The source-of-truth for this framework comes from the set of CSVs. These are made as CSVs so non-technical people (e.g. the head PAA, head fellow, etc) can send it to the webmasters without much trouble. Each CSV has a slightly different form, since each page has slightly different information requests. However, there are a couple things to note:
- Variable-length arguments (e.g. the subjects a fellow covers, the people on a committee) need to be the last columns in a given row. This is because the CSVs will be parsed by a python script later.
- Or, variable length arguments can be handled by pre-concatenating them and putting them in a quoted string in the CSV. Quoted strings (e.g. "foo, bar") can contain commas and will not affect the parsing of the CSV (i.e. they will be read as a single column). 

I will not go into the details of each CSV, since formats may change year to year. 

## Transformation script
Recall that we use the CSVs to obtain the information from the various groups, but the JS requires a JSON input format. The transformation script (`csv_to_json.py`) bridges that gap. 

The script contains a class definition and a "generate" method for each data type (e.g. fellow, paa, general person). This isn't the most code-friendly, but it allows for quick updating of existing types, and for quick creation of new types. The script simply reads in the CSV, inflates a class object, then writes out those class objects as JSON entries. 

The naming structure across the CSV/JSON/JS is technically flexible (names are specified at each level, instead of assumed), but the simplest format is probably `fellows.csv`/`fellows.json`/`populate-fellows.js`.

The script is set up for the user to specify which JSON files need to be regenerated via a flag, followed by the name of the CSV containing the relevant information. Run `python csv_to_json.py -h` to see a full list of commands. 

## JSON
The JSON files shouldn't need to be touched by anyone, as they are automatically generated and read. Obviously if the data fields change for a page, the associated `generate_json` method in `csv_to_json.py` and the associated `populate-foobar.js` script need to be updated to reflect those changes. 

Notes about the JSON format:
- The format should be designed to be as small of a file as possible. This is why there are no newlines/tabs in the outputted JSON.
- To keep the size down, the key to each object is often some actual information (e.g. a person's name), to reduce repeated data. Hence in the JS, you will see a mix of `var email = value["email"]` and `var name = key` (as an example).

## JS Insertion Scripts
There are two types of pages, which dictate the two different types of scripts: 
- Pages with large lists/tables of people
- Pages that are mostly prose, but may reference a person

### For lists of people:
1. The HTML page has an `id` on the container element into which all the entries will be inserted.
2. The JS script reads in the associated JSON file (defined at the top of the script) and for each element, creates an HTML object populated by the contents of the JSON element. 
3. The JS script inserts the newly created element into the container element on the page.

Notes:
- Because the script _inserts elements into the page_, the page must already be loaded before the script runs. This is why all of the `populate-foo` script tags are put at the bottom of each page, right before the closing `</body>` tag. 
- The styling of the HTML object will change on a page-by-page basis.
- The JSON handling and DOM manipulation methods require JQuery. 

### For occasional references to people:
1. Instead of writing the page with someone's name (e.g. "Contact our coordinator, Dale, with questions"), use the @-tag system (e.g. "Contact our coordinator, @coordinator, with questions"). 
2. The script performs a regex search for each @-tag and replaces it with the specified value. 

Notes for the @-tag system:
- Note the particular ordering of the @-tag naming convention, namely `@coordinator` and `@email-coordinator`. While it might seem intuitive to specify the email as `@coordinator-email`, this will lead to an overeager regex if the search is not done in the proper order. To protect against this, the naming is such that no regex overlap can occur. 
- The script that performs the @-tag replacement (`populate-names.js`) is included on every page. This frees the webmaster from keeping track of the contents of each page -- as long as you are judicious about using the @-tag system when creating pages, you will never have to worry about stale names/emails.
- This system has a different naming structure: `people.csv`/`people.json`/`populate-names.js`.
- The regex methods, JSON handling, and DOM manipulation methods, require JQuery.