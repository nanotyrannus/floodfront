from lxml import etree
import pg8000 as pg

def main():
    conn = pg.connect(user="ryan", database="floodfront")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM MARKER")

    result = cursor.fetchall()

    #0 ID
    #1 user_ID
    #2 event_ID probably not gonna use
    #3 azimuth/heading
    #4 lat
    #5 lon
    #6 erro
    #7 timestamp



    root = etree.Element("kml", xmlns="http://www.opengis.net/kml/2.2")
    document = etree.SubElement(root, "Folder")
    name = etree.SubElement(document, "name")
    name.text = "markers"

    for row in result:
        # print(row)
        placemark = etree.SubElement(document, "Placemark")
        point = etree.SubElement(placemark, "Point")
        coords = etree.SubElement(point, "coordinates")
        coords.text = "{0},{1}".format(round(row[5], 6), round(row[4], 6))
        heading = etree.SubElement(placemark, "heading")
        heading.text = str(row[3])
        extended_data = etree.SubElement(placemark, "ExtendedData")
        marker_id = etree.SubElement(extended_data, "Data", name="markerId")
        marker_id_value = etree.SubElement(marker_id, "value")
        marker_id_value.text = str(row[0])
        error_margin = etree.SubElement(extended_data, "Data", name="errorMargin")
        error_margin_value = etree.SubElement(error_margin, "value")
        error_margin_value.text = str(row[6])
        timestamp = etree.SubElement(extended_data, "Data", name="timeStamp")
        timestamp_value = etree.SubElement(timestamp, "value")
        timestamp_value.text = row[7].utcnow().strftime("%Y%m%d %H%M%S")

    out_file = open("markers.kml", 'w')
    out_file.write(etree.tostring(root, pretty_print=True, xml_declaration=True))
    out_file.close()

main()

