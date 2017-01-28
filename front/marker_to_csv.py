from os import environ as env
import csv
import pg8000 as pg

def main():
    conn = pg.connect(user="ryan", database="floodfront")
    cursor = conn.cursor()
    cursor.execute((""" SELECT marker.id, email, lat, lon, error_margin, created, marker_type
                        FROM marker
                        FULL OUTER JOIN app_user 
                        ON marker.user_id=app_user.id """))



    result = cursor.fetchall()

    with open('marker.csv', 'w') as csvfile:
        writer = csv.writer(csvfile, dialect='excel')
        writer.writerow(['ryan', 'constantino'])
        writer.writerow(['joseph', 'tan'])

main()