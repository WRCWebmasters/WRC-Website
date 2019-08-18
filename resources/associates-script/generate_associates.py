import csv
from collections import defaultdict

# Escape for HTML
def escape(input):
	return input.translate(str.maketrans({"\"":"&quot;"}))

def create_div(name, photo_name, email1, email2, job1, job2, bio):
	# If one person
	div1 = "<div class=\"row content\" style=\"padding: 10px\">\n\
			<div class=\"col-4\">\n\
				<img src=\"../resources/images/associates/{}.jpg\" style=\"width:100%\">\n\
			</div>\n\
			<div class=\"col-3\">\n\
				<h1>{}</h1>\n\
				<p>{}<br><a href=\"mailto:{}\">{}</a></p>\n\
			</div>\n\
			<div class=\"col-5\">\n\
				<p>{}</p>\n\
			</div>\n\
		</div>"

	# If two people
	div2 = "<div class=\"row content\" style=\"padding: 10px\">\n\
		<div class=\"col-4\">\n\
			<img src=\"../resources/images/associates/{}.jpg\" style=\"width:100%\">\n\
		</div>\n\
		<div class=\"col-3\">\n\
			<h1>{}</h1>\n\
			<p>{}<br><a href=\"mailto:{}\">{}</a></p>\n\
			<p>{}<br><a href=\"mailto:{}\">{}</a></p>\n\
		</div>\n\
		<div class=\"col-5\">\n\
			<p>{}</p>\n\
		</div>\n\
	</div>"

	if email2 == "":
		return str.format(div1, photo_name, name, job1, email1, email1, bio)
	else:
		return str.format(div2, photo_name, name, job1, email1, email1, job2, email2, email2, bio)

with open("associates.csv") as file:
	reader = csv.DictReader(file)
	line_count = 0

	divs = defaultdict(list)
	for row in reader:
		name = row["Name"].strip()
		photo_name = name
		cat = row["Category"].strip()
		email1 = row["Email"]
		email2 = row["Second Email"]
		job1 = row["Job"]
		job2 = row["Second Job"]
		bio = row["Bio"]

		photo_name = escape(photo_name)


		# Fix inconsistent formatting for category
		if "Associates" not in cat:
			cat += "s"

		div = create_div(name, photo_name, email1, email2, job1, job2, bio)
		divs[cat].append(div)



	# Put it together, with section headers

	header = "<div class=\"row\">\n\
		<h2>{}</h2>\n\
	</div>"

	sections = ["Faculty Associates", "University Associates", "Community Associates"]
	final = ""

	for section in sections:
		final += str.format(header, section)
		for associate in divs[section]:
			final += associate
			final += "\n"

	print(final)











