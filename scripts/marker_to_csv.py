import csv

def main():
    with open('marker.csv', 'w') as csvfile:
        writer = csv.writer(csvfile, dialect='excel')
        writer.writerow(['ryan', 'constantino'])
        writer.writerow(['joseph', 'tan'])

main()