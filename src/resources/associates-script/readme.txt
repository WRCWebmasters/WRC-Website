Here includes a csv of all associates and the python script to generate all of the HTML entires given those associates.
Run using 'python generate_associates.py'. For best results, pipe output to another file. Then just copy/paste the output
into the associates.html page and replace what was there.

You will probably need to convert the xlsx to csv first
You will also probably need to do some manual editing of the output (some picture names will be off, quotations in names
aren't allowed)

To pipe text to another file
python generate_associates.py > piped_file.txt