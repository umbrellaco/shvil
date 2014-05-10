import csv
import json
import re

city_data = []
criteria_data = []

city_meta = {}
with open('citymeta.json', 'r') as fp:
    raw = json.load(fp, encoding='utf-8')
    # have to clean up the encoding of the dict keys
    for k, v in raw.items():
        city_meta[unicode(k).encode('utf-8')] = v


with open('data.csv', 'r') as f:
    dr = csv.reader(f, delimiter=',', quotechar='"')
    data = [x for x in dr]

    categories = [cat for cat in data[0] if cat]

    criteria_counts = [6, 8, 4, 3, 7, 3, 3, 6, 5, 3, 4, 7, 2, 6, 2, 1, 6, 4, 1, 3, 3, 3, 1, 6, 4]


    cur_cat = None
    cur_fields = []
    pairs = zip(data[0], data[1])[2:]
    for cat, field in pairs:
        field = re.match(r'^(\d+\.)?(.*)', field).groups()[1].strip()
        if cat and cat != cur_cat:
            if cur_cat:
                criteria_data.append({
                    'category': cur_cat,
                    'fields': cur_fields,
                })
            cur_cat = cat
            cur_fields = []
        cur_fields.append(field)
    criteria_data.append({
        'category': cur_cat,
        'fields': cur_fields,
    })

    for row in data[2:]:
        cells = row
        website = cells[0]
        city = unicode(cells[1].decode('utf-8')).encode('utf-8')
        values = cells[2:]

        row_data = []

        count = 0
        for c in criteria_counts:
            row_data.append([float(v) for v in values[count:count + c]])
            count += c

        city_data.append({
            'name': city,
            'id': city_meta[city]['id'],
            'coordinates': city_meta[city]['coordinates'],
            'website': website,
            'data': row_data
        })

with open('data.json', 'wb') as fp:
    json.dump(city_data, fp, indent=4, ensure_ascii=False)

with open('guide.json', 'wb') as fp:
    json.dump(criteria_data, fp, indent=4, ensure_ascii=False)
